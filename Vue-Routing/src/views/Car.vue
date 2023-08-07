<template>
  <div>Make and Model: {{ car?.brand }} {{ car?.model }}</div>
  <div>Year: {{ car?.year }}</div>
  <div>I.D. {{ id }}</div>
</template>
<script setup lang="ts">
import carData from "../carData.json";
import { useRoute } from "vue-router";

const route = useRoute(); // Access the current route

const id = route.params.id; // Get the id parameter from the current route

const car = carData.find((car) => car.id === id);
</script>
<style lang=""></style>
