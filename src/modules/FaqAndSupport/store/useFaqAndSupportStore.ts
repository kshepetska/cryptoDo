'use strict';

import {create, useStore} from 'zustand';

export interface FaqAndSupportStore {
  list: FaqAndSupportElementType[];
}

export interface FaqAndSupportElementType {
  id: string;
  title: string;
  content: string;
}

// Extended mocked FAQ data for a crypto-themed app
const initialState: FaqAndSupportElementType[] = [
  {
    id: '1',
    title: 'How can I explore cryptocurrency charts?',
    content:
      'You can view detailed charts by navigating to the “Charts” tab, where real-time data and historical trends of various cryptocurrencies are displayed.',
  },
  {
    id: '2',
    title: 'What are NFTs and how can I view them?',
    content:
      'NFTs, or Non-Fungible Tokens, represent unique digital assets. You can explore popular NFTs by going to the “NFT Gallery” section.',
  },
  {
    id: '3',
    title: 'How frequently is the news section updated?',
    content:
      'Our news feed is updated hourly to provide the latest in cryptocurrency and blockchain news, keeping you informed of market trends and updates.',
  },
  {
    id: '4',
    title: 'Can I set alerts for specific coin prices?',
    content:
      'Yes, go to the “Alerts” section under settings to set up customized price alerts for your favorite cryptocurrencies.',
  },
  {
    id: '5',
    title: 'Is my data secure on this app?',
    content:
      'We use state-of-the-art encryption to ensure your data remains private and secure at all times.',
  },
  {
    id: '6',
    title: 'How do I create an account?',
    content:
      'To create an account, tap the “Sign Up” button on the login screen and follow the prompts to enter your details and set a secure password.',
  },
  {
    id: '10',
    title: 'What types of coins can I view on this app?',
    content:
      'The app provides information on all major cryptocurrencies, including Bitcoin, Ethereum, and thousands of altcoins, as well as trending and emerging tokens.',
  },
  {
    id: '13',
    title: 'How do I connect my wallet to the app?',
    content:
      'To connect a wallet, click on the wallet icon in header section. Metamask will be opened immidiatelly on your device. If you don`t have extention - install it firstly.',
  },
  {
    id: '15',
    title: 'How can I contact support?',
    content:
      'For further assistance, reach out via email or telegram to connect with our support team.',
  },
];

export const faqAndSupportStore = create<FaqAndSupportStore>(() => ({
  list: initialState,
}));

export const useFaqAndSupportStore = () => useStore(faqAndSupportStore);
