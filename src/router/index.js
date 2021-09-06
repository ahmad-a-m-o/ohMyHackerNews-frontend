import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Profile from "../views/Profile";
import News from "../views/News";
import ComposeNews from "../views/ComposeNews";
import myPosts from "../views/myPosts";
import store from "../store";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {loginRejected: true},
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {loginRejected: true},
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {loginRequired: true},
  },
  {
    path: '/news/:id', 
    name: 'news', 
    component: News
  },
  {
    path: '/news',
    name: 'news',
    component: Home
  },
  {
    path: '/compose',
    name: 'compose',
    component: ComposeNews,
    meta: {loginRequired: true},
  },
  {
    path: '/myposts',
    name: 'myposts',
    component: myPosts,
    meta: {loginRequired: true},
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to,from,next)=>{
  if(to.matched.some(r=>r.meta.loginRequired)){
      if(store.state.isAuthtenticated){
        next();
      }else{
        next('/login');
      }
  }else if(to.matched.some(r=>r.meta.loginRejected)){
      if(store.state.isAuthtenticated){
        next('/');
      }else{
        next();
      }
  }else next();
});

export default router;
