import {useQuery} from "@tanstack/react-query";
import {projectService} from "@/service/project.service";
import {useSearchParams} from "next/navigation";


const useFetchProject = () => {
    const params = useSearchParams();
    const pageSize = params.get("page_size") || 10;
    let requestParams = {
        page_size: +pageSize > 100 ? 100 : pageSize,
        page_number: params.get("page_number") || 0,
        search_value: params.get("search_value") || "",
        sort_columns: params.get("sort_columns") || "",
    }
    const projectQuery = useQuery({
        queryKey: ['projects', requestParams],
        queryFn: () => projectService.getProjects(requestParams)
    })

    return {
        data: projectQuery?.data?.data ?? [],
        pagination: projectQuery?.data?.pagination
    };
}

export default useFetchProject