import * as Yup from "yup";


export const createProjectSchema =
    Yup.object()
        .shape({
            name: Yup.string().required("Name must not be empty."),
        })