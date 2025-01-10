<script setup>
import { RouterView } from "vue-router";
import { NavbarComponent } from "./components/navbar";
import { FooterComponent } from "./components/footer";
</script>

<template>
  <main class="wow">
    <NavbarComponent />
    <RouterView />
    <FooterComponent />
  </main>
</template>

<style lang="scss" scoped>
.wow {
  overflow-x: hidden;
  background: var(--white);
}
</style>
