import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import CarsList from "../views/CarsList.vue";
import Car from "../views/Car.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/About",
      name: "About",
      component: About,
    },
    { path: "/CarsList", name: "Cars List", component: CarsList },
    { path: "/Car/:id", name: "Car", component: Car },
  ],
});

export default router;
