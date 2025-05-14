# ETH 小費盒 (ETH Tip Jar)

![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=flat&logo=solidity&logoColor=white)
![Hardhat](https://img.shields.io/badge/Hardhat-yellow.svg?style=flat)
![Vue.js](https://img.shields.io/badge/Vue.js-%234FC08D.svg?style=flat&logo=vue.js&logoColor=white)
![Ethers.js](https://img.shields.io/badge/Ethers.js-blue.svg?style=flat)

一個基於以太坊的去中心化小費系統，允許用戶通過 MetaMask 發送 ETH 打賞並附帶留言。

## 🎯 專案簡介
這是一個簡單的 DApp，讓使用者可以透過 MetaMask 向你的智能合約送出 ETH（打賞），你可以作為合約擁有者提領收到的 ETH。

## 🧱 架構與功能拆解

### 1. Solidity 智能合約
檔案：TipJar.sol

#### ✅ 功能
- `receive()`: 接收 ETH
- `getBalance()`: 查詢合約目前 ETH 餘額
- `withdraw()`: 只有 owner 可以提領所有 ETH
- `sendTip(string memory message)`: 使用者打賞時附帶留言

#### ✅ 特點
- 使用 msg.value 接收轉帳
- 使用 msg.sender 判斷打賞者
- 使用 Ownable 權限控管（繼承 OpenZeppelin）

### 2. 前端（Vue 3 + Vite + Ethers.js）
#### ✅ 頁面功能
- 🦊 連接 MetaMask 錢包
- 💸 使用者輸入金額 + 留言打賞
- 📜 顯示歷史打賞記錄（含 address + message）
- 💰 顯示當前合約餘額（可即時更新）
- 👑 如果是合約 owner，顯示「提領」按鈕

### 3. 技術堆疊
| 類別 | 工具 |
|------|------|
| 智能合約 | Solidity, Hardhat, OpenZeppelin |
| 測試 | Hardhat + Chai |
| 部署 | Hardhat + Goerli/Sepolia 測試鏈 |
| 前端框架 | Vue 3 + Vite |
| 合約互動 | Ethers.js |
| 錢包連接 | MetaMask |
| 部署前端 | GitHub Pages / Vercel / Netlify |

## 📁 專案結構
```
eth-tip-jar/
├── contracts/
│   └── TipJar.sol
├── scripts/
│   └── deploy.ts
├── frontend/
│   ├── src/
│   │   ├── App.vue
│   │   ├── components/
│   │   │   ├── TipForm.vue
│   │   │   └── TipList.vue
│   ├── public/
│   ├── vite.config.js
│   └── ...
├── test/
│   └── TipJar.test.js
└── hardhat.config.js
```

## 🚀 開發步驟

### Step 1：建立 Hardhat 專案 + 寫 TipJar.sol
```bash
npm install
npx hardhat compile
```

### Step 2：執行測試
```bash
npx hardhat test
```

### Step 3：部署到測試鏈
```bash
npx hardhat run scripts/deploy.ts --network <network-name>
```

### Step 4：前端開發
```bash
cd frontend
npm install
npm run dev
```

## 📄 授權
此專案使用 MIT 授權條款。
