import {Paginations} from "@/app/lib/types/common";

export interface ProjectManagements {
    data: ProjectInfo[];
    pagination: Paginations
}

export interface TranslationData {
    data: Translate[],
    pagination: Paginations
}

export interface Translate {
    categories: Category[];
}

export interface Category {
    cate_id: string;
    name: string;
}

export interface addGroupRequestBody {
    nm: string;
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
    chng_by: {
        full_name: string;
        username: string;
        role: string;
    }
}
export interface ProjectRequest{
    name: string;
}