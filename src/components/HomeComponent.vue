<template>
  <div class="image-container">
    <img src="../assets/jason-leung-poI7DelFiVA-unsplash.jpg" alt="" />
    <div class="overlay"></div>
    <div class="home-title">
      <h3>Welcome to Yalova</h3>
      <div class="title">
        <div></div>
        <p>Responsive restaurant template</p>
        <div></div>
      </div>
      <div class="half-circle">
        <i style="margin-top: 10px" class="fa-solid fa-star"></i>
      </div>
    </div>
  </div>
  <DiscoverComponent />
  <OpenHourComponent />
  <OurRestaurantComponent />
  <WeeklyDealsComponent />
</template>

<script setup>
import {
  DiscoverComponent,
  OpenHourComponent,
  OurRestaurantComponent,
  WeeklyDealsComponent,
} from "./homeComponent/index";
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 100vh;

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

  .home-title {
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
      font-family: "Playball", cursive;
    }

    .title {
      display: flex;
      place-items: center;
      div {
        width: 80px;
        height: 0.5px;
        background: var(--primary);
      }
    }

    p {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--white);
      max-width: 350px;
      margin: 0 auto;
    }
    .half-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-top: 130px;
      width: 100px;
      height: 50px;
      border-bottom-left-radius: 200px;
      border-bottom-right-radius: 200px;
      border: 5px solid var(--primary);
      border-top: 0 !important;
    }
  }

  @media screen and (max-width: 1030px) {
    .home-title {
      h3 {
        font-size: 22px;
      }

      p {
        font-size: 12px;
      }

      .title {
        div {
          display: none;
        }
      }
    }
  }
}
</style>
