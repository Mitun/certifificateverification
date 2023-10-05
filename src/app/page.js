"use client";
import React, { useState, useEffect } from "react";
import {
  WagmiConfig,
  createConfig,
  configureChains,
  mainnet,
  useConnect,
} from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { polygonMumbai } from "wagmi/chains";
import { Profile } from "./Profile";
import Outstanding from "./Outstanding";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygonMumbai],
  [
    alchemyProvider({ apiKey: "n-kcfiUHFd6-8lvv_P6AK4eG5C8OE0sB" }),
    publicProvider(),
  ]
);

// Set up wagmi config
const config = createConfig({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

const Home = () => {
  const [connectionStatus, setConnectionStatus] = useState(false);
  return (
    <WagmiConfig config={config}>
      <Profile
        connectionStatus={connectionStatus}
        setConnectionStatus={setConnectionStatus}
      />
      <Outstanding />
    </WagmiConfig>
  );
};

export default Home;
