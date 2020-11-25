<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            exact
          >{{ link }}      </router-link>
        </li>
      </ul>
    </nav>
    <router-view v-bind:posts="posts"></router-view>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  name: '',
  data: function() {
    return {
      posts: [],
      links: ["Home", "Posts", "CreatePost"],

      /* Map links to the appropriate component */
      paths: {
        Home: "/",
        Posts: "/posts",
        Categories: "/categories",
        CreatePost: "/posts/new"
      }
    };
  },
  mounted() {
    axios.get("/post").then(response => {
      this.posts = response.data.post;
      // console.log(response.data);
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
