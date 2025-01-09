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
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="handleActive(index)"
        >
          {{ item }}
        </li>

        <div>
          <Select
            v-model="selectedLanguages"
            :options="languages"
            optionLabel="name"
          />
        </div>
      </ul>
    </div>

    <div class="burger-navbar">
      <i @click="toggleBurger" class="fa-solid fa-bars"></i>
    </div>

    <Transition>
      <div v-if="isOpen" class="burger-navbar-section">
        <div>
          <i @click="toggleBurger" class="fa-solid fa-xmark"></i>

          <ul>
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              :class="{ active: activeIndex === index }"
              @click="handleActive(index)"
            >
              {{ item }}
            </li>

            <div>
              <Select
                v-model="selectedLanguages"
                :options="languages"
                optionLabel="name"
              />
            </div>
          </ul>
        </div>

        <div class="networks">
          <a @click="toggleBurger" href="#facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a @click="toggleBurger" href="#twitter">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a @click="toggleBurger" href="#instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a @click="toggleBurger" href="#telegram">
            <i class="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import Select from "primevue/select";

const languages = ref([
  { name: "Uz", code: "UZ" },
  { name: "En", code: "EN" },
  { name: "Ru", code: "RU" },
]);

const selectedLanguages = ref(
  languages.value.find((lang) => lang.code === "EN")
);

const menuItems = ["Home", "Gallery", "Menu", "Contact"];
const activeIndex = ref(null);

const isOpen = ref(false);

const handleActive = (index) => {
  activeIndex.value = index;
  isOpen.value = !isOpen.value;
};

const toggleBurger = () => {
  isOpen.value = !isOpen.value;
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
nav {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0px 150px;
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
        color: var(--white);
        cursor: pointer;
        position: relative;

        &.active {
          color: var(--primary);
        }

        &:hover {
          color: var(--primary);
        }

        &::after {
          content: "";
          position: absolute;
          top: 20px;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }

        &:hover::after {
          width: 100%;
        }

        &.active::after {
          width: 100%;
        }
      }
    }

    .networks {
      display: flex;
      gap: 15px;
      justify-content: end;

      a {
        color: var(--white);

        &:hover {
          color: var(--primary);
        }
      }
    }
  }

  .burger-navbar {
    display: none;
    i {
      font-size: 25px;
      color: var(--white);
      cursor: pointer;
    }
  }

  .burger-navbar-section {
    display: none;
  }
}

@media screen and (max-width: 1030px) {
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px 0px 20px;

    .mains {
      display: none;
    }

    .burger-navbar {
      margin-bottom: 20px;
      display: block;
    }

    .burger-navbar-section {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100vh;
      background: var(--burger-navbar-bg);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 30px;
      padding: 30px;

      .fa-xmark {
        font-size: 25px;
        color: var(--white);
        cursor: pointer;
      }

      ul {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        list-style: none;

        li {
          color: var(--white);
          cursor: pointer;
          position: relative;

          &.active {
            color: var(--primary);
          }

          &:hover {
            color: var(--primary);
          }

          &::after {
            content: "";
            position: absolute;
            top: 20px;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary);
            transition: width 0.3s ease;
          }

          &:hover::after {
            width: 100%;
          }

          &.active::after {
            width: 100%;
          }
        }
      }

      .networks {
        display: flex;
        gap: 15px;
        justify-content: end;

        a {
          color: var(--white);

          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
}
</style>
