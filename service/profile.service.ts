import { http } from "@/utils/https";
import {ProfileAccount} from "@/app/lib/types/profile";

const ServiceId = {
    PROFILE: '/api/ca/v1/settings/profile',

}

async function getUserProfile(): Promise<ProfileAccount> {
    const res = await http.get(ServiceId.PROFILE);
    return res?.data?.data;
}

export const profileService = {
    getUserProfile,
}