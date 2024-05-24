import {LanguageRequest} from "@/app/lib/types/LanguageRequest";
import {http} from "@/utils/https";

const ServiceId = {
    LANGUAGE: '/api/ca/v1/settings',
}

const createLanguages = async (payload: LanguageRequest) => {
    const result = await http.post(ServiceId.LANGUAGE+ "/languages", payload);
    return result?.data;
}

export const languagesService = {
    createLanguages
}