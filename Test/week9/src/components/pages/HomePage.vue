<template>
  <div>
    <p>Home Page for my Blog - Articles Written by Osama Balkasem</p>
    <show-featured :favorite="1"></show-featured>
  </div>
</template>

<script>
import ShowFavorite from "@/components/ShowFeatured.vue";

export default {
  name: "",
  components: {
    "show-featured": ShowFavorite
  }
};
</script>

<style scoped>
</style>