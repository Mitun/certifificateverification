import React from "react";
import Image from "next/image";
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useEnsName,
} from "wagmi";

export function Profile({ connectionStatus, setConnectionStatus }) {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { address, connector, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  const handleConnect = async (connector) => {
    // Pass the connector as an argument
    try {
      await connect({ connector });
      console.log("Address:", address);
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 h-18 min-w-full py-3 mt-0 flex justify-between items-center shadow-lg">
      <p className="ml-6 text-lg font-bold">CERTIFICATE VERIFICATION</p>
      <Image
        className=" md:mr-36 h-auto w-auto"
        src="/tick4.png"
        alt="Image Description"
        width={60}
        height={40}
      />
      <span>
        {isConnected && (
          <div className="mr-9 ">
            <p>Connected to: {address.slice(0, 7)}...</p>
            <p>
              Balance: {parseFloat(balance.formatted).toFixed(5)}{" "}
              {balance.symbol}
            </p>
          </div>
        )}
        {!isConnected ? (
          connectors.map((connector) => (
            <button
              className="mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2"
              key={connector.id}
              onClick={() => handleConnect(connector)}
            >
              LogIn
            </button>
          ))
        ) : (
          <button
            className="mr-6 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full ml-2"
            onClick={handleDisconnect}
          >
            LogOut
          </button>
        )}
      </span>
    </span>
  );
}