<template>
  <div class="CarsList">
    <ul v-for="car in carData" :key="car.id">
      <li>
        <router-link :to="`/Car/${car.id}`">
          {{ car.brand }} {{ car.model }} {{ car.year }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import carData from "../carData.json";
</script>
<style lang=""></style>
