import { eip3085Config } from "./eip3085Config";
import type { Eip3085Param, AltChains } from "./eip3085Config";

type Network = "ethereum" | AltChains;

type EthereumProvider = {
  request: (opt: any) => Promise<any>;
};

const networks = Object.keys(eip3085Config);

function chainIdToHex(chainId: number) {
  return `0x${chainId.toString(16)}`;
}

async function switchToEthereumMainnet(provider: EthereumProvider) {
  return provider.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x1" }],
  });
}

async function switchToNonEthereumNetwork(
  provider: EthereumProvider,
  eip3085Config: Eip3085Param
) {
  // Attempt to switch to the requested chain if it exists...
  try {
    return provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chainIdToHex(eip3085Config.chainId) }],
    });
  } catch (error) {
    // If something went wrong, attempt to add the network, which will
    // then force a switch afterwards.
    if (error.code === 4902) {
      return provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...eip3085Config,
            chainId: chainIdToHex(eip3085Config.chainId),
          },
        ],
      });
    }

    // If it's some other error code, bubble it back up
    throw new Error(error);
  }
}

async function switchToNetwork(config: Network | Eip3085Param) {
  const ethereumProvider = (window as any).ethereum as
    | EthereumProvider
    | undefined;

  if (!ethereumProvider) {
    throw new Error("window.ethereum was not found. Is metamask installed?");
  }

  if (config === "ethereum") {
    return switchToEthereumMainnet(ethereumProvider);
  }

  if (typeof config === "string" && eip3085Config[config]) {
    return switchToNonEthereumNetwork(ethereumProvider, eip3085Config[config]);
  } else if (typeof config === "object") {
    return switchToNonEthereumNetwork(ethereumProvider, config);
  }

  throw new Error(
    `Could not switch networks safely. Valid network choices are ${networks.join(
      ","
    )}. Alternatively, you may pass a valid EIP3085 configuration to switch networks.`
  );
}

export { switchToNetwork };
