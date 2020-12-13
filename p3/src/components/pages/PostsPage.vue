<template>
  <div id="posts">
    <h2> All Posts</h2>
    <router-link v-for="post in posts" :key="post.id" v-bind:to="'/posts/' + post.id" exact>
      <show-post :post="post"></show-post>
    </router-link>
  </div>
</template>

<script>
import ShowPost from "@/components/ShowPost.vue";

export default {
  name: '',
  components: {
    "show-post": ShowPost
  },
  props: ["posts"],
  data: function() {
    return {
    };
  }
};
</script>

<style scoped>
</style>