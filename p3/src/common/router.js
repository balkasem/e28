import VueRouter from 'vue-router';
import store from '@/common/store';

// import HomePage from "@/components/pages/HomePage.vue";
// import PostsPage from "@/components/pages/PostsPage.vue";
// import CreatePost from "@/components/pages/CreatePost.vue";
// import PostPage from "@/components/pages/PostPage.vue";
// import AccountPage from "@/components/pages/AccountPage.vue";

//     { path: '/', component: HomePage },
//     { path: '/posts', component: PostsPage },
//     { path: '/posts/new', component: CreatePost, props: true },
//     { path: '/posts/:id', component: PostPage, props: true },
//     { path: '/account', component: AccountPage },

// Define all the routes of our application
const routes = [
    {
        path: '/',
        // Rather than having to have separate import statements at the top of this page for each component
        // Here's a simple way we can directly make our components available
        component: () => import('@/components/pages/HomePage.vue'),
    },
    {
        path: '/posts',
        component: () => import('@/components/pages/PostsPage.vue'),
    },
    {
        path: '/account',
        component: () => import('@/components/pages/AccountPage.vue'),
    },
    {
        path: '/posts/new',
        component: () => import('@/components/pages/CreatePost.vue'),
        // Note the addition of this meta attribute:
        meta: {
            requiresAuth: true
        }
    },
    {
        // This is a route we can direct the user to if they try to access a part of the site they don't have privileges for
        path: '/denied',
        component: () => import('@/components/pages/AccessDeniedPage.vue'),
    },

];

// Initialize our router
const router = new VueRouter({
    routes,
    mode: 'history'
})

// beforeEach provides a way to execute some code before a route is resolved
// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, from, next) => {

    // Exact the meta information from our routes
    // Ref: https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !store.state.user) {
        // If they’re trying to access a requiresAuth route and they're not logged in, they get sent to "Access Denied" page
        next('/denied');
    }
    else {
        // In all other circumstances, send them to the route they requested
        next();
    }
});

export default router;