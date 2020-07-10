import Vue from "vue";
import VueRouter from "vue-router";
// import home from "../components/home.vue";
// import about from "../components/about.vue";

// 懒加载的写法
const home = () => import("../components/home.vue");
const homeNews = () => import("../components/homeNews.vue");
const homeMessage = () => import("../components/homeMessage.vue");
const about = () => import("../components/about.vue");

// 使用router插件
Vue.use(VueRouter);

// router的相关配置
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: home,
    children: [
      {
        path: "/news",
        component: homeNews,
      },
      {
        path: "/messages",
        component: homeMessage,
      },
    ],
  },
  {
    path: "/about",
    component: about,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

// router实例化
const router = new VueRouter({
  routes,
});

export default router;
