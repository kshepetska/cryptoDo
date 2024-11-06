import {configureChains, createConfig, mainnet} from 'wagmi';
import {MetaMaskConnector} from 'wagmi/connectors/metaMask';
import {WalletConnectConnector} from 'wagmi/connectors/walletConnect';
import {w3mConnectors, w3mProvider } from '@web3modal/ethereum'


export const projectId = process.env.REACT_APP_PROJECT_ID as string;

export const {chains, publicClient, webSocketPublicClient} = configureChains(
  [mainnet],
  [w3mProvider({ projectId })]
);

const host = window.location.host;

export const connectors = [
  new WalletConnectConnector({
    chains,
    options: {
      projectId: projectId,
      metadata: {
        name: 'launchpad',
        description: 'launchpad app',
        url: host,
        icons: ['https://wagmi.sh/icon.png'],
      },
    },
  }),
  new MetaMaskConnector({
    chains,
  }),
];

export const wagmiConfig = createConfig({
  connectors: w3mConnectors({ projectId, chains }),
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

