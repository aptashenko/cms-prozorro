import { defineStore } from "pinia";
import {deepClone, defaultState} from "@/stores/default-states.js";
import {ref} from "vue";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore('auth-store', () => {
    const defaultStates = deepClone(defaultState.auth);
    const forms = ref(defaultStates.forms)
    const router = useRouter()

    const sign_in = () => {
        localStorage.setItem('token', 'token');
        router.push('/')
    }

    const logout = () => {
        localStorage.removeItem('token')
        router.push('/')
    }

    return {
        forms,
        sign_in,
        logout
    }
})
