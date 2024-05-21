import { http } from "@/utils/https";
import {ProfileAccount} from "@/app/lib/types/profile";

const ServiceId = {
    PROFILE: '/api/ca/v1/settings/profile',
    UPLOAD_IMAGE: '/api/ca/v1/files/upload-image',
    CHANGE_PASSWORD: '/api/ca/v1/settings/profile/change-password'

}

async function getUserProfile(): Promise<ProfileAccount> {
    const res = await http.get(ServiceId.PROFILE);
    return res?.data?.data;
}

function updateUserProfile(reqBody: any) {
    return http.put(ServiceId.PROFILE, reqBody)
}

function uploadImage(image: File) {
    const formData = new FormData();
    formData.append("file_data", image)
    const API = ServiceId.UPLOAD_IMAGE;
    return http.post(API,formData)
}
function changePassword(reqBody: any) {
    return http.patch(ServiceId.CHANGE_PASSWORD,reqBody)
}

export const profileService = {
    getUserProfile,
    updateUserProfile,
    uploadImage,
    changePassword
}