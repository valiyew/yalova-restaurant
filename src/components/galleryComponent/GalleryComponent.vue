<template>
  <div class="gallery">
    <div class="categories">
      <Button
        v-for="category in categories"
        :key="category"
        :class="{ active: selectedCategory === category }"
        @click="filterImages(category)"
      >
        {{ category }}
      </Button>
    </div>

    <div class="images-grid">
      <div v-for="image in filteredImages" :key="image.id" class="image-card">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const categories = ref(["All", "Menu", "Restaurant", "Video"]);

const selectedCategory = ref("All");

const images = ref([
  {
    id: 1,
    category: "Menu",
    src: "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg",
  },
  {
    id: 2,
    category: "Menu",
    src: "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg",
  },
  {
    id: 3,
    category: "Menu",
    src: "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg",
  },
  {
    id: 4,
    category: "Menu",
    src: "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg",
  },
  {
    id: 5,
    category: "Restaurant",
    src: "/src/assets/jason-leung-poI7DelFiVA-unsplash.jpg",
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

  .categories {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;

    button {
      padding: 10px 20px;
      border: 1px solid #ccc;
      background: #f9f9f9;
      cursor: pointer;
      font-size: 16px;
      transition: 0.3s;

      &.active {
        background: black;
        color: white;
        border-color: black;
      }

      &:hover {
        background: #eee;
      }
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
</style>
