<template>
  <!-- <div>{{ accordianObjectList[0].content }}</div> -->
  <ul >
    <li v-for="object in accordianObjectList" v-on:click="test(object)" >
      {{ object.id }} <li :style="{ display: object.isOpen ? 'flex' : 'none'}">{{ object.content }}</li>
    </li>
   
  </ul>
</template>
<script setup lang="ts">
// import { ref } from 'vue';
function test(object: { isOpen: boolean;  }) {
  if (!object.isOpen) {
    object.isOpen = true;
  }
  else {
    object.isOpen = false;
  }
 
}

defineProps<{ accordianObjectList: { id: number; content: string, isOpen :boolean}[] }>();





</script>
<style scoped lang="css">
li{
  flex-direction: column;
}
</style>
