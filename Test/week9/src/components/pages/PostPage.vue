<template>
  <div>
    <h1>Show Posts Id: {{ id }}</h1>

    <show-post :product="product" :includeDetails="true"></show-post>
  </div>
</template>

<script>
import { products } from "@/products.js";
import ShowPost from "@/components/ShowPost.vue";

// import { axios } from "@/app.js";


export default {
  name: "",
  props: ["id"],
  components: {
    "show-post": ShowPost
  },
  data() {
    return {
      product: null,
      products: products,
      productNotFound: false
    };
  },
  mounted() {
    this.product = this.products.filter(product => {
      return product.id == this.id;
    }, this.id)[0];
    

    if (this.product == null) {
      this.productNotFound = true;
    }
  }
};
</script>