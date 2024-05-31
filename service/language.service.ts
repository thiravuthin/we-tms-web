import {Language, LanguageRequest} from "@/app/lib/types/LanguageRequest";
import {http} from "@/utils/https";

const ServiceId = {
    LANGUAGE: '/api/ca/v1/settings/languages',
}

const createLanguages = async (payload: LanguageRequest) => {
    const result = await http.post(ServiceId.LANGUAGE, payload);
    return result?.data;
}

const getLanguages = async (pageNumber: number | undefined, pageSize: number | undefined) => {
    const result = await http.get(ServiceId.LANGUAGE, {
        params:{
            page_number: pageNumber,
            page_size: pageSize,

        }
    })
    return result.data?.data
}

const updateLanguages = async (id: number, payload: LanguageRequest) => {
    const result = await http.put(ServiceId.LANGUAGE + `/${id}`, payload);
    return result?.data;

}

const deleteLanguage = async (lang_cd: string[]) => {
    const result = await http.patch(ServiceId.LANGUAGE + `/${[lang_cd]}` + '/disable', {data: {lang_cd: lang_cd}});
    return result?.data;
}

export const languagesService = {
    createLanguages,
    getLanguages,
    updateLanguages,
    deleteLanguage
}