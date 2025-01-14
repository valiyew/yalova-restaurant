<template>
  <div class="dessert">
    <div class="overlay"></div>
    <div class="dessert-title">
      <h1 data-aos="zoom-in-up">Dessert</h1>
      <p data-aos="zoom-in-up">Aenean ultricies mi vitae est</p>
    </div>
  </div>

  <div class="dessert-container">
    <div class="menu-item-box">
      <div
        data-aos="zoom-in-up"
        class="menu-item"
        v-for="(item, idx) in menuItems"
        :key="idx"
      >
        <div class="menu-item-title">
          <h4>{{ item.name }}</h4>
          <div></div>
          <h5>{{ item.price }}</h5>
        </div>
        <p>{{ item.description }}</p>
      </div>
    </div>

    <div class="bold-separator" data-aos="zoom-in-up">
      <div class="line"></div>
      <div class="dot"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script setup>
const menuItems = [
  {
    name: "Fish",
    description: "Labore et dolore",
    price: "$34",
  },
  {
    name: "Fish",
    description: "Semonstraverunt",
    price: "$130",
  },
  {
    name: "Miso chicken",
    description: "Incididunt ut labore",
    price: "$30",
  },
  {
    name: "Fish pie",
    description: "Adipisicing elit",
    price: "$61",
  },
  {
    name: "Steak Filet",
    description: "Adipisicing elit",
    price: "$61",
  },
  {
    name: "Fish pie",
    description: "Adipisicing elit",
    price: "$61",
  },
];
</script>

<style lang="scss" scoped>
.dessert {
  width: 100%;
  height: 65vh;
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

  .dessert-title {
    width: 100%;
    z-index: 3;

    h1 {
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
}

.dessert-container {
  width: 100%;
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 20px;
  background: var(--white);
  position: relative;
  z-index: 1;

  .menu-item-box {
    width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
    margin: 50px;

    .menu-item {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;

      .menu-item-title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4 {
          font-size: 24px;
          font-style: italic;
          font-family: "Droid Serif", serif;
          color: var(--black);
        }

        div {
          width: 75%;
          border: 1px dotted var(--primary);
        }

        h5 {
          font-size: 20px;
          font-weight: 400;
          font-family: "Source Sans Pro", sans-serif;
          color: var(--black);
        }
      }

      p {
        font-size: 16px;
        color: var(--p-color);
        font-family: "Source Sans Pro", sans-serif;
      }
    }
  }

  .bold-separator {
    width: auto;
    display: flex;
    place-items: center;
    align-items: baseline;
    gap: 100px;
    margin-top: 50px;

    .line {
      width: 130px;
      height: 1px;
      background: var(--primary);
    }

    .dot {
      width: 8px;
      height: 8px;
      background: var(--black);
      border-radius: 50%;
    }
  }
}

@media screen and (max-width: 1450px) {
  .dessert-container {
    padding: 100px 30px;
  }
}

@media screen and (max-width: 992px) {
  .dessert-container {
    .menu-item-box {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

@media screen and (max-width: 776px) {
  .dessert-container {
    .menu-item-box {
      .menu-item {
        .menu-item-title {
          h4 {
            font-size: 18px;
          }

          h5 {
            font-size: 14px;
          }
        }
        p {
          font-size: 12px;
        }
      }
    }

    .bold-separator {
      gap: 30px;
    }
  }
}

@media screen and (max-width: 576px) {
  .dessert-container {
    .bold-separator {
      gap: 30px;
    }
  }

  .dessert {
    .dessert-title {
      h1 {
        font-size: 32px;
      }

      p {
        font-size: 22px;
      }
    }
  }
}
</style>
