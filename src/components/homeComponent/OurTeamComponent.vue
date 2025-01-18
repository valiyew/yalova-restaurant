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
        <div
          class="chef-item"
          v-for="(item, index) in chefs"
          :key="index"
          @click="selectedChef(item.id)"
        >
          <img :src="item.img" alt="" data-aos="zoom-in-up" />
          <div>
            <h4 data-aos="zoom-in-up">{{ item.name }}</h4>
            <p data-aos="zoom-in-up">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Transition>
    <div v-if="isOpenModal" class="open-modal">
      <div class="modal" :key="selectedItem.id">
        <div style="padding: 2px" class="border">
          <div style="padding: 25px" class="border">
            <i @click="toggleModal" class="fa-solid fa-xmark close"></i>
            <div class="modal-img">
              <img :src="selectedItem.img" alt="" />
            </div>

            <div class="modal-title">
              <h2>{{ selectedItem.name }}</h2>
              <div class="line">
                <div>
                  <div></div>
                  <div></div>
                </div>
                <p>{{ selectedItem.description }}</p>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <p>{{ selectedItem.about }}</p>

              <div class="find-us">
                <h3>Find Us</h3>
                <div class="networks">
                  <a href="#facebook"
                    ><i class="fa-brands fa-facebook-f"></i
                  ></a>
                  <a href="#twitter"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#instagram"
                    ><i class="fa-brands fa-instagram"></i
                  ></a>
                  <a href="#telegram"><i class="fa-brands fa-telegram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import chefImage from "/src/assets/shef.jpg";

import { ref } from "vue";

const chefs = [
  {
    id: 1,
    name: "Andy Moro",
    description: "Master chef in Brooklin",
    img: chefImage,
    about:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Xillum dolore eu fugiat nulla pariatur. olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Andy Moro",
    description: "Master chef in Brooklin",
    img: chefImage,
    about:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Xillum dolore eu fugiat nulla pariatur. olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Andy Moro",
    description: "Master chef in Brooklin",
    img: chefImage,
    about:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Xillum dolore eu fugiat nulla pariatur. olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    name: "Andy Moro",
    description: "Master chef in Brooklin",
    img: chefImage,
    about:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Xillum dolore eu fugiat nulla pariatur. olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const selectedItem = ref({
  id: 0,
  name: "",
  description: "",
  img: "",
  about: "",
});

const isOpenModal = ref(false);

const selectedChef = (id) => {
  isOpenModal.value = !isOpenModal.value;
  const chef = chefs.find((item) => item.id === id);

  if (chef) {
    selectedItem.value = chef;
  }
};

const toggleModal = () => {
  isOpenModal.value = !isOpenModal.value;
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

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
      font-family: "Source Sans Pro", sans-serif;
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
        position: relative;

        &::after {
          content: "More info";
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          font-weight: bold;
          font-size: 18px;
          font-family: "Playball", cursive;
          letter-spacing: 2px;
          color: var(--black);
          opacity: 0;
          transition: 0.6s;
        }

        img {
          width: 80%;
          height: 80%;
          border-radius: 50%;
          object-fit: cover;
          transition: 0.3s;
        }
        &:hover {
          img {
            opacity: 0.4;
            transform: scale(0.9);
          }

          &::after {
            opacity: 1;
          }
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

.open-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  .modal {
    position: relative;
    width: 850px;
    height: auto;
    background: #fff;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

    .border {
      width: 100%;
      height: 100%;
      display: flex;
      gap: 20px;
      border: 1px solid var(--primary);
      position: relative;

      .close {
        position: absolute;
        color: var(--black);
        font-size: 28px;
        top: 0;
        right: 5px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          color: var(--primary);
        }
      }

      .modal-img {
        text-align: center;
        margin-bottom: 20px;
        width: 50%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .modal-title {
        text-align: center;
        width: 50%;

        h2 {
          font-size: 48px;
          font-family: "Playball", cursive;
          color: var(--primary);
        }

        .line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          div {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 5px;
            div {
              width: 30px;
              height: 1px;
              background: var(--primary);
            }
          }
          p {
            margin-top: 20px;
            font-size: 18px;
            text-transform: uppercase;
            font-weight: bold;
            padding-bottom: 20px;
            font-family: "Source Sans Pro", sans-serif;
            color: var(--black);
          }
        }

        p {
          font-size: 16px;
          line-height: 24px;
          margin: 10px 0px;
          color: var(--p-color);
          font-family: "Source Sans Pro", sans-serif;
        }

        .find-us {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;

          h3 {
            padding: 10px 0;
            display: inline-table;
            font-weight: bold;
            font-size: 16px;
            font-family: "Playball", cursive;
            letter-spacing: 2px;
            color: var(--primary);
          }

          .networks {
            margin-top: 10px;
            display: flex;
            gap: 15px;
            justify-content: center;

            a {
              font-size: 22px;
              color: var(--black);

              &:hover {
                color: var(--primary);
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 776px) {
  .open-modal {
    overflow: scroll;
    .modal {
      position: absolute;
      top: 10%;
      width: 100%;
      .border {
        display: flex;
        flex-direction: column;

        .modal-img,
        .modal-title {
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .open-modal {
    .modal {
      .border {
        .modal-title {
          h2 {
            font-size: 28px;
          }

          .line {
            p {
              font-size: 15px;
            }
          }

          p {
            font-size: 14px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 376px) {
  .open-modal {
    .modal {
      position: absolute;
      top: 5%;
    }
  }
}
</style>
