import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import Dashboard from "./pages/Dashboard.vue";
import Orders from "./pages/Orders.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Dashboard },
  {
    path: "/orders",
    component: Orders,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We
  // are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);

app.use(router);

app.mount("#app");
