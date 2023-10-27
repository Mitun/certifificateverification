"use client";
import React, { useState, useEffect } from "react";
import {
  WagmiConfig,
  createConfig,
  configureChains,
  mainnet,
  useConnect,
  useBalance,
  useAccount,
} from "wagmi";
import Link from "next/link";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { polygonMumbai } from "wagmi/chains";
import About from "./Components/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import PDFiewer from "./Components/PDFViewer/PDFiewer";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygonMumbai],
  [
    alchemyProvider({ apiKey: "n-kcfiUHFd6-8lvv_P6AK4eG5C8OE0sB" }),
    publicProvider(),
  ]
);

// Set up wagmi config for now
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
  return (
    <WagmiConfig config={config}>
      <About></About>

      <Skills />
      <Projects />
      {/* <PDFiewer /> */}
      <Contact />
      <p className="pb-2 text-white flex items-center justify-center">
        © 2023, Mitun Shil
      </p>
    </WagmiConfig>
  );
};

export default Home;
