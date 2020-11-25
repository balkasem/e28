<template>
  <div>
    <div>Title: {{ post.title }}</div>
    <p v-if="includeDetails">{{ post.content }}</p>
    <div v-if="includeDetails">${{ post.auther }}</div>
  </div>
</template>

<script>
export default {
  name: "show-post",
  props: ["post", "includeDetails"],
  data: function() {
    return {};
  }
};
</script>
