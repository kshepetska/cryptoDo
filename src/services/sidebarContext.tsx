import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {SidebarClasses} from '../layouts/constants';

interface SidebarContextProps {
  collapsed: boolean;
  isOpened: boolean;
  sidebarWidth: number;
  toggleSidebar: () => void;
  toggleSidebarTranslate: () => void;
}

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({children}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(SidebarClasses.defaultSize);

  const toggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  const toggleSidebarTranslate = () => {
    setIsOpened(prev => !prev);
  };

  useEffect(() => {
    const newWidth = collapsed
      ? SidebarClasses.defaultSize
      : SidebarClasses.smallerSize;
    setSidebarWidth(newWidth);
  }, [collapsed]);

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        isOpened,
        sidebarWidth,
        toggleSidebar,
        toggleSidebarTranslate,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
