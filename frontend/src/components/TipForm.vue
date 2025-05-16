<template>
  <div>
    <input v-model="amount" type="number" step="0.0001" placeholder="Enter amount (ETH)" />
    <input v-model="message" type="text" placeholder="Enter your message" />
    <button @click="sendTip">Send Tip</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ethers } from "ethers";
import TipJarJson from "../abis/TipJar.json";
import { CONTRACT_ADDRESS } from "../config/address";

const amount = ref("");
const message = ref("");

const sendTip = async () => {
  try {
    if (!window.ethereum) {
      alert("請安裝 MetaMask!");
      return;
    }

    // 使用 ethers v6 的新語法
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TipJarABI.abi, signer);

    // 確保 amount 是字符串
    const amountInEther = amount.value.toString();
    
    // 確保有輸入金額
    if (!amountInEther) {
      alert("請輸入金額！");
      return;
    }

    // 發送交易
    const tx = await contract.sendTip(message.value, {
      value: ethers.parseEther(amountInEther),
    });

    console.log("交易已發送:", tx);
    await tx.wait();
    
    // 清空輸入框
    amount.value = "";
    message.value = "";
    
    alert("打賞成功！");
  } catch (error) {
    console.error("打賞失敗:", error);
    alert("打賞失敗: " + error.message);
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 20px auto;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
