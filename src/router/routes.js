import { createRouter, createWebHistory } from "vue-router";

import {
  ContactComponent,
  GalleryComponent,
  HomeComponent,
  MenuComponent,
} from "../components/index";

const routes = [
  { path: "/", component: HomeComponent, name: "HomeComponent" },
  { path: "/gallery", component: GalleryComponent, name: "GalleryComponent" },
  { path: "/contact", component: ContactComponent, name: "ContactComponent" },
  { path: "/menu", component: MenuComponent, name: "MenuComponent" },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
