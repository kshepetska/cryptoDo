import {useState} from 'react';
import * as Popover from '@radix-ui/react-popover';
import walletIcon from '../../assets/wallet.svg';
import {useSignMessage} from 'wagmi';
import {shortenAddress} from '../../utilities/idex';
import Metamask from '../../assets/metamask_icon.png';
import {CopyIcon} from '../../assets/svgComponents/CopyIcon';
import {NextArrow} from '../../assets/svgComponents/NextArrow';
import {MobileOverlay} from '../MobileOverlay';

export const UserWallet = ({address}: {address: string}) => {
  const [isPopoverOpened, setIsPopoverOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const {signMessage} = useSignMessage({});

  return (
    <>
      <Popover.Root open={isPopoverOpened} onOpenChange={setIsPopoverOpened}>
        <Popover.Trigger asChild>
          <div className="relative flex h-[48px] items-center gap-2 px-3 py-1 bg-gradient-to-tr from-[#00C3FD] to-[#0284E2] rounded-[42px] shadow-md cursor-pointer transition-all duration-200 ease-in-out hover:from-[#00A6E2] hover:to-[#0272B7]">
            <img className="w-6 h-6" src={walletIcon} alt="walletIcon" />
            <span className="hidden md:block text-sm uppercase text-white">
              {shortenAddress(address)}
            </span>
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            side="bottom"
            sideOffset={10}
            align="end"
            avoidCollisions={true}
            className="z-50 w-screen outline-none"
            style={{
              minWidth: 'var(--radix-popover-trigger-width)',
            }}
          >
            <>
              <div className="relative z-20 mx-auto border p-5 md:mr-10 font-sans w-full sm:w-[413px] max-w-[336px] sm:max-w-[327px] max-h-[488px] invisible-scrollbar border-l-100 border-opacity-10 rounded-[1.25rem] bg-[#070A1F] text-white overflow-auto">
                <div className="flex gap-2 items-center mb-5">
                  <div className="font-bold">Wallet</div>
                </div>
                <div className="mb-5 flex items-center gap-[10px]">
                  <div className="p-2 bg-[#070A1F] rounded-md">
                    <img
                      className="w-6 h-6"
                      src={Metamask as string}
                      alt="Metamask"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-l-600 text-xs leading-5">Ethereum</div>
                    <div className="font-normal text-sm leading-6">
                      {shortenAddress(address, 4, 5)}
                    </div>
                  </div>
                  <CopyIcon
                    className="cursor-pointer [&>*]:transition-all"
                    rectanglesColor={copied ? '#E5FD55' : 'white'}
                    onClick={handleCopy}
                  />
                </div>
                <div className="flex justify-end relative">
                  <div
                    className={`flex items-center justify-between gap-[10px] text-xs font-normal uppercase leading-3 text-white hover:underline cursor-pointer transition-all duration-200 ease-in-out bg-gradient-to-tr from-[#00C3FD] to-[#0284E2] rounded-[42px] py-3 w-full px-3`}
                    onClick={() => {
                      if (address) {
                        signMessage({
                          message:
                            'Binding the wallet to an account on the CryptoDo platform.',
                        });
                      }
                    }}
                  >
                    Connect new wallet
                    <NextArrow width={24} height={4} />
                  </div>
                </div>
              </div>

              <MobileOverlay />
            </>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
};
