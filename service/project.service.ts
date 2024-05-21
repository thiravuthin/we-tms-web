import { http } from "@/utils/https";
import {ProjectManagements} from "@/app/lib/types/project";

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

export const projectService = {
    getProjects,
}