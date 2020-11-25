<template>
  <div id="featured">
    <h2>My Favorite Posts</h2>
    <ul class="cleanList">
      <li v-for="post in favoritePosts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  name: "show-featured",
  props: ["favorite"],
  data: function() {
    return {
      posts: []
    };
  },
  computed: {
    favoritePosts() {
      return this.posts.filter(post => {
        return post.favorite.includes(this.favorite);
      }, this.favorite);
    }
  },
  mounted() {
    axios.get("/post").then(response => {
      this.posts = response.data.post;
    });
  }
};
</script>
