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
    name: string;
}