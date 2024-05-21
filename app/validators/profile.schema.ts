import * as Yup from "yup";


export const myAccountSchema = Yup.object().shape({
    fullname: Yup.string().required('Full Name is required'),
    username: Yup.string().notRequired(),
    role: Yup.string().notRequired(),
    status: Yup.string().notRequired(),

})

export const changePasswordSchema = Yup.object().shape({
    current_password: Yup.string().required('Current password is required'),
    new_password: Yup.string()
        .min(8, 'At least minumum 8 characters')
        .matches(/[A-Z]/, 'At least one uppercase character')
        .matches(/[`!@#$%^&*()_+-=\[\]{};':"\\|,.<>?~]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('new_password'), ''], 'Passwords must match')
        .required('Confirm password is required')
})

export const myCompanyInfoSchema = Yup.object().shape({
    taxId: Yup.string().required('Tax ID is required'),
    companyVietnamName: Yup.string().required('Company Name in Vietnamese is required'),
    companyEnglishName: Yup.string().required('Company name in English is required'),
    representativeName: Yup.string().required('Representative name is required'),
    companyAddress: Yup.string().required('Company address is required'),
    email: Yup.string().email("Invalid email").required('Email is required'),
    fax: Yup.string().notRequired(),
    phoneNumber: Yup.string().notRequired(),
    cityCode: Yup.string().required('City code is required'),
    taxOfficeName: Yup.string().required('Please select tax office'),
    taxOfficeCode: Yup.string().required('Tax office code is required'),
    bankName1: Yup.string().notRequired(),
    accountNo1: Yup.string().notRequired(),
    bankName2: Yup.string().notRequired(),
    accountNo2: Yup.string().notRequired(),
    abbreviation_name: Yup.string().notRequired(),
})