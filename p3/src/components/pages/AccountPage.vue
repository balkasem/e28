<template>
    <div id="account-page">
        <div v-if="user">
            <h2>Hi, {{ user.name }}!</h2>

            <div id="posts">
                <strong>Your Posts</strong>
                <p v-if="posts && posts.length == 0">
                    No Posts yet.
                </p>
                <li v-for="(post, key) in posts" v-bind:key="key">
                    {{ post.title }}
                </li>
            </div>

            <button @click="logout">Logout</button>
        </div>

        <div v-else id="loginForm">
            <h2>Login</h2>
            <small
                >(Form is prefilled for demonstration purposes; remove in final
                application)</small
            >
            <div>
                <label>Email: <input type="text" v-model="data.email" /></label>
            </div>
            <div>
                <label
                    >Password: <input type="password" v-model="data.password"
                /></label>
            </div>

            <button @click="login">Login</button>

            <ul v-if="errors">
                <li class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
//import { axios } from '@/common/app.js';
import { axios } from "@/app.js";

export default {
    data() {
        return {
            // Form is prefilled for demonstration purposes; remove in final application
            data: {
                email: 'jill@harvard.edu',
                password: 'asdfasdf',
            },
            errors: null,
            //posts: null,
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        posts() {
            return this.$store.state.posts;
        },
    },
    methods: {
        login() {
            axios.post('login', this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit('setUser', response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        logout() {
            axios.post('logout').then((response) => {
                if (response.data.success) {
                    this.$store.commit('setUser', null);
                }
            });
        },
    },
    watch: {
        // When user changes, update posts
        user() {
            if (this.user) {
                this.posts = [];

                axios
                    .get('post/', {
                        params: { user_id: this.user.id },
                    })
                    .then((response) => {
                        // Iterate through the posts (response.data.results), loading the post information for each post
                        this.posts = response.data.results.map(
                            (post) => {
                                return this.$store.getters.getPosts(
                                    post.user_id
                                );
                            }
                        );
                    });
            }
        },
    }
};
</script>