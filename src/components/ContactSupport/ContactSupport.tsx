import React from 'react';
import emailIcon from '../../assets/emailIcon.svg';
import tgIcon from '../../assets/tgIcon.svg';

interface ContactSupportProps {
  variant: 'large' | 'small';
}

export const ContactSupport = ({variant}: ContactSupportProps) => {
  const buttonClassnames =
    'flex justify-center items-center gap-2 font-inter uppercase font-bold tracking-[-0.24px] transition-all duration-300 group';

  const iconClassnames =
    'transition-transform duration-300 transform group-hover:scale-125';

  const textClassnames =
    'transition-colors duration-300 text-white group-hover:text-hover-link';

  return (
    <>
      {variant === 'large' ? (
        <div
          className={`rounded-[20px] p-6 backdrop-blur-lg shadow-lg shadow-[#286497] flex flex-col gap-6`}
        >
          <div className="flex items-center gap-4">
            <img className="w-12 h-12" src={emailIcon} alt="emailIcon" />
            <div className="text-xl font-semibold mb-2 capitalize text-white">
              Still have questions?
            </div>
          </div>
          <p className="text-sm leading-6 text-white">
            If you can’t find answers in your FAQ, contact us by email or
            Telegram! Form your question clearly to get a faster response.
            Average response time is 15 minutes to 2 hours.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 mt-6">
            <a
              href="mailto:katerynashepetska@gmail.com"
              target="_blank"
              className={buttonClassnames}
            >
              <span className={textClassnames}>E-mail</span>
              <img
                className={iconClassnames}
                width={20}
                height={20}
                src={emailIcon}
                alt="icon"
              />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              className={buttonClassnames}
            >
              <span className={textClassnames}>Telegram</span>
              <img
                className={iconClassnames}
                width={20}
                height={20}
                src={tgIcon}
                alt="icon"
              />
            </a>
          </div>
        </div>
      ) : (
        <div
          className={`rounded-[20px] p-6 backdrop-blur-lg shadow-lg shadow-[#286497] flex flex-col gap-6`}
        >
          <span className="text-xl font-semibold capitalize text-white">
            Still have questions?
          </span>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="mailto:katerynashepetska@gmail.com"
              target="_blank"
              className={buttonClassnames}
            >
              <span className={textClassnames}>E-mail</span>
              <img
                className={iconClassnames}
                width={20}
                height={20}
                src={emailIcon}
                alt="icon"
              />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              className={buttonClassnames}
            >
              <span className={textClassnames}>Telegram</span>
              <img
                className={iconClassnames}
                width={20}
                height={20}
                src={tgIcon}
                alt="icon"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
