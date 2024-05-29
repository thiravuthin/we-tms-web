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