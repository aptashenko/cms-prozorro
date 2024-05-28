import { createRouter, createWebHistory } from "vue-router";
import LetsStart from "@/views/lets-start.vue";
import AuthPage from "@/views/auth-page.vue";
import Library from "@/views/library.vue";
import Article from "@/views/article.vue";
import Courses from "@/views/courses.vue";
import Course from "@/views/course.vue";
import Education from "@/views/education.vue";
import Lesson from "@/views/lesson.vue";
import Profile from "@/views/profile.vue";

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
            component: AuthPage
        },
        {
            name: 'sign-up',
            path: '/sign-up',
            component: AuthPage
        },
        {
            name: 'library',
            path: '/library',
            component: Library
        },
        {
            name: 'article',
            path: '/article/:id',
            component: Article
        },
        {
            name: 'all-courses',
            path: '/courses',
            component: Courses
        },
        {
            name: 'course',
            path: '/course/:id',
            component: Course
        },
        {
            name: 'education',
            path: '/education/:id',
            component: Education
        },
        {
            name: 'lesson',
            path: '/education/:id/lesson/:lesson',
            component: Lesson
        },
        {
            name: 'profile',
            path: '/profile',
            component: Profile
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    }
});

export default router;
