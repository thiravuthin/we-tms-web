import {create} from "zustand"
import {SettingNavEnum} from "@/utils/enums";
import {ProjectInfo} from "@/app/lib/types/project";
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


export const useCreateProjectStore = create<{
    id: string | undefined,
    setId: (id: string) => void,

    updateData: any,
    isOpen: boolean,
    isUpdate: boolean,
    setIsOpen: (isOpen: boolean) => void
    setUpdate: (isUpdate: boolean) => void
    setUpdateData: (updateData: any) => void
}>(set => ({
    id: undefined,
    setId: (id: string) => set((state): any => ({...state, id})),

    updateData: {},
    isOpen: false,
    isUpdate: false,
    setIsOpen: (isOpen: boolean) => set((state): any => ({...state, isOpen})),
    setUpdate: (isUpdate: boolean) => set((state): any => ({...state, isUpdate})),
    setUpdateData: (updateData: any) => set((state): any => ({...state, updateData})),
}));

export const useProjectItemStore = create<{
    id: string | undefined,
    setId: (id: string) => void,
    data: ProjectInfo
    updateDataItem: any,
    isOpenItem: boolean,
    isUpdateItem: boolean,
    setData: (data: ProjectInfo) => void
    setIsOpenItem: (isOpen: boolean) => void
    setUpdateItem: (isUpdate: boolean) => void
    setUpdateDataItem: (updateData: any) => void
}>(set => ({
    id: undefined,
    setId: (id: string) => set((state): any => ({...state, id})),
    data: {} as ProjectInfo,
    updateDataItem: {},
    isOpenItem: false,
    isUpdateItem: false,
    setData: (data: ProjectInfo| null) => set((state): any => ({...state, data})),
    setIsOpenItem: (isOpenItem: boolean) => set((state): any => ({...state, isOpenItem})),
    setUpdateItem: (isUpdateItem: boolean) => set((state): any => ({...state, isUpdateItem})),
    setUpdateDataItem: (updateDataItem: any) => set((state): any => ({...state, updateDataItem})),
}));

export const useUpdateProjectStore = create<{
    id: string | undefined,
    setId: (id: string) => void,

    updateData: any,
    isOpen: boolean,
    isUpdate: boolean,
    setIsOpen: (isOpen: boolean) => void
    setUpdate: (isUpdate: boolean) => void
    setUpdateData: (updateData: any) => void
}>(set => ({
    id: undefined,
    setId: (id: string) => set((state): any => ({...state, id})),

    updateData: {},
    isOpen: false,
    isUpdate: false,
    setIsOpen: (isOpen: boolean) => set((state): any => ({...state, isOpen})),
    setUpdate: (isUpdate: boolean) => set((state): any => ({...state, isUpdate})),
    setUpdateData: (updateData: any) => set((state): any => ({...state, updateData})),
}));

