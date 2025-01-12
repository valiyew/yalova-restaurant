<template>
  <section class="our-team">
    <div class="our-team-title">
      <h1 data-aos="zoom-in-up">Our Team</h1>
      <h3 data-aos="zoom-in-up">High-class professional service</h3>
      <p data-aos="zoom-in-up">
        Numerous commentators have also referred to the supposed restaurant
        owner's eccentric habit of touting for custom <br />
        outside his establishment, dressed in aristocratic fashion and
        brandishing a sword
      </p>
      <div class="bold-separator" data-aos="zoom-in-up">
        <div class="line"></div>
        <div class="dot"></div>
        <div class="line"></div>
      </div>

      <div class="about-chef">
        <div class="chef-item" v-for="(item, index) in chefs" :key="index">
          <img :src="item.img" alt="" data-aos="zoom-in-up" />
          <div>
            <h4 data-aos="zoom-in-up">{{ item.name }}</h4>
            <p data-aos="zoom-in-up">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import chefImage from "/src/assets/shef.jpg";

const chefs = [
  {
    name: "Andy Moro",
    description: "Master chef in Brooklin",
    img: chefImage,
  },
  {
    name: "Andy Moro",
    description: "Master chef in Brooklin",
    img: chefImage,
  },
  {
    name: "Andy Moro",
    description: "Master chef in Brooklin",
    img: chefImage,
  },
  {
    name: "Andy Moro",
    description: "Master chef in Brooklin",
    img: chefImage,
  },
];
</script>

<style lang="scss" scoped>
.our-team {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 3;
  background: var(--white);
  display: flex;
  place-items: center;
  text-align: center;
  padding: 100px 0px;

  .our-team-title {
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    color: var(--white);
    z-index: 2;

    h1 {
      width: 100%;
      color: var(--primary);
      text-transform: uppercase;
      font-weight: bold;
      font-size: 38px;
      letter-spacing: 6px;
      padding-bottom: 20px;
      font-family: "Playball", cursive;
    }

    h3 {
      color: var(--black);
      font-size: 22px;
      font-family: "Playball", cursive;
      margin-bottom: 40px;
    }

    p {
      text-align: center;
      font-size: 16px;
      line-height: 24px;
      padding-bottom: 10px;
      color: var(--p-color);
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
        background: var(--black);
        border-radius: 50%;
      }
    }

    .about-chef {
      width: 70%;
      margin-top: 30px;
      padding: 15px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      place-items: center;

      .chef-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        cursor: pointer;

        img {
          width: 80%;
          height: 80%;
          border-radius: 50%;
          object-fit: cover;
        }

        div {
          h4 {
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 1px;
            font-family: "Playball", cursive;
            color: var(--black);
          }

          p {
            font-size: 14px;
            font-weight: bold;
            color: var(--primary);
            font-family: "Source Sans Pro", sans-serif;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1450px) {
    .our-team-title {
      .about-chef {
        width: 90%;
      }
    }
  }

  @media screen and (max-width: 776px) {
    .our-team-title {
      .about-chef {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media screen and (max-width: 576px) {
    .our-team-title {
      h1 {
        font-size: 28px;
      }

      h3 {
        font-size: 18px;
      }

      a {
        font-size: 22px;
      }

      .bold-separator {
        gap: 30px;
      }

      .about-chef {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
