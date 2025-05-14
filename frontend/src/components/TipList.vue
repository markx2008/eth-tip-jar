<template>
  <div>
    <h3>Tip History</h3>
    <ul>
      <li v-for="(tip, index) in tips" :key="index">
        <p>
          {{ tip.sender.substring(0, 6) }}...{{ tip.sender.substring(38) }} sent
          {{ parseFloat(tip.amount).toFixed(4) }} ETH: {{ tip.message }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ethers } from "ethers";
import TipJarABI from "../abis/TipJar.json";
import { CONTRACT_ADDRESS } from "../config/address";

const tips = ref([]);

onMounted(async () => {
  const fetchTips = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    // 使用 ethers v6 的 BrowserProvider
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, TipJarABI.abi, signer);

    try {
      const tipArray = await contract.getTips();

      tips.value = tipArray.map((tip) => ({
        sender: tip.from,
        amount: ethers.formatEther(tip.amount),
        message: tip.message,
      }));
    } catch (error) {
      console.error("獲取打賞記錄失敗:", error);
    }
  };

  await fetchTips();
});
</script>

<style scoped>
/* 可以添加樣式 */
</style>
