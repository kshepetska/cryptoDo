import logoutIcon from '../assets/logoutIcon.svg';
import userIcon from '../assets/userIcon.svg';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {signOut} from '../services/auth';
import {useAuth} from '../services/authProvider';

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
      <button
        className={`relative flex justify-center items-center gap-3 h-[48px] w-fit px-4 rounded-[42px] text-white text-[16px] uppercase font-inter font-bold transition-all duration-200 ease-in-out bg-gradient-to-tr from-[#00C3FD] to-[#0284E2] hover:from-[#00A6E2] hover:to-[#0272B7]`}
        onClick={handleHiddenDropdown}
      >
        <img className="w-6 h-6" src={userIcon} alt="userIcon" />
        <span className="text-sm font-[300]">Account</span>
        <div
          className={`absolute cursor-default !w-[266px] right-0 top-[calc(100%+1rem)] z-10 shadow-lg shadow-[#286497] rounded-20 transition-all p-5 overflow-hidden bg-[#0B0B0D] ${
            !isDropdownVisible
              ? 'scale-95 opacity-0 pointer-events-none'
              : 'scale-100 opacity-100'
          }`}
        >
          <ul className="[&>li]:cursor-pointer text-start [&>li]:h-10">
            <li className="text-sm font-inter mb-3">
              <div className="font-bold text-l-800 mb-[2px] truncate">
                {currentUser?.email || 'No email available'}
              </div>
            </li>

            <li
              onClick={logout}
              className="flex justify-start items-center gap-3 transition-all min-w-[9rem]"
            >
              <img className="w-6 h-6" src={logoutIcon} alt="logoutIcon" />
              <span className="text-sm font-bold uppercase">Log out</span>
            </li>
          </ul>
        </div>
      </button>
    </>
  );
};
