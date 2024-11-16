import {FC, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import walletIcon from '../assets/wallet.svg';
import {BurgerButton} from './burgerButton';
import {LogoutButton} from './LogoutButton';
import {getHeaderNavigationIcon} from '../utilities/getHeaderNavigationIcon';
import {BackwardNavigation} from './HeaderContent/BackwardNavigation';
import projectLogo from '../assets/sidebarlogo.png';
import {UserWallet} from './UserWallet';
import {connectWallet} from '../services/walletService';

interface BackwardNavigationProps {
  link: string;
  title: string;
  currentLocationName: string;
  targetLocationName: string;
  targetLocationPath: string;
}
export interface HeaderProps {
  isOpened: boolean;
  handleTranslateSidebar: () => void;
  backwardNavigation?: BackwardNavigationProps;
  logo?: boolean;
}

export const Header: FC<HeaderProps> = ({
  isOpened,
  handleTranslateSidebar,
  backwardNavigation,
  logo = false,
}) => {
  const navigationLinkConfig = getHeaderNavigationIcon();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const storedWalletAddress = localStorage.getItem('walletAddress');
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
    }
  }, []);

  const handleConnectWallet = async (): Promise<void> => {
    if (typeof window.ethereum === 'undefined') {
      alert(
        'MetaMask is not installed. Please install it to connect your wallet.'
      );
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    try {
      const address: string | null = await connectWallet();
      if (address) {
        setWalletAddress(address);
        localStorage.setItem('walletAddress', address);
      }
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  return (
    <header
      className="flex sm:justify-center"
      style={{
        borderBottom: '3px solid transparent',
        borderImage:
          'linear-gradient(to right, transparent, #3DB2E8, transparent) 1',
      }}
    >
      <div className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8 py-2 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <BurgerButton
            isOpened={isOpened}
            handleTranslateSidebar={handleTranslateSidebar}
          />
          {backwardNavigation && <BackwardNavigation {...backwardNavigation} />}
          {logo && (
            <Link to="/dashboard">
              <img src={projectLogo} alt="Logo" width={119} height={28} />
            </Link>
          )}
          {!logo && !backwardNavigation && navigationLinkConfig && (
            <div className="flex items-center gap-2 md:gap-3">
              <img
                className="w-4 h-4 md:w-6 md:h-6 hidden sm:block"
                src={navigationLinkConfig.navIcon}
                alt="dashboardIcon"
              />
              <Link
                to={navigationLinkConfig.url as string}
                className="text-base font-medium uppercase"
              >
                {navigationLinkConfig.linkName}
              </Link>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="hidden md:block w-[1px] h-5 bg-l-200"></span>
          {walletAddress ? (
            <UserWallet address={walletAddress} />
          ) : (
            <button
              onClick={handleConnectWallet}
              className="shadow-md bg-[#01C3FD] bg-opacity-10 backdrop-blur-md hover:bg-opacity-20 transition-colors duration-200 ease-in-out flex items-center justify-center w-11 h-11 rounded-full"
            >
              <img className="w-6 h-6" src={walletIcon} alt="walletIcon" />
            </button>
          )}
          <LogoutButton />
        </div>
      </div>
    </header>
  );
};
