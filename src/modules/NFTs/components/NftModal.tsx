import React from 'react';
import {NFT} from '../../../types/nfts';
import {Button} from '../../../components/Button';
import {FaTwitter, FaDiscord} from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  nft: NFT | null;
  onClose: () => void;
}

export const NftModal: React.FC<ModalProps> = ({isOpen, nft, onClose}) => {
  if (!isOpen || !nft) return null;

  const handleCopyLink = () => {
    if (nft.media[0]?.gateway) {
      void navigator.clipboard.writeText(nft.media[0].gateway);
      alert('Image link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black bg-opacity-70">
      <div className="rounded-[20px] max-w-3xl w-full p-6 backdrop-blur-lg shadow-lg shadow-[#286497] flex flex-col gap-6">
        <button
          onClick={onClose}
          className="self-end text-white hover:text-hover-link"
        >
          Close
        </button>
        <div className="flex gap-4">
          <div className="flex-1">
            <img
              src={nft.media[0]?.gateway}
              alt={nft.title}
              className="w-full h-full object-cover rounded-md shadow-inner"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-white">{nft.title}</h3>
            <h4 className="text-md mt-4 font-semibold text-hover-link">
              <span className="text-white">Collection:</span>{' '}
              {nft.contractMetadata.openSea.collectionName}
            </h4>
            <p className="text-gray-300 mt-2 max-h-[280px] overflow-y-auto thin-scrollbar overflow-hidden text-ellipsis whitespace-pre-line">
              {nft.description || 'No description available.'}
            </p>

            <div className="mt-4 w-full flex-col flex gap-4">
              <div className="flex space-x-2 mt-4">
                {nft.contractMetadata.openSea.twitterUsername && (
                  <a
                    href={`https://twitter.com/${nft.contractMetadata.openSea.twitterUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition"
                  >
                    <FaTwitter className="text-white" />
                  </a>
                )}
                {nft.contractMetadata.openSea.discordUrl && (
                  <a
                    href={nft.contractMetadata.openSea.discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 bg-gray-600 rounded-full hover:bg-gray-700 transition"
                  >
                    <FaDiscord className="text-white" />
                  </a>
                )}
              </div>
              <Button
                text={'Copy Image Link'}
                onClick={handleCopyLink}
                className="px-4 !w-full bg-green-600 text-white !text-[12px] rounded-md hover:bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
