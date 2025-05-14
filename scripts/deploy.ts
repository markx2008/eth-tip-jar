import { ethers } from "hardhat";

async function main() {
  // 1. 獲取合約工廠
  const TipJar = await ethers.getContractFactory("TipJar");

  // 2. 部署合約
  console.log("正在部署 TipJar...");
  const tipJar = await TipJar.deploy();
  
  // 3. 等待交易確認
  await tipJar.waitForDeployment();

  // 4. 顯示合約地址
  console.log("TipJar 部署成功，地址:", await tipJar.getAddress());
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });