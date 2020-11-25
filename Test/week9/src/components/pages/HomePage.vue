<template>
  <div>
    <p>Home Page for my Blog - Articles Written by Osama Balkasem</p>
    <show-featured :category=1></show-featured>
  </div>
</template>

<script>
import ShowFeatured from "@/components/ShowFeatured.vue";
// import { products } from "@/products.js";

export default {
  name: '',
  components: {
    "show-featured": ShowFeatured
  },
  // categories() {
  //   let categories = this.products.map(product => product.categories);
  //   let mergedCategories = [].concat.apply([], categories);

  //   // Return unique, sorted categories
  //   return [...new Set(mergedCategories)].sort();
  // },
  // data: function() {
  //   return {
  //     product: products
  //   };
  // }
};
</script>

<style scoped>
</style>