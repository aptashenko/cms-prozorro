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
        },
        {
            path: "/education",
            children: [
                {path: '', name: 'education', component: () => import('@/views/education/index.vue')},
                {path: 'video/:id', name: 'lesson-video', component: () => import('@/views/education/LessonVideo.vue')},
                {path: 'text/:id', name: 'lesson-notes', component: () => import('@/views/education/LessonNotes.vue')},
                {path: 'test/:id', name: 'lesson-test', component: () => import('@/views/education/LessonTest.vue')},
                {path: 'homework/:id', name: 'lesson-homework', component: () => import('@/views/education/LessonHomework.vue')}
            ]
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    }
});

router.beforeEach((to) => isAuth(to))


export default router;
