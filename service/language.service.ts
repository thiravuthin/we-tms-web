import {LanguageRequest} from "@/app/lib/types/LanguageRequest";
import {http} from "@/utils/https";

const ServiceId = {
    LANGUAGE: '/api/ca/v1/settings',
}

const createLanguages = async (payload: LanguageRequest) => {
    const result = await http.post(ServiceId.LANGUAGE+ "/languages", payload);
    return result?.data;
}

const getLanguages = async (params?: any) => {
    const result = await http.get(ServiceId.LANGUAGE + "/languages", {
        params:{
            page_number: params?.page_number,
            page_size: params?.page_size,
            sort_columns: params?.sort_columns,
            search_value: params?.search_value,
        }
    })
    return result.data?.data
}


export const languagesService = {
    createLanguages,
    getLanguages
}