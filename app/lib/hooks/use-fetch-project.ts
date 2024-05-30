import {ProjectManagements, ProjectParams} from "@/app/lib/types/project";
import {useInfiniteQuery} from "@tanstack/react-query";
import {projectService} from "@/service/project.service";
import {useSearchParams} from "next/navigation";


const useFetchProjects = () => {
    const params = useSearchParams();
    const pageSize = params.get("page_size") || 10;
    let requestParams = {
        page_size: +pageSize > 100 ? 100 : pageSize,
        page_number: params.get("page_number") || 0,
        search_value: params.get("search_value") || "",
        sort_columns: params.get("sort_columns") || "",
    }
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
        queryKey: ['projects', requestParams],
        queryFn: ({ pageParam = 0 }) => projectService.getProjects({ ...requestParams, page_number: pageParam }),
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