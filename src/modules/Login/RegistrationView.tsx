import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import logoIcon from '../../assets/logo.png';
import {TickCheck} from '../../assets/svgComponents/TickCheck';
import {Button} from '../../components/Button';
import {EMAIL_REGEX} from '../../constants/regularExpression';
import {signInUser, signInWithGoogle} from '../../services/auth';
import {auth} from '../../firebase/firebase';
import {onAuthStateChanged} from 'firebase/auth';

export const RegistrationView: React.FC = () => {
  const navigate = useNavigate();

  const [emailSignIn, setEmailSignIn] = useState<string>('');
  const [isTickChecked, setIsTickChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showErrorEmailSignIn, setShowErrorEmailSignIn] =
    useState<boolean>(false);
  const [messageFromRequestSignIn, setMessageFromRequestSignIn] =
    useState<string>('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        navigate('/dashboard');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const toggleTick = () => {
    setIsTickChecked(prev => !prev);
  };

  const isValidEmail = (email: string): boolean => EMAIL_REGEX.test(email);

  const handleSignInClick = async () => {
    if (!isValidEmail(emailSignIn) || !isTickChecked) {
      setShowErrorEmailSignIn(true);
      setMessageFromRequestSignIn(
        'Please check your email and terms agreement.'
      );
      return;
    }

    setIsLoading(true);
    try {
      await signInUser(emailSignIn, 'Password');
      navigate('/dashboard');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Sign in failed.';
      setMessageFromRequestSignIn(errorMessage);
      setShowErrorEmailSignIn(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Google sign-in failed.';
      setMessageFromRequestSignIn(errorMessage);
      setShowErrorEmailSignIn(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative lg:self-auto w-full">
      <div className="flex flex-col w-full max-w-[calc(414px+40px)] md:max-w-full mx-auto">
        <div className="md:hidden block absolute top-4 max-w-[102px]">
          <img src={logoIcon} alt="raiser" />
        </div>
        <div className="flex flex-col items-center h-screen md:h-auto xl:justify-center w-full max-w-[calc(414px+40px)] mx-auto md:px-6 md:pb-5">
          <div className="flex flex-col items-center w-full pb-10 md:pb-0">
            <div className="flex items-center mb-[48px] w-full pt-[134px] md:pt-0">
              <div className="text-4xl lg:text-[48px] text-white h-[51px] tracking-[-0.96px] font-inter font-semibold leading-[48px]">
                Sign In
              </div>
            </div>
            <div className="w-full">
              <div className="pb-[6px]">
                <span className="text-[14px] font-[400] font-inter leading-[20px] text-white">
                  Your e-mail
                </span>
                <input
                  type="email"
                  value={emailSignIn}
                  name="email"
                  placeholder="Enter your e-mail"
                  className={`px-5 py-[15px] mt-2 focus:outline-none ${
                    showErrorEmailSignIn || messageFromRequestSignIn
                      ? 'border-red-500'
                      : 'border-[#535456]'
                  } border-[1px] font-inter text-[14px] font-normal bg-transparent text-white rounded-[12px] w-full lg:w-[414px] placeholder-[#535456]`}
                  onChange={e => {
                    setEmailSignIn(e.target.value);
                    setShowErrorEmailSignIn(false);
                    setMessageFromRequestSignIn('');
                  }}
                />
                {showErrorEmailSignIn || messageFromRequestSignIn ? (
                  <span className="uppercase text-[12px] leading-[20px] text-red-500">
                    {messageFromRequestSignIn || 'Invalid E-mail'}
                  </span>
                ) : null}
              </div>
              <div className="flex pt-[36px]">
                <div
                  onClick={toggleTick}
                  className="hover:bg-opacity-80 cursor-pointer h-6"
                >
                  {isTickChecked ? (
                    <TickCheck />
                  ) : (
                    <input
                      type="checkbox"
                      className="appearance-none border border-[#2C2E2F] rounded-[4px] w-5 h-5"
                    />
                  )}
                </div>
                <span className="text-white text-[12px] pt-[1px] text-opacity-50 font-inter pl-2">
                  I agree with{' '}
                  <span className="text-white text-[12px] font-semibold underline cursor-pointer">
                    <a
                      target="_blank"
                      href="http://terms"
                      rel="noopener noreferrer"
                    >
                      Terms & Conditions
                    </a>
                  </span>
                </span>
              </div>
            </div>
            <div className="flex relative flex-col w-full gap-y-2.5 md:items-center xl:gap-y-6 mt-12">
              <Button
                loading={isLoading}
                className="w-full lg:w-[414px]"
                text={'Sign In with Google'}
                onClick={handleSignInWithGoogle}
                disabled={!isTickChecked}
                withArrow
                bigger
              />
              <Button
                loading={isLoading}
                className="w-full lg:w-[414px]"
                text={'Sign In'}
                onClick={handleSignInClick}
                disabled={!isValidEmail(emailSignIn) || !isTickChecked}
                withArrow
                bigger
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
