<template>
  <div>{{ accordianObject[0].content }}</div>
</template>
<script setup lang="ts">
defineProps<{ accordianObject: { id: number; content: string }[] }>();
</script>
<style lang=""></style>
