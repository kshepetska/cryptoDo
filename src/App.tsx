import React, {useEffect, Suspense, lazy} from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {SkeletonTheme} from 'react-loading-skeleton';
import {EthereumClient} from '@web3modal/ethereum';
import {Web3Modal} from '@web3modal/react';
import {WagmiConfig} from 'wagmi';
import {Circles} from 'react-loader-spinner';

import {chains, projectId, wagmiConfig} from './configs/wagmi.config';
import {LayoutLoginView} from './layouts';
import {SkeletonColorClasses} from './layouts/constants';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const DashboardView = lazy(() => import('./modules/Dashboard/DashboardView'));
const FaqAndSupport = lazy(
  () => import('./modules/FaqAndSupport/FaqAndSupport')
);
const ChartsData = lazy(() => import('./modules/Charts'));
const RegistrationView = lazy(() => import('./modules/Login/RegistrationView'));
const NftsPage = lazy(() => import('./modules/NFTs'));
const NewsPage = lazy(() => import('./modules/News'));

const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const App = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.classList.add('rootFade');
      setTimeout(() => {
        rootElement?.classList.remove('rootFade');
      }, 600);
    }
  }, [pathname]);

  return (
    <>
      <SkeletonTheme
        baseColor={SkeletonColorClasses.baseColor}
        highlightColor={SkeletonColorClasses.highlightColor}
        enableAnimation
      >
        <WagmiConfig config={wagmiConfig}>
          <div>
            <Suspense
              fallback={
                <div className="flex absolute top-1/2 left-1/2 justify-center items-center">
                  <Circles color="#01C3FD" />
                </div>
              }
            >
              <Routes>
                <Route
                  path="/registration"
                  element={
                    <LayoutLoginView>
                      <RegistrationView />
                    </LayoutLoginView>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <DashboardView />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/charts"
                  element={
                    <PrivateRoute>
                      <ChartsData />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/nfts"
                  element={
                    <PrivateRoute>
                      <NftsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/faq-and-support"
                  element={
                    <PrivateRoute>
                      <FaqAndSupport />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/news"
                  element={
                    <PrivateRoute>
                      <NewsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="*"
                  element={<Navigate to={'/dashboard'} replace />}
                />
              </Routes>
            </Suspense>
          </div>
        </WagmiConfig>
      </SkeletonTheme>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        closeButton={false}
        limit={3}
      />
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};
