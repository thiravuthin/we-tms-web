import * as Yup from "yup";

export const createLanguageSchema = Yup.object()
        .shape({
            name: Yup.string().required("Name must not be empty."),
            lang_cd: Yup.string().required("Abbreviation must not be empty."),
    })