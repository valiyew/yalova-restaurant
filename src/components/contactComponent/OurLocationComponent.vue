<template>
  <div class="our-location">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3704080930954!2d69.240562!3d41.311081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4c1e6ac153b%3A0x8e9c87cf7c4a94d5!2sTashkent!"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.our-location {
  position: relative;
  width: 100%;
  height: 60vh;

  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: none;
  }
}
</style>
