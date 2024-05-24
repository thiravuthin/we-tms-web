import {LanguageRequest} from "@/app/lib/types/LanguageRequest";
import {http} from "@/utils/https";

const ServiceId = {
    LANGUAGE: '/api/ca/v1/settings/languages',
}

const createLanguages = async (payload: LanguageRequest) => {
    const result = await http.post(ServiceId.LANGUAGE, payload);
    return result?.data;
}

export const languagesService = {
    createLanguages
}