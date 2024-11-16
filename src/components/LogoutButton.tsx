import userIcon from '../assets/userIcon.svg';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {signOut} from '../services/auth';
import {useAuth} from '../services/authProvider';
import {NextArrow} from '../assets/svgComponents/NextArrow';

export const LogoutButton = () => {
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const {currentUser} = useAuth();

  const handleHiddenDropdown = () => {
    setDropdownVisible(visible => !visible);
  };

  const logout = async () => {
    try {
      await signOut();
      navigate('/registration');
    } catch (error) {
      console.error('Logout failed: ', error);
    }
  };

  return (
    <>
      <div className="relative">
        <button
          className={`relative flex justify-center items-center gap-2 h-[48px] px-3 py-1 bg-[#01C3FD] bg-opacity-10 backdrop-blur-md hover:bg-opacity-20 transition-colors duration-200 ease-in-out rounded-[42px] shadow-md cursor-pointer transition-all duration-200 ease-in-out hover:from-[#00A6E2] hover:to-[#0272B7]`}
          onClick={handleHiddenDropdown}
        >
          <img className="w-6 h-6" src={userIcon} alt="userIcon" />
          <span className="hidden md:block text-sm uppercase text-white">
            Account
          </span>
        </button>
        <div
          className={`absolute right-0 top-[calc(100%+15px)] z-10 w-screen max-w-[266px] bg-[#01C3FD] bg-opacity-10 backdrop-blur-md hover:bg-opacity-20 transition-colors duration-200 ease-in-out rounded-[1.25rem] text-white transition-transform duration-200 ease-in-out p-5 overflow-hidden ${
            isDropdownVisible
              ? 'scale-100 opacity-100'
              : 'scale-95 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center mb-3">
              <div className="font-bold text-[16px]">Account</div>
            </div>
            <div className="text-sm font-bold truncate">
              {currentUser?.email || 'No email available'}
            </div>
            <div className="flex justify-end relative">
              <div
                className={`flex items-center justify-between gap-[10px] text-xs font-normal uppercase leading-3 text-white hover:underline cursor-pointer transition-all duration-200 ease-in-out bg-gradient-to-tr from-[#00C3FD] to-[#0284E2] rounded-[42px] py-3 w-full px-3`}
                onClick={logout}
              >
                Log out
                <NextArrow width={24} height={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
