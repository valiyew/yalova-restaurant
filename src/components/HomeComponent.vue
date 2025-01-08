<template>
  <div class="image-container">
    <img src="../assets/jason-leung-poI7DelFiVA-unsplash.jpg" alt="" />
    <div class="overlay"></div>
    <div class="home-title">
      <h3>Welcome to Lambert</h3>
      <p>Responsive restaurant template</p>
      <div class="half-circle">
        <i style="margin-top: 10px" class="fa-solid fa-star"></i>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    z-index: 1;
    opacity: 0.6;
    margin: 20px;
  }

  .home-title {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 2;
    text-align: center;

    h3 {
      width: 100%;
      font-size: 3.5em;
      margin-bottom: 10px;
      color: #fff;
      font-weight: bold;
      letter-spacing: 3px;
      font-family: "Playball", cursive;
    }
    p {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #fff;
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
      border: 5px solid #c59d5f;
      border-top: 0 !important;
    }
  }
}
</style>
