{/*
<template>
  <section class="weekly-deals">
    <div class="overlay"></div>
    <div class="weekly-deals-title">
      <h1 data-aos="zoom-in-up">Weekly Deals</h1>
      <h3 data-aos="zoom-in-up">Investigationes demonstraverunt lectores</h3>
      <div class="bold-separator" data-aos="zoom-in-up">
        <div class="line"></div>
        <div class="dot"></div>
        <div class="line"></div>
      </div>

      <div class="menu-data">
        <div
          class="menu-item"
          v-for="(item, index) in menuItems"
          :key="index"
          data-aos="zoom-in-up"
        >
          <div class="menu-item-description">
            <h4>{{ item.day }}</h4>
            <span>( {{ item.description }} )</span>
          </div>

          <div class="menu-item-meal">
            <h5>{{ item.meal }}</h5>
            <div class="menu-item-line"></div>
            <div class="menu-item-prices">
              <span>{{ item.oldPrice }}</span>
              <p>{{ item.newPrice }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const menuItems = [
  {
    day: "Monday",
    description: "Labore et dolore",
    meal: "Oatmeal Apples",
    oldPrice: "$34",
    newPrice: "$26",
  },
  {
    day: "Tuesday",
    description: "Semonstraverunt",
    meal: "Soft shell crab",
    oldPrice: "$130",
    newPrice: "$90",
  },
  {
    day: "Wednesday",
    description: "Incididunt ut labore",
    meal: "Miso chicken",
    oldPrice: "$30",
    newPrice: "$20",
  },
  {
    day: "Thursday",
    description: "Adipisicing elit",
    meal: "Fish pie",
    oldPrice: "$61",
    newPrice: "$44",
  },
];
</script>

<style lang="scss" scoped>
.weekly-deals {
  width: 100%;
  height: auto;
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
  padding: 90px 0px;

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

  .weekly-deals-title {
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

    .menu-data {
      width: 70%;

      .menu-item {
        width: 100%;
        float: left;

        .menu-item-description {
          display: flex;
          align-items: center;
          gap: 5px;

          h4 {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 24px;
            letter-spacing: 2px;
            padding-bottom: 12px;
            font-family: "Source Sans Pro", sans-serif;
          }

          span {
            font-family: "Droid Serif", serif;
            font-size: 12px;
          }
        }

        .menu-item-meal {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          h5 {
            font-family: "Droid Serif", serif;
            font-weight: bold;
            font-style: italic;
            text-align: left;
            font-size: 18px;
            margin: 10px 0px 30px 0px;
          }

          .menu-item-line {
            width: 80%;
            border: 1px dotted var(--white);
          }

          .menu-item-prices {
            display: flex;
            align-items: center;
            gap: 5px;

            span {
              color: var(--primary);
              font-size: 100%;
              text-decoration: line-through;
              margin-top: 8px;
            }

            p {
              font-weight: 700;
              font-size: 30px;
              padding-left: 3px;
              color: var(--white);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1450px) {
    .weekly-deals-title {
      .menu-data {
        width: 90%;

        .menu-item {
          .menu-item-meal {
            .menu-item-line {
              width: 75%;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    .weekly-deals-title {
      .menu-data {
        width: 90%;

        .menu-item {
          .menu-item-meal {
            .menu-item-line {
              width: 70%;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 776px) {
    .weekly-deals-title {
      .menu-data {
        width: 90%;

        .menu-item {
          .menu-item-meal {
            .menu-item-line {
              width: 60%;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    .weekly-deals-title {
      h1 {
        font-size: 28px;
      }

      h3 {
        font-size: 22px;
      }

      a {
        font-size: 22px;
      }

      .bold-separator {
        gap: 30px;
      }

      .menu-data {
        width: 90%;

        .menu-item {
          .menu-item-meal {
            .menu-item-line {
              width: 40%;
            }
          }
        }
      }
    }
  }
}
</style>
*/}
