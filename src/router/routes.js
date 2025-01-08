import { createRouter, createWebHistory } from "vue-router";

import GalleryComponent from "../components/GalleryComponent.vue";
import HomeComponent from "../components/HomeComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";

const routes = [
  { path: "/", component: HomeComponent, name: "HomeComponent" },
  { path: "/gallery", component: GalleryComponent, name: "GalleryComponent" },
  { path: "/contact", component: ContactComponent, name: "ContactComponent" },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
