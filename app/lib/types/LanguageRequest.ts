import {Paginations} from "@/app/lib/types/common";

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
    data: Paginations
}

export interface LanguageData {
    lang_cd: string
    name: string
    regi_dtm: string
    sts: string,
    numbering: string;
}
