import { createRouter, createWebHistory } from "vue-router";
import {isAuth} from "@/router/navguards/index.js";
import {useAsyncImport} from "@/composables/useAsyncImport.js";
import {LAYOUT_NAMES} from "@/layouts/enums.js";
const { importModule } = useAsyncImport();

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'index',
            path: '/'
        },
        {
            name: "sign-in",
            path: "/sign-in",
            meta: {layout: importModule(`../layouts/${LAYOUT_NAMES.default}.vue`), guests: true},
            component: () => import('@/views/auth/SignIn.vue')
        },
        {
            name: "sign-up",
            path: "/sign-up",
            meta: {layout: importModule(`../layouts/${LAYOUT_NAMES.default}.vue`), guests: true},
            component: () => import('@/views/auth/SignUp.vue')
        },
        {
            name: "start",
            path: "/lets-start",
            component: () => import('@/views/StartView.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    }
});

router.beforeEach((to) => isAuth(to))


export default router;
