import { http } from "@/utils/https";

const ServiceId = {
    USER: '/api/bo/v1/settings/users',
}

async function createUser (requestBody: any) {
    return http.post(ServiceId.USER, requestBody).catch(error => error);
}
const getUsers = async (pageNumber: number, pageSize: number)  => {
    try {
        const result = await http.get(ServiceId.USER, {
            params: {
                page_number: pageNumber,
                page_size: pageSize
            }
        });
        return result?.data;
    } catch (err) {
        return err;
    }
}
async function updateUser(id: number,requestBody: any) {
    return http.put(ServiceId.USER + `/${id}`,requestBody).catch(error => error);
}
async function deleteUser(id: number[]) {
    return http.patch(ServiceId.USER + `/${id}` + `/disable`, {data: {product_ids: id }}).catch(error => error);
}

export const userService = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}