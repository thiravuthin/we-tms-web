import { http } from "@/utils/https";
import {ProjectManagements, ProjectRequest} from "@/app/lib/types/project";

const ServiceId = {
    PROJECT: '/api/bo/v1/projects',
}

async function getProjects(params?: any): Promise<ProjectManagements> {
    const result = await http.get(ServiceId.PROJECT, {
        params: {
            page_number: params?.page_number,
            page_size: params.page_size,
            sort_columns: params?.sort_columns,
            search_value: params?.search_value,
            sort_by: params?.sort_by,
        }
    });

    return result?.data.data;
}
const createProject = async (params: ProjectRequest) => {
    const result = await http.post(ServiceId.PROJECT, {
        name: params.name
    });
    return result.data;
}
async function updateProject(id: number, requestBody: any) {
    return http.put(ServiceId.PROJECT + `/${id}`,requestBody).catch(error => error);
}
async function deleteProject(id: number) {
    return http.delete(ServiceId.PROJECT + `/${id}`).catch(error => error);
}


export const projectService = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
}