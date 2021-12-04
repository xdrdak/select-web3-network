export type AltChains =
  | "polygon"
  | "optimism"
  | "avalanche"
  | "binance-smart-chain"
  | "fantom"
  | "celo"
  | "harmony"
  | "arbitrum";

export type Eip3085Param = {
  chainId: number;
  chainName: string;
  rpcUrls: string[];
  blockExplorerUrls: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
};

const eip3085Config: Record<AltChains, Eip3085Param> = {
  polygon: {
    chainId: 137,
    chainName: "Polygon",
    rpcUrls: ["https://polygon-rpc.com/"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://polygonscan.com"],
  },
  optimism: {
    chainId: 10,
    chainName: "Optimism",
    rpcUrls: ["https://mainnet.optimism.io"],
    blockExplorerUrls: ["https://optimistic.etherscan.io"],
    nativeCurrency: {
      name: "Optimistic Ethereum",
      symbol: "oeth",
      decimals: 18,
    },
  },
  "binance-smart-chain": {
    chainId: 56,
    chainName: "BSC",
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
  },
  fantom: {
    chainId: 250,
    chainName: "Fantom",
    rpcUrls: ["https://rpc.ftm.tools/"],
    blockExplorerUrls: ["https://ftmscan.com"],
    nativeCurrency: {
      name: "Fantom",
      symbol: "FTM",
      decimals: 18,
    },
  },
  avalanche: {
    chainId: 43114,
    chainName: "Avalanche",
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://cchain.explorer.avax.network"],
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
    },
  },
  arbitrum: {
    chainId: 42161,
    chainName: "Arbitrum",
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://arbiscan.io"],
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
  },
  celo: {
    chainId: 42220,
    chainName: "Celo",
    rpcUrls: ["https://forno.celo.org/"],
    blockExplorerUrls: ["https://explorer.celo.org/"],
    nativeCurrency: {
      name: "Celo",
      symbol: "CELO",
      decimals: 18,
    },
  },
  harmony: {
    chainId: 1666600000,
    chainName: "Harmony One",
    rpcUrls: ["https://api.harmony.one/"],
    blockExplorerUrls: ["https://explorer.harmony.one/"],
    nativeCurrency: {
      name: "Harmony One",
      symbol: "ONE",
      decimals: 18,
    },
  },
};

export { eip3085Config };
