export interface Users {
    users:  User[];
    // @ts-ignore
    pagination: Pagination
}

export interface User {
    id: number,
    usr_nm: string,
    usr_pwd: string,
    full_nm: string,
    role: string,
    usr_prof_img: string,
    status: string,
    regi_dtm: string,
    numbering: string;
    isUpdate: boolean;
}

export interface UserPaginationParams{
    page_number?: number;
    page_size?: number;
}

export interface CreateUserRequest {
    usr_nm: string,
    usr_pwd: string,
    full_nm: string,
    role: string
}