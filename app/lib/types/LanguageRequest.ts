import Pagination from "@/app/components/shared/Pagination";

export interface LanguageRequest {
    lang_cd: string
    name: string
}

export interface LanguageParams{
    page_number?: number;
    page_size?: number;
    sort_columns?: string;
    search_value?: string;
}

export interface Language {
    language: LanguageData[];
    // @ts-ignore
    data: Pagination
}

export interface LanguageData {
    lang_cd: string
    name: string
    regi_dtm: string
    sts: string
}
