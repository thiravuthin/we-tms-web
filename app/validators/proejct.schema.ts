import * as Yup from "yup";


export const createProjectSchema =
    Yup.object()
        .shape({
            name: Yup.string().required("Project name is required"),
        })