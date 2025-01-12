<template>
  <nav :class="{ scrolled: isScrolled }">
    <div class="logo">
      <img v-if="isScrolled" src="../../assets/yalovaLogo2.png" alt="" />
      <img v-else src="../../assets/yalovaLogo.png" alt="Logo" />
    </div>

    <div class="mains">
      <div v-if="isScrolled"></div>
      <div v-else class="networks">
        <a href="#facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#twitter"><i class="fa-brands fa-twitter"></i></a>
        <a href="#instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#telegram"><i class="fa-brands fa-telegram"></i></a>
      </div>
      <ul>
        <router-link v-for="(item, idx) in routes" :to="item.path" :key="idx">
          <li
            :class="{ active: activeIndex === idx }"
            @click="handleActive(idx)"
          >
            {{ item.name }}
          </li>
        </router-link>
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
      <i
        v-if="isScrolled"
        @click="toggleBurger"
        style="color: var(--black)"
        class="fa-solid fa-bars"
      ></i>
      <i v-else @click="toggleBurger" class="fa-solid fa-bars"></i>
    </div>

    <Transition>
      <div v-if="isOpen" class="burger-navbar-section">
        <div>
          <i @click="toggleBurger" class="fa-solid fa-xmark"></i>
          <ul>
            <router-link
              v-for="(item, idx) in routes"
              :to="item.path"
              :key="idx"
            >
              <li
                :class="{ active: activeIndex === idx }"
                @click="handleActive(idx)"
              >
                {{ item.name }}
              </li>
            </router-link>
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
          <a href="#facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#twitter"><i class="fa-brands fa-twitter"></i></a>
          <a href="#instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#telegram"><i class="fa-brands fa-telegram"></i></a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Select from "primevue/select";

const languages = ref([
  { name: "Uz", code: "UZ" },
  { name: "En", code: "EN" },
  { name: "Ru", code: "RU" },
]);
const selectedLanguages = ref(
  languages.value.find((lang) => lang.code === "EN")
);

const routes = [
  { path: "/", name: "Home" },
  { path: "/gallery", name: "Gallery" },
  { path: "/contact", name: "Contact" },
  { path: "/menu", name: "Menu" },
];
const activeIndex = ref(null);

const isOpen = ref(false);
const toggleBurger = () => {
  isOpen.value = !isOpen.value;
};

const isScrolled = ref(false);
const handleActive = (index) => {
  activeIndex.value = index;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
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
  height: 150px;
  width: 100%;
  top: 0;
  background: none;
  z-index: 20;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &.scrolled {
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    .mains {
      margin-top: 35px;
      ul {
        li {
          color: var(--black);
        }
      }
    }
  }

  .logo {
    img {
      width: 100%;
      height: 150px;
    }
  }

  .mains {
    margin-top: 25px;
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

@media screen and (max-width: 1450px) {
  nav {
    padding: 0px 40px 0px 0px;
  }
}

@media screen and (max-width: 1030px) {
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px 0px 0px;

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
