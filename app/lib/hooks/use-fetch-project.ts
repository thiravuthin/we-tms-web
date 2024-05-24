import {ProjectManagements, ProjectParams} from "@/app/lib/types/project";
import {useInfiniteQuery} from "@tanstack/react-query";
import {projectService} from "@/service/project.service";


const useFetchProjects = (requestParam: ProjectParams) => {
    const {
        data,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
        isError,
        error
    } = useInfiniteQuery<ProjectManagements, Error>({
        queryKey: ['projects', requestParam],
        queryFn: ({ pageParam = 0 }) => projectService.getProjects({ ...requestParam, page_number: pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.pagination.current_page < lastPage.pagination.total_pages ? lastPage.pagination.current_page + 1 : undefined,
        getPreviousPageParam: (firstPage) => firstPage.pagination.current_page > 0 ? firstPage.pagination.current_page - 1 : undefined,
    });

    return {
        data,
        isFetchingNextPage,
        isFetchingPreviousPage,
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
        isError,
        error
    };
};

export default useFetchProjects