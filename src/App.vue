<script setup>
import { RouterView } from "vue-router";
import { NavbarComponent } from "./components/navbar";
</script>

<template>
  <main class="wow">
    <NavbarComponent />
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.wow {
  overflow-x: hidden;
}
</style>
