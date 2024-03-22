import {ref} from "vue";

const expanded = ref(false)
export function useSidebarSettings () {

    const toggleExpand = () => {
        expanded.value = !expanded.value
    }

    return {
        expanded,
        toggleExpand
    }
}
