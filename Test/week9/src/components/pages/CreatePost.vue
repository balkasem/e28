<template>
  <div>
    <h2>Add a New Post</h2>

    <div id="inputs">
      <label for="title">Title</label>
      <input type="text" v-model="post.title" id="title" />
      <br />
      <br />

      <label for="content">Content:</label>
      <input type="text" v-model="post.content" id="content" />
      <br />
      <br />

      <label for="auther">Auther:</label>
      <input type="text" v-model="post.auther" id="auther" />
      <br />
      <br />
      
      <label for="favorite" class="form-checkbox-label">
        <input type="checkbox" v-model="post.favorite" id="favorite" />
        Favorite?
      </label>
    </div>

    <button @click="addPost">Add Post</button>
  </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
  data() {
    return {
      post: {
        title: "New Article",
        content: "content of my new post",
        auther: "Sam Balkasem",
        favorite: true
      }
    };
  },
  methods: {
    addPost() {
      axios.post("/post", this.post).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>
