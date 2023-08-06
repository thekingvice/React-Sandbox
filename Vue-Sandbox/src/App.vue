<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Accordian from "./components/Accordian.vue";
import Cart from "./components/Cart.vue";
import { ref } from "vue";

const accordianObjectList = ref([
  { id: 0, content: "1st", isOpen: false },
  { id: 1, content: "2nd", isOpen: false },
  { id: 2, content: "3rd", isOpen: false },
]);

const src = ref("/vue.svg");

function change() {
  src.value = "/vite.svg";
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" />
  <Accordian :accordianObjectList="accordianObjectList" />
  <Cart /> -->
  <img :src="src" class="logo vue" alt="Vue logo" v-on:click="change" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
