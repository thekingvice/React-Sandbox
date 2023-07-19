<script setup lang="ts"></script>

<template>
  <div>
    NAVIGATION |
    <router-link to="/">Home</router-link> |
    <router-link to="/About">About</router-link> |
    <router-link to="/CarsList">Cars List</router-link>
  </div>

  <router-view></router-view>
</template>

<style scoped></style>
