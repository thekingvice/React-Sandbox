<template>
  <!-- <div>{{ accordianObjectList[0].content }}</div> -->
  <ul >
    <li v-for="object in accordianObjectList" v-on:click="" >
      {{ object.id }} <li :style="{ display: object.isOpen ? 'flex' : 'none'}">{{ object.content }}</li>
    </li>
   
  </ul>
</template>
<script setup lang="ts">

const props = defineProps({accordianObjectList:Object})
 


</script>
<style scoped lang="css">
li{
  flex-direction: column;
}
</style>
