<template>
  <nav>
    <div class="logo">
      <img src="../../assets/yalovaLogo.png" alt="" />
    </div>

    <div class="mains">
      <div class="networks">
        <a href="#facebook">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#twitter">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="#instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#telegram">
          <i class="fa-brands fa-telegram"></i>
        </a>
      </div>
      <ul>
        <li>Home</li>
        <li>Gallery</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  // align-items: center;
  justify-content: space-around;
  width: 100%;
  top: 0;
  background: none;
  z-index: 20;

  .logo {
    img {
      width: 100%;
      height: 180px;
    }
  }

  .mains {
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: end;

    ul {
      display: flex;
      align-items: center;
      gap: 50px;
      list-style: none;

      li {
        color: #fff;
        cursor: pointer;
      }
    }

    .networks {
      display: flex;
      gap: 15px;
      justify-content: end;

      a {
        color: #fff;
      }
    }
  }
}
</style>
