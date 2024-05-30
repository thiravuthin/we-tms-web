// import * as Yup from "yup";
//
// export const createLanguageSchema = Yup.object()
//     .shape({
//             name: Yup.string().required("Name must not be empty."),
//             lang_cd: Yup.string().required("Abbreviation must not be empty."),
//     })
import * as yup from 'yup';

export const createLanguageSchema = (isUpdate: boolean) => {
    return yup.object().shape({
        name: yup.string().required('Name must not be empty'),
        lang_cd: isUpdate ? yup.string() : yup.string().required('Abbreviation must not be empty')
    });
};
