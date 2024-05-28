import { createRouter, createWebHistory } from "vue-router";
import LetsStart from "@/views/lets-start.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: LetsStart
        },
        {
            name: 'sign-in',
            path: '/sign-in',
            component: import('@/views/auth-page.vue')
        },
        {
            name: 'sign-up',
            path: '/sign-up',
            component: import('@/views/auth-page.vue')
        },
        {
            name: 'library',
            path: '/library',
            component: import('@/views/library.vue')
        },
        {
            name: 'article',
            path: '/article/:id',
            component: import('@/views/article.vue')
        },
        {
            name: 'all-courses',
            path: '/courses',
            component: import('@/views/courses.vue')
        },
        {
            name: 'course',
            path: '/course/:id',
            component: import('@/views/course.vue')
        },
        {
            name: 'education',
            path: '/education/:id',
            component: import('@/views/education.vue')
        },
        {
            name: 'lesson',
            path: '/education/:id/lesson/:lesson',
            component: import('@/views/lesson.vue')
        },
        {
            name: 'profile',
            path: '/profile',
            component: import('@/views/profile.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    }
});

export default router;
