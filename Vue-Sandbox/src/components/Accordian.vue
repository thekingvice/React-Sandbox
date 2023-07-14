<template>
  <!-- <div>{{ accordianObjectList[0].content }}</div> -->
  <ul >
    <li v-for="object in accordianObjectList" v-on:click="">
      {{ object.id }} <li>{{ object.content }}</li>
    </li>
   
  </ul>
</template>
<script setup lang="ts">
defineProps<{ accordianObjectList: { id: number; content: string }[] }>();
</script>
<style lang=""></style>
