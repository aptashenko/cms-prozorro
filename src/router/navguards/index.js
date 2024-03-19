export const isAuth = to => {
    const authPages = ['sign-in', 'sign-up'];
    const isAuth = localStorage.getItem('token')

    if (!isAuth && !to.meta?.guests) {
        return {name: 'sign-in'}
    } else if (isAuth && authPages.includes(to.name)) {
        return {name: 'start'}
    } else if (to.name === 'index') {
        return {name: 'start'}
    }
}
