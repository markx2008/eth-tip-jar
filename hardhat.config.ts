import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();  // 載入 .env 檔案

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  paths: {
    sources: "./smart-contracts/contracts",
    tests: "./smart-contracts/test",
    cache: "./smart-contracts/cache",
    artifacts: "./smart-contracts/artifacts"
  },
};

export default config;
