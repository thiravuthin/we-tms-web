import * as Yup from "yup";

export const createUserSchema = Yup.object().shape({
    full_nm: Yup.string().required("Full Name must not be empty"),
    usr_nm: Yup.string().required("Username must not be empty"),
    usr_pwd: Yup.string().when('isUpdate', {
        is: false,
        then: schema => schema.required("Password must not be empty")
            .min(8, "Password must be at least 8 characters")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[!@#$%^&*]/, "Password must contain at least one special character"),
        otherwise: schema => schema.notRequired()
    }),
    confirm_pwd: Yup.string().when('isUpdate', {
        is: false,
        then: schema => schema.oneOf([Yup.ref('usr_pwd')], 'Passwords must match')
            .required('Confirm Password must not be empty'),
        otherwise: schema => schema.notRequired()
    }),
    role: Yup.string().required("Role must not be empty"),
});
