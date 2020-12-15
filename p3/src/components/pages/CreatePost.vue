<template>
  <div>
    <h2>Add a New Post</h2>

    <div id="inputs">
      <label for="title">Title</label>
      <input type="text" v-model="post.title" id="title" v-on:blur="validate()" />
      <br />
      <error-field v-if="errors && 'title' in errors" :errors="errors.title"></error-field>
      <br />

      <label for="content">Content:</label>
      <input type="text" v-model="post.content" id="content"  v-on:blur="validate()" />
      <br />
      <error-field v-if="errors && 'content' in errors" :errors="errors.content"></error-field>
      <br />

      <label for="auther">Auther:</label>
      <input type="text" v-model="post.auther" id="auther"  v-on:blur="validate()" />
      <br />
      <error-field v-if="errors && 'auther' in errors" :errors="errors.auther"></error-field>
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
import Validator from 'validatorjs';
import ErrorField from '@/components/ErrorField.vue';

export default {
  components: {
        'error-field': ErrorField
    },
  data() {
    return {
      errors: null,
      post: {
        title: null,
        content: null,
        auther: null,
        favorite: true
      }
    };
  },
  methods: {

    validate() {
    let validator = new Validator(this.post, {
        title: 'required|between:3,100',
        content: 'required|between:3,100',
        auther: 'required|between:3,100',
    });

      if (validator.fails()) {
            this.errors = validator.errors.all();
        } else {
            this.errors = null;
        }

        return validator.passes();
    },
    addPost() {
        if (this.validate()) {
            axios.post('/post', this.post).then(response => {
                console.log(response.data);
            });
        }
    }
  }
};
</script>
