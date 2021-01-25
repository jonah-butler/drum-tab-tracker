import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Songs from '../views/Songs.vue';
import CreateSong from '../views/CreateSong.vue';
import Song from '../views/Song.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs,
  },
  {
    path: '/songs/add',
    name: 'song-create',
    component: CreateSong,
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: Song,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
