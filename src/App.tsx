import React, {useEffect} from 'react';
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

import {chains, projectId, wagmiConfig} from './configs/wagmi.config';

import {LayoutLoginView} from './layouts';
import {SkeletonColorClasses} from './layouts/constants';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute';

import {DashboardView} from './modules/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {FaqAndSupport} from './modules/FaqAndSupport/FaqAndSupport';
import {ChartsData} from './modules/Charts';
import {RegistrationView} from './modules/Login';
import {NftsPage} from './modules/NFTs';
import {NewsPage} from './modules/News';

const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const App = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

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
