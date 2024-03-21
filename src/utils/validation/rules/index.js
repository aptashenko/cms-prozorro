import {maxLength, minLength, required, email} from "@vuelidate/validators";

export const validationRules = {
    email: {
        value: {
            required,
            email,
            minLength: minLength(6),
            maxLength: maxLength(40)
        }
    },
    password: {
        value: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(20)
        }
    },
    name: {
        value: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(20)
        }
    },
    phone: {
        value: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(20)
        }
    }
}
