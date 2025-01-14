<template>
  <div class="image-container">
    <img src="../assets/jason-leung-poI7DelFiVA-unsplash.jpg" alt="" />
    <div class="overlay"></div>
    <div class="menu-title">
      <h3>Hot dishes</h3>
      <div class="title">
        <p>Pellentesque habitant morbi</p>
      </div>
    </div>
  </div>

  <HotDishesComponent />
  <DessertComponent />
  <DrinkComponent />
</template>

<script setup>
import {
  HotDishesComponent,
  DessertComponent,
  DrinkComponent,
} from "./menuComponent/index";
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 75vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 0;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--black);
    z-index: 1;
    opacity: 0.6;
  }

  .menu-title {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
    z-index: 2;
    text-align: center;

    h3 {
      width: 100%;
      font-size: 3.5em;
      margin-bottom: 10px;
      color: var(--white);
      font-weight: bold;
      letter-spacing: 3px;
      font-family: "Source Sans Pro", sans-serif;
    }

    p {
      font-size: 34px;
      font-family: "Playball", cursive;
      color: var(--primary);
    }
  }

  @media screen and (max-width: 576px) {
    .menu-title {
      h3 {
        font-size: 32px;
      }

      p {
        font-size: 22px;
      }
    }
  }
}
</style>
