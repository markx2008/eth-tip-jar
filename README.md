# ETH 小費罐 (ETH Tip Jar) - Solidity 學習專案

![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=flat&logo=solidity&logoColor=white)
![Hardhat](https://img.shields.io/badge/Hardhat-yellow.svg?style=flat)
![Vue.js](https://img.shields.io/badge/Vue.js-%234FC08D.svg?style=flat&logo=vue.js&logoColor=white)
![Ethers.js](https://img.shields.io/badge/Ethers.js-blue.svg?style=flat)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)

## 🚀 專案背景

這是一個在學習 Solidity 和智能合約開發過程中建立的專案。目的是透過實作一個小費罐 DApp 來練習相關技術，並探索區塊鏈應用程式的開發流程。

此專案主要運用了以下技術：

*   **智能合約 (Solidity)**：設計與編寫合約邏輯。
*   **開發框架 (Hardhat)**：用於合約的編譯、測試與部署。
*   **前端技術 (Vue.js & Ethers.js)**：建構使用者介面並與區塊鏈互動。
*   **版本控制 (Git & GitHub)**：管理專案程式碼。

## ✨ 專案重點

*   **學習與實踐**：本專案著重於 Solidity 和 DApp 開發的學習過程。
*   **核心功能**：實現了一個去中心化的小費功能，使用者可以透過 MetaMask 發送 ETH 並留言。
*   **技術堆疊**：整合了智能合約、前端框架及區塊鏈互動函式庫。

## 🎯 專案簡介

這是一個基於以太坊的去中心化小費系統 DApp。使用者可以透過 MetaMask 錢包連接，向部署在區塊鏈上的智能合約發送 ETH 作為小費，並可以附上一段感謝或祝福的留言。合約的擁有者則可以將累積的小費提領出來。

## 🧱 架構與功能

### 1. Solidity 智能合約 (`smart-contracts/contracts/TipJar.sol`)

核心的智能合約，負責處理小費的接收、儲存與提領。

#### ✅ 主要功能

*   `receive()`: 允許合約接收 ETH，自動記錄打賞資訊。
*   `getBalance()`: 查詢合約當前累積的 ETH 餘額。
*   `withdraw()`: 僅限合約擁有者 (owner) 可以提領合約中的所有 ETH。
*   `sendTip(string memory message)`: 允許使用者發送 ETH 小費並附帶一則文字訊息。
*   `getTips()`: 讀取所有歷史打賞記錄，包含打賞者地址、金額和訊息。

#### ✅ 技術特點

*   使用 `msg.value` 安全地接收使用者發送的 ETH。
*   使用 `msg.sender` 識別打賞者的錢包地址。
*   繼承 OpenZeppelin 的 `Ownable` 合約，實現了安全的擁有者權限管理。
*   定義了事件 (Event) 來記錄交易資訊，便於前端追蹤。

### 2. 前端應用 (`frontend/`)

使用 Vue 3、Vite 和 Ethers.js 搭建的互動式前端介面。

#### ✅ 頁面功能

*   🦊 **連接 MetaMask 錢包**：引導使用者連接其 MetaMask 錢包以進行互動。
*   💸 **發送小費**：使用者可以輸入想要打賞的 ETH 金額及留言內容。
*   📜 **歷史打賞記錄**：清楚展示所有歷史打賞記錄，包含打賞者地址、金額及留言。
*   💰 **合約餘額顯示**：即時顯示當前智能合約中的 ETH 總餘額。
*   👑 **擁有者提領功能**：若當前連接的錢包是合約的擁有者，則會顯示「提領」按鈕，允許其提領所有小費。

## 🛠️ 技術堆疊

| 類別         | 工具                                     | 備註                                   |
| ------------ | ---------------------------------------- | -------------------------------------- |
| 智能合約     | Solidity, Hardhat                        | 核心邏輯與開發框架                     |
| 合約標準庫   | OpenZeppelin                             | 提供安全的合約模組 (如 Ownable)        |
| 測試         | Hardhat (內建 Waffle/Ethers.js), Chai    | 單元測試與整合測試                     |
| 部署         | Hardhat Scripts, Goerli/Sepolia 測試鏈   | 將合約部署至公開測試網路               |
| 前端框架     | Vue 3, Vite                              | 現代化的前端開發體驗                   |
| 合約互動     | Ethers.js                                | 與以太坊智能合約互動的 JavaScript 函式庫 |
| 錢包連接     | MetaMask                                 | 主流的瀏覽器錢包                       |
| 前端部署     | GitHub Pages / Vercel / Netlify (可選)   | 方便快速地將前端應用部署上線           |
| 語言         | TypeScript                               | 為 JavaScript 添加靜態型別，提升程式碼品質 |

## 📁 專案結構

```
eth-tip-jar/
├── smart-contracts/              # Hardhat 智能合約專案
│   ├── contracts/
│   │   └── TipJar.sol            # 主要的智能合約檔案
│   ├── ignition/modules/         # Hardhat Ignition 部署模組 (範例)
│   ├── scripts/
│   │   └── deploy.ts             # 部署腳本
│   ├── test/                     # 測試腳本 (建議在此處添加 TipJar.test.ts)
│   └── hardhat.config.ts         # Hardhat 設定檔
├── frontend/                     # Vue.js 前端專案
│   ├── public/
│   ├── src/
│   │   ├── abis/                 # 存放智能合約 ABI
│   │   │   └── TipJar.json
│   │   ├── assets/
│   │   ├── components/           # Vue 元件
│   │   │   ├── TipForm.vue
│   │   │   └── TipList.vue
│   │   │   └── TipPage.vue       # 主要頁面元件
│   │   ├── config/               # 前端設定檔 (如合約地址)
│   │   │   └── address.ts
│   │   ├── App.vue               # Vue 根元件
│   │   └── main.ts               # Vue 應用程式進入點
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── .gitignore
├── package.json                  # 專案根目錄的 package.json (可管理前後端)
├── README.md
└── tsconfig.json                 # 專案根目錄的 TypeScript 設定
```

## 🚀 本地開發與運行指南

### Step 1: 環境準備

*   安裝 [Node.js](https://nodejs.org/) (建議 LTS 版本)
*   安裝 [MetaMask](https://metamask.io/) 瀏覽器擴充功能

### Step 2: 複製專案並安裝依賴

```bash
git clone https://github.com/YOUR_USERNAME/eth-tip-jar.git # 請替換成您的 GitHub 用戶名
cd eth-tip-jar

# 安裝智能合約依賴
cd smart-contracts
npm install
cd ..

# 安裝前端依賴
cd frontend
npm install
cd ..
```

### Step 3: 編譯智能合約

```bash
cd smart-contracts
npx hardhat compile
```
編譯成功後，ABI 檔案會自動複製到 `frontend/src/abis/TipJar.json`。

### Step 4: (可選) 運行智能合約測試

```bash
cd smart-contracts
npx hardhat test
```

### Step 5: 部署智能合約至測試網路 (例如 Sepolia)

1.  **設定您的 `.env` 檔案**：
    在 `smart-contracts` 資料夾下，複製 `.env.example` 並命名為 `.env`。
    ```
    cp .env.example .env
    ```
    編輯 `.env` 檔案，填入您的 Sepolia RPC URL 和私鑰。
    ```env
    SEPOLIA_RPC_URL="YOUR_SEPOLIA_RPC_URL" # 例如 Alchemy 或 Infura 的 URL
    PRIVATE_KEY="YOUR_PRIVATE_KEY"       # 您的測試錢包私鑰，請勿使用主網私鑰
    ETHERSCAN_API_KEY="YOUR_ETHERSCAN_API_KEY" # (可選) Etherscan API 金鑰，用於驗證合約
    ```
    **注意：** 切勿將含有私鑰的 `.env` 檔案提交到 GitHub。`.gitignore` 檔案已設定忽略此檔案。

2.  **執行部署腳本**：
    ```bash
    cd smart-contracts
    npx hardhat run scripts/deploy.ts --network sepolia
    ```
    部署成功後，終端機會顯示合約地址。

3.  **更新前端合約地址**：
    將部署成功的合約地址更新到 `frontend/src/config/address.ts` 檔案中。

### Step 6: 啟動前端開發伺服器

```bash
cd frontend
npm run dev
```
接著在瀏覽器中開啟顯示的本地網址 (通常是 `http://localhost:5173`)。

## ✨ 未來展望與學習方向

*   **更完善的測試**：增加前端元件的單元測試與端對端測試。
*   **UI/UX 優化**：持續改進使用者介面與互動體驗。
*   **安全性強化**：深入研究智能合約的安全性最佳實踐，例如防止重入攻擊等。
*   **Gas 優化**：學習如何撰寫更節省 Gas 的智能合約。
*   **整合更多功能**：例如，允許使用者設定不同的打賞金額選項，或提供更豐富的留言互動。
*   **部署至主網**：在充分測試與審計後，考慮將專案部署至以太坊主網。

## 📄 授權

此專案採用 MIT 授權條款。歡迎自由使用、修改與分發。

---

如果您對此專案有任何建議或疑問，歡迎隨時提出。
