import Vue from 'vue'
import Vuex from 'vuex'

import { axios } from "@/app.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
        user: null
    },
    mutations: {
        setPosts(state, payload){
            state.posts = payload;
        },
        setUser(state, payload){
            state.user = payload;
        },
    },
    actions: {
        fetchPosts(context){
            axios.get("/post").then(response => {
                //this.posts = response.data.post;
                context.commit('setPosts', response.data.post);
              });
        },
        authUser(context) {
            axios.post('auth').then((response) => {
                if (response.data.authenticated) {
                    context.commit('setUser', response.data.user);
                }
            });
        },
    },
    getters: {
        getPosts(state) {
            return function (id) {
                return state.posts.filter((post) => {
                    return post.id == id;
                }, this.id)[0];
            }
        
        }
    }
})