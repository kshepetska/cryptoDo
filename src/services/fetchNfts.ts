import axios from 'axios';
import {NFT, BASE_URL} from '../types/nfts';

const fetchNFTs = async (contractAddress: string): Promise<NFT[]> => {
  const response = await axios.get(
    `${BASE_URL}/getNFTs?owner=${contractAddress}`
  );

  return (response.data.ownedNfts as NFT[]).filter(
    nft =>
      nft.title && nft.media && nft.media.length > 0 && nft.media[0].gateway
  );
};

export {fetchNFTs};
