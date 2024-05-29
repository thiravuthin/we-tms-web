import {LanguageParams} from "@/app/lib/types/LanguageRequest";
import {useQuery} from "@tanstack/react-query";
import {languagesService} from "@/service/language.service";

const useFetch_languages = (requestParams:LanguageParams) => {

    const languageQuery = useQuery({
        queryKey: ['languages', requestParams],
        queryFn: ()=> languagesService.getLanguages(requestParams)
    })

    return {
        language_list: languageQuery?.data?.languages ?? [],
        pagination: languageQuery?.data?.pagination
    };
}

export default useFetch_languages