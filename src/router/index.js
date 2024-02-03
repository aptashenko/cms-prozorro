import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import('@/views/HomePage.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    }
});


export default router;
