import {create} from "zustand"
import {SettingNavEnum} from "@/utils/enums";
import {User} from "@/app/lib/types/user";
import {ProjectInfo} from "@/app/lib/types/project";
import {Language} from "@/app/lib/types/LanguageRequest";
export const useSettingStore = create<{
    isActive: string,
    setIsActive: (isActive: string) => void

}>(set => ({

    isActive: SettingNavEnum.MyAccount,
    setIsActive: (isActive: string) => set((state): any => ({...state, isActive})),

    // isActive: SettingNavEnum.Language,
    // setIsActive: (isActive: string) => set((state): any => ({...state, isActive})),
    //
    // isActive: SettingNavEnum.User,
    // setIsActive: (isActive: string) => set((state): any => ({...state, isActive})),


}));

export const useForgotUserIDStore = create<{
    titel: any,
    openHeader: boolean,
    openForgotID: boolean,
    openForgotPassword: boolean,
    setOpenForgotPassword: (openForgotPassword: boolean) => void,
    setOpenForgotID: (openForgotID: boolean) => void
    setOpenHeader: (openHeader: boolean) => void
    setTitle: (titel: any) => void

}>(set => ({
    openForgotID: true,
    openForgotPassword: false,
    openHeader: false,
    titel: 'Recover forgotten ID or password',
    setTitle: (titel: any) => set((state): any => ({ ...state, titel })),
    setOpenHeader: (openHeader: boolean) => set((state): any => ({ ...state, openHeader })),
    setOpenForgotID: (openForgotID: boolean) => set((state): any => ({ ...state, openForgotID })),
    setOpenForgotPassword: (openForgotPassword: boolean) => set((state): any => ({ ...state, openForgotPassword })),

}))


export const useLoginStore = create<{
    username: any,
    setUsername: (username: any) => void
}>(set => ({
    username: '',
    setUsername: (username: any) => set((state): any => ({ ...state, username })),
}));


// export const useCreateProjectStore = create<{
//     id: string | undefined,
//     setId: (id: string) => void,
//
//     updateData: any,
//     isOpen: boolean,
//     isUpdate: boolean,
//     setIsOpen: (isOpen: boolean) => void
//     setUpdate: (isUpdate: boolean) => void
//     setUpdateData: (updateData: any) => void
// }>(set => ({
//     id: undefined,
//     setId: (id: string) => set((state): any => ({...state, id})),
//
//     updateData: {},
//     isOpen: false,
//     isUpdate: false,
//     setIsOpen: (isOpen: boolean) => set((state): any => ({...state, isOpen})),
//     setUpdate: (isUpdate: boolean) => set((state): any => ({...state, isUpdate})),
//     setUpdateData: (updateData: any) => set((state): any => ({...state, updateData})),
// }));

export const useProjectStore = create<{
    id: string | undefined,
    setId: (id: string) => void,
    data: ProjectInfo,
    updateData: any,
    isOpen: boolean,
    isOpenItem: boolean,
    isCreate: boolean,
    isUpdate: boolean,
    setIsCreate: (isCreate: boolean) => void
    setData: (data: any) => void
    setIsOpen: (isOpen: boolean) => void
    setUpdate: (isUpdate: boolean) => void
    setUpdateData: (updateData: any) => void
}>(set => ({
    id: undefined,
    setId: (id: string) => set((state): any => ({...state, id})),
    data: {} as ProjectInfo,
    updateData: {},
    isOpen: false,
    isOpenItem: false,
    isCreate: false,
    isUpdate: false,
    setIsCreate:(isCreate: boolean) => set((state): any => ({...state, isCreate})),
    setData: (data: any) => set((state): any => ({...state, data})),
    setIsOpen: (isOpen : boolean) => set((state): any => ({...state, isOpen})),
    setUpdate: (isUpdate: boolean) => set((state): any => ({...state, isUpdate})),
    setUpdateData: (updateData: any) => set((state): any => ({...state, updateData })),
}));

export const useUserStore = create<{
    data: User
    openUpdate: () => void,
    setData: (data: User | null) => void
    updateData: any,
    isUpdate: boolean,
    setUpdate: (isUpdate: boolean) => void
    setUpdateData: (updateData: any) => void
    setIsUpdate: (isUpdate: boolean) => void
}>(set => ({
    data: {} as User,
    updateData: {},
    isUpdate: false,
    setData: (data: User | null) => set((state): any => ({...state, data})),
    openUpdate: () => set((state): any => ({...state, showUpdate: true})),
    setUpdate: (isUpdate: boolean) => set((state): any => ({...state, isUpdate})),
    setIsUpdate: (isUpdate: boolean) => set((state): any => ({...state, isUpdate})),
    setUpdateData: (updateData: any) => set((state): any => ({...state, updateData})),
}));

export const useLanguageStore = create<{
    data: Language
    openUpdate: () => void,
    setData: (data: Language | null) => void
    updateData: any,
    isUpdate: boolean,
    setUpdate: (isUpdate: boolean) => void
    setUpdateData: (updateData: any) => void
    setIsUpdate: (isUpdate: boolean) => void
}>(set => ({
    data: {} as Language,
    updateData: {},
    isUpdate: false,
    setData: (data: Language | null) => set((state): any => ({...state, data})),
    openUpdate: () => set((state): any => ({...state, showUpdate: true})),
    setUpdate: (isUpdate: boolean) => set((state): any => ({...state, isUpdate})),
    setIsUpdate: (isUpdate: boolean) => set((state): any => ({...state, isUpdate})),
    setUpdateData: (updateData: any) => set((state): any => ({...state, updateData})),
}));



// export const useUpdateProjectStore = create<{
//     id: string | undefined,
//     setId: (id: string) => void,
//
//     updateData: any,
//     isOpen: boolean,
//     isUpdate: boolean,
//     setIsOpen: (isOpen: boolean) => void
//     setUpdate: (isUpdate: boolean) => void
//     setUpdateData: (updateData: any) => void
// }>(set => ({
//     id: undefined,
//     setId: (id: string) => set((state): any => ({...state, id})),
//
//     updateData: {},
//     isOpen: false,
//     isUpdate: false,
//     setIsOpen: (isOpen: boolean) => set((state): any => ({...state, isOpen})),
//     setUpdate: (isUpdate: boolean) => set((state): any => ({...state, isUpdate})),
//     setUpdateData: (updateData: any) => set((state): any => ({...state, updateData})),
// }));

