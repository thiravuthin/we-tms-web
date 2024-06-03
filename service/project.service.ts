import { http } from "@/utils/https";
import {addGroupRequestBody, ProjectManagements, ProjectRequest} from "@/app/lib/types/project";

const ServiceId = {
    PROJECT: '/api/bo/v1/projects',
    TRANSLATION: '/api/ca/v1/projects'
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

async function getTranslation(projectId: number, params?: any) {
    const result = await http.get(ServiceId.TRANSLATION + `/${projectId}/translations`, {
        params: {
            search_value: params?.search_value,
            group_name: params?.group_name,
            page_number: params?.page_number,
            page_size: params.page_size,
        }
    });
    return result?.data.data;
}

async function createGroup(projectId: number, requestBody: addGroupRequestBody) {
    return http.post(ServiceId.TRANSLATION + `/${projectId}/groups`, requestBody).catch(error => error);
}

async function updateGroup(projectId: number, groupId: string | number, requestBody: addGroupRequestBody) {
    return http.put(ServiceId.TRANSLATION + `/${projectId}/groups/${groupId}`, requestBody).catch(error => error);
}

async function deleteGroup(projectId: number, groupId: number) {
    return http.delete(ServiceId.TRANSLATION + `/${projectId}/groups/${groupId}`).catch(error => error);
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
    deleteProject,
    getTranslation,
    createGroup,
    deleteGroup,
    updateGroup
}