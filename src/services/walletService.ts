/* eslint-disable */

import Web3 from 'web3';

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const web3 = new Web3(window.ethereum);
      const walletAddress = accounts[0];
      const message = `Sign this message to connect your wallet: ${new Date().toString()}`;

      const signature = await web3.eth.personal.sign(
        message,
        walletAddress,
        ''
      );

      console.log('Signed message:', signature);
      return walletAddress;
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      throw error;
    }
  } else {
    alert('Please install MetaMask to use this feature.');
  }
};
