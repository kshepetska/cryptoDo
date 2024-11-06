export const ALCHEMY_API_KEY = 'demo';
export const BASE_URL = `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`;

export interface NFT {
  id: {
    tokenId: string;
  };
  title: string;
  description?: string;
  media: {
    gateway: string;
  }[];
  contractMetadata: {
    openSea: {
      collectionName?: string;
      twitterUsername?: string;
      discordUrl?: string;
    };
  };
}
