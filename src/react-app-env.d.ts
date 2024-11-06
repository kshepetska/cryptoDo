/// <reference types="react-scripts" />

interface Window {
  Telegram: {
    Login: {auth: (options: any, callback: (data: any) => void) => void};
  };
  ethereum?: MetaMaskInpageProvider;
}
