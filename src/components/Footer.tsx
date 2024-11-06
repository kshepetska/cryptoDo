import React from 'react';
import {FaDiscord, FaTwitter, FaTelegram} from 'react-icons/fa';

interface FooterLink {
  text: string;
  url: string;
  icon: JSX.Element;
}

export const Footer: React.FC = () => {
  const currentYear = new Date().getUTCFullYear();

  const footerLinks: FooterLink[] = [
    {
      text: 'Discord',
      url: 'https://discord.com',
      icon: <FaDiscord size={20} />,
    },
    {
      text: 'Twitter',
      url: 'https://twitter.com',
      icon: <FaTwitter size={20} />,
    },
    {
      text: 'Telegram',
      url: 'https://telegram.org',
      icon: <FaTelegram size={20} />,
    },
  ];

  return (
    <footer>
      <div className="pb-8 px-[0.875rem] flex md:px-6 xl:px-10 sm:justify-center">
        <div
          className="md:pt-[1.875rem] w-full"
          style={{
            borderTop: '3px solid transparent',
            borderImage:
              'linear-gradient(to right, transparent, #3DB2E8, transparent) 1',
          }}
        >
          <div className="md:max-w-[660px] w-full m-auto flex-col justify-center xl:flex-row flex xl:gap-[4rem] items-start md:items-center gap-3">
            <span className="text-white uppercase text-md opacity-30 md:opacity-[.5]">
              {currentYear} © CRYPTODO, INC.
            </span>

            <ul className="flex items-center gap-8">
              {footerLinks.map((item, index) => (
                <li key={index} className="leading-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase whitespace-nowrap leading-4 text-xs font-semibold opacity-80 md:opacity-100 flex items-center gap-1 transition-colors duration-300 hover:text-hover-link"
                    style={{fontSize: '1rem'}}
                  >
                    <span className="transition-transform duration-300 hover:scale-125">
                      {React.cloneElement(item.icon, {size: 24})}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
