import {Paginations} from "@/app/lib/types/common";

export interface Users {
    users:  User[];
    pagination: Paginations;
}

export interface User {
    id: number;
    usr_nm: string;
    usr_pwd: string;
    confirm_pwd: string;
    full_nm: string;
    role: string;
    usr_prof_img: string;
    status: string;
    regi_dtm: string;
    numbering: string;
    isUpdate: boolean; // Add isUpdate here
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