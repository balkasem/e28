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
// import { axios } from "@/app.js";

export default {
  name: '',
  data: function() {
    return {
      //posts: [],
      links: ["Home", "Posts", "Account" ,"CreatePost"],

      /* Map links to the appropriate component */
      paths: {
        Home: "/",
        Posts: "/posts",
        Categories: "/categories",
        CreatePost: "/posts/new",
        Account: "/account"
      }
    };
  },
  mounted() {
    // axios.get("/post").then(response => {
    //   this.posts = response.data.post;
    // });

    this.$store.dispatch('fetchPosts');

    this.$store.dispatch('authUser');

    //this.$store.commit('setCartCount', 3);
  },
  computed: {
    posts(){
        return this.$store.state.posts;
    }
  },
  watch: {
        // When user changes, update posts
        user() {
            if (this.user) {
              console.log(this.user);
                this.$store.dispatch('fetchPosts');
            }
        },
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
