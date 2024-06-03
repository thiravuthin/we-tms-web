"use client";
import { useQueries } from "@tanstack/react-query";
import {profileService} from "@/service/profile.service";


const useFetchProfile = () => {

    const [profileQuery] = useQueries({
        queries: [
            {
                queryKey: ["profile"],
                queryFn: ()=> profileService.getUserProfile()
            },
        ]
    })

    return {
        profileQuery,
        isLoading: profileQuery?.isLoading,
        isError: profileQuery.isError
    };
}
export default useFetchProfile;