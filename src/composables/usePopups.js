import {defineAsyncComponent, reactive} from "vue";
const defaultProps = {
    transition: 'popup-slide'
}

const globalPopUpState = reactive({ component: null, props: defaultProps });
export function usePopups() {

    const openPopup = (name, props = {}) => {
        const component = defineAsyncComponent(() => import(`../components/popups/components/${name}.vue`))
        globalPopUpState.component = component
        globalPopUpState.props = {...defaultProps, ...props}
    }
    const closePopup = () => {
        globalPopUpState['component'] = null;
        globalPopUpState['props'] = defaultProps;
    }

    return {globalPopUpState, closePopup, openPopup}
}
