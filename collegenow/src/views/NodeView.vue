<template>
  <div></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const shops = ref("");
async function getShops() {
  let res = await fetch("http://localhost:3000"); //put your own api here, put it based off uploaded photos

  let data = await res.json();
  shops.value = data;
  console.log(data);
}

onMounted(() => {
  getShops();
});
</script>

<style></style>
