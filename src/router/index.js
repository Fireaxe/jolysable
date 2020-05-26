import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/Home");

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

router.beforeEach(function(to, from, next) {
  setTimeout(() => {
    if (to.hash) {
      const position = document.querySelector(to.hash);

      if (position) {
        window.scrollTo({
          top: position.offsetTop,
          behavior: "smooth"
        });
      }
    }
  }, 100);
  next();
});

export default router;
