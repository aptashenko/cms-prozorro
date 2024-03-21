export const defaultState = {
    auth: {
        forms: {
            sign_in: {
                email: {
                    key: 'email',
                    type: 'email',
                    value: '',
                    error: '',
                    serverError: '',
                    label: 'Ваш Email',
                    valid: true
                },
                password: {
                    key: 'password',
                    type: 'password',
                    value: '',
                    error: '',
                    serverError: '',
                    label: 'Ваш пароль',
                    hide: true,
                    valid: true
                }
            },
            sign_up: {
                email: {
                    key: 'email',
                    type: 'email',
                    value: '',
                    error: '',
                    serverError: '',
                    label: 'Ваш Email',
                    valid: true
                },
                name: {
                    key: 'email',
                    type: 'email',
                    value: '',
                    error: '',
                    serverError: '',
                    label: 'Ваш ім\'я',
                    valid: true
                },
                phone: {
                    key: 'phone',
                    type: 'phone',
                    value: '',
                    error: '',
                    serverError: '',
                    label: 'Ваш телефон',
                    valid: true
                },
                password: {
                    key: 'password',
                    type: 'password',
                    value: '',
                    error: '',
                    serverError: '',
                    label: 'Ваш пароль',
                    hide: true,
                    valid: true
                }
            }
        }
    }
}


export const deepClone = obj => {
    return JSON.parse(JSON.stringify(obj))
}

export const resetAllStates = () => {
    console.log('reset states')
}
