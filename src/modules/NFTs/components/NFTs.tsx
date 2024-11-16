import React, {useEffect, useState} from 'react';
import {fetchNFTs} from '../../../services/fetchNfts';
import {NftModal} from './NftModal';
import {NFT} from '../../../types/nfts';
import {Button} from '../../../components/Button';

const SkeletonNFT: React.FC = () => (
  <div className="rounded-[20px] min-w-[220px] max-w-[320px] w-full p-6 backdrop-blur-lg shadow-lg shadow-[#286497] flex flex-col gap-3">
    <div className="w-full h-[192px] bg-[#004DF4] bg-opacity-20 animate-pulse rounded-md"></div>
    <div className="w-3/4 h-6 bg-[#004DF4] bg-opacity-20 animate-pulse rounded mt-4"></div>
    <div className="w-full h-[180px] bg-[#004DF4] bg-opacity-20 animate-pulse rounded mt-2"></div>
  </div>
);

export const NFTDisplay: React.FC = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedNfts, setDisplayedNfts] = useState<NFT[]>([]);

  const CONTRACT_ADDRESS = '0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c';
  const ITEMS_PER_LOAD = 12;

  useEffect(() => {
    const loadNFTs = async () => {
      try {
        const nftsData = await fetchNFTs(CONTRACT_ADDRESS);
        setNfts(nftsData);
        setDisplayedNfts(nftsData.slice(0, ITEMS_PER_LOAD));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err as Error);
      }
    };

    void loadNFTs();
  }, [CONTRACT_ADDRESS]);

  const handleNFTClick = (nft: NFT) => {
    setSelectedNFT(nft);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNFT(null);
  };

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error fetching NFTs: {error.message}
      </div>
    );
  }
  const handleLoadMore = () => {
    const nextIndex = displayedNfts.length;
    const nextArticles = nfts.slice(nextIndex, nextIndex + ITEMS_PER_LOAD);
    setDisplayedNfts(prevNfts => [...prevNfts, ...nextArticles]);
  };

  return (
    <div className="mb-2 w-full">
      <div className="w-full flex flex-wrap gap-6 p-8 justify-center">
        {loading
          ? Array(12)
              .fill(0)
              .map((_, index) => <SkeletonNFT key={index} />)
          : displayedNfts.map(nft => (
              <div
                key={nft.id.tokenId}
                className="cursor-pointer rounded-[20px] min-w-[200px] w-full max-w-[320px] p-6 backdrop-blur-lg shadow-lg shadow-[#286497] flex flex-col gap-6 hover:scale-102 flex-grow"
                onClick={() => handleNFTClick(nft)}
              >
                <div className="relative rounded-xl shadow-lg transition transform">
                  <img
                    src={nft.media[0]?.gateway}
                    alt={nft.title}
                    className="w-full h-48 object-cover rounded-md shadow-inner"
                  />
                  <h3 className="text-xl font-semibold mt-4 text-white">
                    {nft.title}
                  </h3>
                  <p className="text-gray-300 h-[180px] max-h-[180px] overflow-y-auto thin-scrollbar mt-2 overflow-hidden text-ellipsis whitespace-pre-line">
                    {nft.description || 'No description available.'}
                  </p>
                </div>
              </div>
            ))}
      </div>

      {displayedNfts.length < nfts.length && (
        <div className="text-center mt-6">
          <Button
            text={'Load more'}
            onClick={handleLoadMore}
            className="px-4 mb-2"
          />
        </div>
      )}

      <NftModal isOpen={isModalOpen} nft={selectedNFT} onClose={closeModal} />
    </div>
  );
};
