<template>
  <div>
    <h1>ETH Tip Jar</h1>
    <TipForm />
    <TipList />
  </div>
</template>

<script>
import TipForm from "./components/TipForm.vue";
import TipList from "./components/TipList.vue";

export default {
  components: {
    TipForm,
    TipList,
  },
};
</script>
