import {ProjectParams} from "@/app/lib/types/project";
import {useQuery} from "@tanstack/react-query";
import {projectService} from "@/service/project.service";


const useFetchProject = (requestParams: ProjectParams) => {
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