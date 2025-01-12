{/*
<template>
  <section class="opening-hour">
    <div class="overlay"></div>
    <div class="opening-title">
      <h1>Opening Hours</h1>
      <h3>Call For Reservations</h3>
      <div class="bold-separator">
        <div class="line"></div>
        <div class="dot"></div>
        <div class="line"></div>
      </div>
      <div class="opening-dayTime">
        <div class="leftBox">
          <h4>Sunday to Tuesday</h4>
          <p>09:00</p>
          <p>22:00</p>
        </div>
        <div class="rightBox">
          <h4>Friday to Saturday</h4>
          <p>11:00</p>
          <p>19:00</p>
        </div>
      </div>
      <a href="tel:+998999999999">+998(99)999-99-99</a>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.opening-hour {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 3;
  background-image: url("../../assets/jason-leung-poI7DelFiVA-unsplash.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  place-items: center;
  text-align: center;

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

  .opening-title {
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    color: var(--white);
    z-index: 2;

    h1 {
      color: var(--white);
      text-transform: uppercase;
      font-weight: bold;
      font-size: 48px;
      letter-spacing: 6px;
      padding-bottom: 20px;
      font-family: "Source Sans Pro", sans-serif;
    }

    h3 {
      color: var(--primary);
      font-size: 28px;
      font-family: "Playball", cursive;
    }

    .bold-separator {
      text-align: center;
      display: flex;
      align-items: baseline;
      gap: 100px;
      margin: 50px 0px;

      .line {
        width: 130px;
        height: 1px;
        background: var(--primary);
      }

      .dot {
        width: 8px;
        height: 8px;
        background: var(--white);
        border-radius: 50%;
      }
    }

    .opening-dayTime {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .leftBox,
      .rightBox {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        h4 {
          color: var(--primary);
          font-size: 24px;
          font-family: "Playball", cursive;
        }

        p {
          text-transform: uppercase;
          font-weight: bold;
          font-size: 32px;
          letter-spacing: 2px;
          padding-bottom: 10px;
          font-family: "Source Sans Pro", sans-serif;
        }
      }
    }
    a {
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 1px;
      padding: 10px 0;
      font-family: "Playball", cursive;
      color: var(--primary);
    }
  }

  @media screen and (max-width: 992px) {
    .opening-title {
      .opening-dayTime {
        display: flex;
        flex-direction: column;
        gap: 25px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .opening-title {
      h1 {
        font-size: 28px;
      }

      a {
        font-size: 22px;
      }
    }
  }
}
</style>
*/}
