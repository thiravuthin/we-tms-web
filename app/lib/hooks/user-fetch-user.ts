"use client";
import {useQuery} from "@tanstack/react-query";
import {userService} from "@/service/user.service";
import {UserPaginationParams} from "@/app/lib/types/user";


const useFetchUsers = (requestParams:UserPaginationParams) => {

    const userQuery = useQuery({
        queryKey: ['users', requestParams],
        queryFn: () => userService.getUsers(requestParams)
    })

    return {
        isLoading: userQuery?.isLoading,
        isError: userQuery?.isError,
        userQuery: userQuery?.data,
        users_list: userQuery?.data?.users ?? [],
        pagination: userQuery?.data?.pagination
    }
}

export default useFetchUsers;