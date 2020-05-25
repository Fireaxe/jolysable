import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "*", redirect: "/" }
  ]
});

router.beforeEach(function (to, from, next) {
  setTimeout(() => {
    if (to.hash) {
      const position = document.querySelector(to.hash).offsetTop
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  }, 100);
  next();
});

export default router
