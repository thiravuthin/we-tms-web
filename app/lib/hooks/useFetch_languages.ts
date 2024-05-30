import {LanguageParams} from "@/app/lib/types/LanguageRequest";
import {useQuery} from "@tanstack/react-query";
import {languagesService} from "@/service/language.service";

const useFetch_languages = (requestParams:LanguageParams) => {

    const {data, isLoading, isError,} = useQuery({
        queryKey: ['languages', requestParams],
        queryFn: ()=> languagesService.getLanguages(requestParams.page_number, requestParams.page_size)
    })

    return {
        data,
        isLoading,
        isError,
        language_list: data?.data?.languages ?? [],
        pagination: data?.data?.pagination
    };
}

export default useFetch_languages