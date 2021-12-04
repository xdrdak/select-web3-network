# select-web3-network

0 dependency framework agnostic way to switch between web3 networks.

## Useage - With pre-registered networks

Simply import and call `switchToNetwork`.

```js
import { switchToNetwork } from "select-web3-network";

switchToNetwork("polygon");
```

Supported network switching strings

- ethereum
- polygon
- optimism
- avalanche
- binance-smart-chain
- fantom
- celo
- harmony
- arbitrum

## Useage - With custom EIP3085 config

If you wish to use a network not currently allowlisted within this library,
you may pass in a valid EIP3085 configuration instead.

```js
import { switchToNetwork } from "select-web3-network";

const config = {
  chainId: 137,
  chainName: "Polygon",
  rpcUrls: ["https://polygon-rpc.com/"],
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  blockExplorerUrls: ["https://polygonscan.com"],
};

switchToNetwork(config);
```

## Want to allowlist a network?

Easy, submit a PR.

In general, I will only do allow list if the network is "sufficiently" popular, so no testnets please.

Simply check out `https://chainid.network/chains.json` and fill out the relevant EIP3085 config in `eip3085Config.ts`.
