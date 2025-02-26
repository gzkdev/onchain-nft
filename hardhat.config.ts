import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv";

dotenv.config();

const {
  AMOY_URL,
  METER_URL,
  SEPOLIA_URL,
  BASE_SEPOLIA_URL,
  LISK_SEPOLIA_URL,
  ETHERSCAN_API_KEY,
  ACCOUNT_PRIVATE_KEY,
  BLOCKSCOUT_API_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
    },
    amoy: {
      url: AMOY_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
    },
    lisk_sepolia: {
      url: LISK_SEPOLIA_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
    },
    meter: {
      url: METER_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
    },
    base_sepolia: {
      url: BASE_SEPOLIA_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY!,
      base_sepolia: BLOCKSCOUT_API_KEY!,
      amoy: ETHERSCAN_API_KEY!,
      meter: ETHERSCAN_API_KEY!,
      lisk_sepolia: ETHERSCAN_API_KEY!,
    },
    customChains: [
      {
        network: "base_sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://base-sepolia.blockscout.com/api",
          browserURL: "https://base-sepolia.blockscout.com",
        },
      },
    ],
  },
};

export default config;
