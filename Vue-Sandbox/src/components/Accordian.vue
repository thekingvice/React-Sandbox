<template>
  <!-- <div>{{ accordianObjectList[0].content }}</div> -->
  <ul >
    <li  v-for="object in props.accordianObjectList" @click="handleAccordianTab(object.id)" >
      {{ object.id }} <li :style="{ display: object.isOpen ? 'flex' : 'none'}">{{ object.content }}</li>
    </li>
   
  </ul>
</template>
<script setup lang="ts">

const props:any= defineProps({accordianObjectList:Array})
 
function handleAccordianTab(tabIndex:number) {
  
   if (!props.accordianObjectList[tabIndex].isOpen) {
    props.accordianObjectList[tabIndex].isOpen = true;
    
   }
}


</script>
<style scoped lang="css">
li{
  flex-direction: column;
}
</style>
