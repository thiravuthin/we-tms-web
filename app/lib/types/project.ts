import {Pagination} from "@/app/lib/types/common";

export interface ProjectManagements {
    data: ProjectInfo[];
    pagination: Pagination
}

export interface ProjectParams{
    search_value?: string;
    sort_columns?: string;
    page_number?: number;
    page_size?: number;
}

export interface ProjectInfo{
    project_id: number;
    project_name: string;
    status: string;
    regi_dtm: string;
    chng_dtm: string;
    regi_by: {
        full_name: string;
        username: string;
        role: string;
    },
    chng_by: string
}
export interface ProjectRequest{
    name: string;
}