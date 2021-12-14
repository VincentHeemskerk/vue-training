<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent , onMounted , onUpdated, onUnmounted } from "vue";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src

let name = "Home";
onMounted(() => {
  console.log("mounted");
});
onUpdated(() => {
  console.log("updated");
});
onUnmounted(() => {
  console.log("unmounted");
});

</script>
