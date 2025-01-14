<template>
  <div class="hot-dishes">
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
.hot-dishes {
  width: 100%;
  position: relative;
  z-index: 3;
  background: var(--white);
  padding: 100px 150px;
  color: black;
  display: flex;
  flex-direction: column;
  place-items: center;

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
  .hot-dishes {
    padding: 100px 30px;
  }
}

@media screen and (max-width: 992px) {
  .hot-dishes {
    .menu-item-box {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

@media screen and (max-width: 776px) {
  .hot-dishes {
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
  .hot-dishes {
    .bold-separator {
      gap: 30px;
    }
  }
}
</style>
