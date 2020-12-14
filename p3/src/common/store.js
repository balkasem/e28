import Vue from 'vue'
import Vuex from 'vuex'

import { axios } from "@/app.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
    },
    mutations: {
        setPosts(state, payload){
            state.posts = payload;
        },
    },
    actions: {
        fetchPosts(context){
            axios.get("/post").then(response => {
                //this.posts = response.data.post;
                context.commit('setPosts', response.data.post);
              });
        }
    }
})