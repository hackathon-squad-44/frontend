import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const generateRoute = (componentName) => {
  return {
    path: `/${componentName.toLowerCase()}`,
    name: componentName.toLowerCase(),

    component: () => import(`../views/${componentName}.vue`),
  };
};

function loadRoutes() {
  const response = require.context("../views", true, /^((?!vue).)*$/, "lazy");
  return response
    .keys()

    .map((item) => item.replace("./", ""))
    .filter((item) => item != "Home")
    .map(generateRoute);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  ...loadRoutes(),
];

const router = new VueRouter({
  routes,
});

export default router;
