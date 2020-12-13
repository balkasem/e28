<template>
  <div>
    <h1>
      ( Coming Soon in project 3 )
      <br />
      Post Id: {{ id }}
    </h1>

    <show-post :product="product" :includeDetails="true"></show-post>
  </div>
</template>

<script>
import ShowPost from "@/components/ShowPost.vue";

export default {
  name: "",
  props: ["id"],
  components: {
    "show-post": ShowPost
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>