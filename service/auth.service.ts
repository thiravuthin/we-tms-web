import { AuthRequest } from "@/app/lib/types/auth";
import { http } from "@/utils/https";



const ServiceId = {
    LOGIN: '/api/ca/v1/auth/login',
}

const login = (data:AuthRequest) => {
    console.log('data', data)
    return http.post(ServiceId.LOGIN, data)
}


export const authService = {
    login,
}

export default authService;