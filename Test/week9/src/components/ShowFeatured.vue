<!-- src/components/ShowFeatured.vue -->
<template>
  <div id="featured">
    <h2> My Favorite Posts</h2>
    <ul class="cleanList">
      <li v-for="product in featuredProducts" :key="product.id">{{ product.title }} </li>
    </ul>
  </div>
</template>

<script>
// import { products } from "@/products.js";

import { axios } from "@/app.js";

export default {
  name: "show-featured",
  props: ["category"],
  data: function() {
    return {
      posts: [],
    };
  },
  computed: {
    featuredProducts() {
      return this.posts.filter(post => {
        return post.favorite.includes(this.category);
      }, this.category);
    }
  },
  // computed: {
  //   featuredProducts() {
  //     return this.products.filter(product => {
  //       return product.categories.includes(this.category);
  //     }, this.category);
  //   }
  // },
  mounted() {
    axios.get("/post").then(response => {
      this.posts = response.data.post;
      // console.log(response.data);
    });
  }
};
</script>
