import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import HomePage from "@/components/pages/HomePage.vue";
import PostsPage from "@/components/pages/PostsPage.vue";
import CreatePost from "@/components/pages/CreatePost.vue";
import PostPage from "@/components/pages/PostPage.vue";

import store from '@/common/store.js';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/posts', component: PostsPage },
    { path: '/posts/new', component: CreatePost, props: true },
    { path: '/posts/:id', component: PostPage, props: true },
  ],
  mode: 'history',
})

new Vue({
  router: router, 
  store,
  render: h => h(App),
}).$mount('#app')


