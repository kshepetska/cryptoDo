import {FC, PropsWithChildren} from 'react';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {Sidebar} from '../components/Sidebar';
import {useSidebar} from '../services/sidebarContext';
import {MotionGradient} from '../components/MotionGradinet';

export const LayoutDashboardView: FC<PropsWithChildren> = ({children}) => {
  const {
    collapsed,
    isOpened,
    sidebarWidth,
    toggleSidebar,
    toggleSidebarTranslate,
  } = useSidebar();

  return (
    <>
      <div className="text-white min-h-screen overflow-x-hidden flex flex-col">
        <main className="flex-1 flex">
          <div className="flex-1 flex">
            <Sidebar
              translated={isOpened}
              open={collapsed}
              toggle={toggleSidebar}
            />

            <div
              className="sidebar-breakpoint:!w-full transition-all pt-[57px] md:pt-0 flex flex-col overflow-x-hidden"
              style={{
                marginLeft: 'auto',
                width: `calc(100% - ${sidebarWidth}px)`,
              }}
            >
              <MotionGradient />
              <Header
                isOpened={isOpened}
                handleTranslateSidebar={toggleSidebarTranslate}
              />
              <div className="flex-1 relative z-[0]">{children}</div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
