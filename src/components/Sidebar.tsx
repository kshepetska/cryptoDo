import {useWeb3Modal} from '@web3modal/react';
import {Link} from 'react-router-dom';
import adaptiveLogo from '../assets/logo.png';
import sidebarArrow from '../assets/sidebarArrow.svg';
import logo from '../assets/sidebarlogo.png';
import {useWindowResize} from '../hooks/useWindowResize';
import {SidebarClasses} from '../layouts/constants';
import {sidebarLinks} from './constants';
import {handleExternalLinkOpen} from '../utilities/handleExternalLinkOpen';

interface SidebarLinksConfig {
  id: number;
  icon: string;
  linkName: string;
  url?: string;
  isAdaptive?: boolean;
  externalURl?: string;
}

export interface SidebarProps {
  open: boolean;
  toggle: () => void;
  translated: boolean;
}

export const Sidebar = ({open, toggle, translated}: SidebarProps) => {
  const isAdaptive = useWindowResize(768);
  const handleWalletModal = useWeb3Modal().open;
  const isWalletModalActive = useWeb3Modal().isOpen;
  const sidebarWidth = open
    ? SidebarClasses.defaultSize
    : SidebarClasses.smallerSize;

  return (
    <div
      style={{
        width: `${sidebarWidth}px`,
        background: 'linear-gradient(120deg, #0194FE 5%, transparent 70%)',
      }}
      className={`md:translate-x-0 rounded-tr-[50px] transition-all fixed z-[100] h-[calc(100%-69px)] top-[69px] md:top-0 left-0 md:h-full ${
        !translated || isWalletModalActive
          ? '-translate-x-full'
          : 'translate-x-0'
      }`}
    >
      <button
        className={`w-6 h-6 hidden md:flex justify-center items-center z-[100] absolute -right-3 ${
          open && isAdaptive ? 'top-8' : 'rotate-180 top-14'
        }`}
        onClick={toggle}
      >
        <img src={sidebarArrow} alt="arrowIcon" />
      </button>
      <div
        className={`pt-6 pb-4 md:pt-0 flex flex-col h-full overflow-y-scroll md:overflow-auto ${
          open && isAdaptive ? 'px-4' : 'px-2'
        }`}
      >
        <div className="hidden md:block">
          <Link
            to={'/dashboard'}
            className={`px-4 py-8 mb-8 transition-all hover:opacity-70 ${
              open && isAdaptive ? 'block' : 'hidden'
            }`}
          >
            <img src={logo} alt="logo" />
          </Link>
          <Link
            to={'/dashboard'}
            className={`py-4 mb-8 justify-center items-center ${
              open && isAdaptive ? 'hidden' : 'flex py-5'
            }`}
          >
            <img src={adaptiveLogo as string} alt="adaptiveLogo" />
          </Link>
        </div>
        <div className="flex-1 pb-2">
          <span
            className={`px-4 mb-4 text-l-500 text-sm uppercase ${
              open && isAdaptive ? 'block' : 'hidden'
            }`}
          >
            CRYPTODO
          </span>
          {sidebarLinks
            .filter(
              (sidebarLink: SidebarLinksConfig) =>
                sidebarLink.linkName !== 'Account'
            )
            .map((sidebarLink: SidebarLinksConfig, sidebarLinkIndex: number) =>
              sidebarLink.url ? (
                <Link
                  className={`flex items-center gap-4 xl:transition-all hover:bg-l-100 mb-2 min-h-[2.75rem] ${
                    sidebarLink.isAdaptive ? 'flex md:hidden' : ''
                  } ${
                    open
                      ? 'md:px-4 md:min-h-[3rem] px-3 justify-start rounded-[100px]'
                      : 'min-h-[2.75rem] w-[2.75rem] px-2 rounded-full justify-center'
                  }`}
                  key={sidebarLink.id}
                  to={sidebarLink.url}
                >
                  <img
                    className="w-6 h-6"
                    src={sidebarLink.icon}
                    alt="linkIcon"
                  />
                  <span
                    className={`text-sm uppercase font-semibold ${
                      open && isAdaptive ? 'block' : 'hidden'
                    }`}
                  >
                    {sidebarLink.linkName}
                  </span>
                </Link>
              ) : sidebarLink.externalURl ? (
                <div
                  className={`flex cursor-pointer items-center gap-4 xl:transition-all hover:bg-l-100 mb-2 min-h-[2.75rem] ${
                    sidebarLink.isAdaptive ? 'flex md:hidden' : ''
                  } ${
                    open
                      ? 'md:px-4 md:min-h-[3rem] px-3 justify-start rounded-[100px]'
                      : 'min-h-[2.75rem] w-[2.75rem] px-2 rounded-full justify-center'
                  }`}
                  key={sidebarLink.id}
                  onClick={() =>
                    handleExternalLinkOpen(sidebarLink.externalURl!)
                  }
                >
                  <img
                    className="w-6 h-6"
                    src={sidebarLink.icon}
                    alt="linkIcon"
                  />
                  <span
                    className={`text-sm uppercase font-semibold ${
                      open && isAdaptive ? 'block' : 'hidden'
                    }`}
                  >
                    {sidebarLink.linkName}
                  </span>
                </div>
              ) : (
                <button
                  key={sidebarLinkIndex}
                  onClick={handleWalletModal}
                  className="flex md:hidden items-center gap-3 min-h-[44px] px-3 w-full hover:bg-l-100 rounded-[100px]"
                >
                  <img src={sidebarLink.icon} alt="buttonIcon" />
                  <span className="text sm uppercase font-semibold">
                    {sidebarLink.linkName}
                  </span>
                </button>
              )
            )}
        </div>
      </div>
    </div>
  );
};
