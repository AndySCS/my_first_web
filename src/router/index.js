import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import QRCodeGenerate from "@/components/QRCodeGen.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:catchAll(.*)",
    name: "Home",
    component: Home,
  },
  {
    path: "/QRCodeGenerate",
    name: "QRCodeGenerate",
    component: QRCodeGenerate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
