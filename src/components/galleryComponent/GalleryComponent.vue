<template>
  <div class="gallery">
    <div class="categories" data-aos="zoom-in-up">
      <Button
        v-for="category in categories"
        :key="category"
        :class="{ active: selectedCategory === category }"
        @click="filterImages(category)"
      >
        {{ category }}
      </Button>
    </div>

    <div class="bold-separator" data-aos="zoom-in-up">
      <div class="line"></div>
      <div class="dot"></div>
      <div class="line"></div>
    </div>

    <div class="images-grid">
      <div
        v-for="image in filteredImages"
        :key="image.id"
        class="image-card"
        data-aos="zoom-in-up"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import galleryImg from "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg";

const categories = ref(["All", "Menu", "Restaurant", "Video"]);

const selectedCategory = ref("All");

const images = ref([
  {
    id: 1,
    category: "Menu",
    src: galleryImg,
  },
  {
    id: 2,
    category: "Menu",
    src: galleryImg,
  },
  {
    id: 3,
    category: "Menu",
    src: galleryImg,
  },
  {
    id: 4,
    category: "Menu",
    src: galleryImg,
  },
  {
    id: 5,
    category: "Restaurant",
    src: galleryImg,
  },
  {
    id: 6,
    category: "Restaurant",
    src: "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg",
  },
  {
    id: 7,
    category: "Restaurant",
    src: "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg",
  },
  {
    id: 8,
    category: "Video",
    src: "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg",
  },
  {
    id: 9,
    category: "Video",
    src: "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg",
  },
  {
    id: 10,
    category: "All",
    src: "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg",
  },
]);

const filterImages = (category) => {
  selectedCategory.value = category;
};

const filteredImages = computed(() => {
  if (selectedCategory.value === "All") {
    return images.value;
  }
  return images.value.filter(
    (image) => image.category === selectedCategory.value
  );
});
</script>

<style lang="scss" scoped>
.gallery {
  width: 100%;
  position: relative;
  z-index: 3;
  background: var(--white);
  gap: 25px;
  padding: 90px 150px;
  color: black;
  display: flex;
  flex-direction: column;
  place-items: center;

  .categories {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;

    button {
      cursor: pointer;
      font-size: 18px;
      font-weight: bold;
      transition: 0.3s;
      color: var(--p-color);
      background: none;
      border: none;
      font-family: "Source Sans Pro", sans-serif;

      &.active {
        color: var(--primary);
      }

      &:hover {
        color: var(--primary);
      }
    }
  }

  .bold-separator {
    text-align: center;
    display: flex;
    align-items: baseline;
    gap: 100px;
    margin: 10px 0px 40px 0px;

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

  .images-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;

    .image-card {
      img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}

@media screen and (max-width: 1450px) {
  .gallery {
    padding: 90px 30px;
  }
}

@media screen and (max-width: 576px) {
  .gallery {
    .images-grid {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
  }
}
</style>
