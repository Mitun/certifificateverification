"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import React from "react";

function Header() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <div className="flex justify-center py-2 header-background space-x-12  ">
            <p className="text-2xl text-black font-bold">
              Certificate Verification System
            </p>
            <ConnectButton></ConnectButton>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default Header;

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
