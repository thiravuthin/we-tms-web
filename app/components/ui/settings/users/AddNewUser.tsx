'use client'
import React, {useState} from 'react';
import { RoleType } from "@/utils/enums";
import CustomTooltip from "@/app/components/shared/CustomTooltip";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { userService } from "@/service/user.service";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import {PasswordUtils} from "@/utils/PasswordUtils";
import UserContainer from "@/app/components/ui/settings/users/UserContainer";
import {useUserStore} from "@/app/lib/store";
import ErrorMessage from "@/app/components/shared/ErrorMessage";
import {User} from "@/app/lib/types/user";
import {createUserSchema} from "@/app/validators/user.schema";
const AddNewUser = () => {
    const queryClient = useQueryClient();
    const { isUpdate, updateData, setIsUpdate, setUpdateData } = useUserStore(state => state);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showCfPassword, setShowCfPassword] = useState(false);
    const [activeComponent, setActiveComponent] = useState<'userList' | 'addNewUser'>('addNewUser');
    const [isLoading, setIsLoading] = useState(false);

    const defaultValues: Partial<User> = {
        full_nm: updateData?.full_nm || '',
        role: updateData?.role || '',
        usr_nm: updateData?.usr_nm || '',
        usr_pwd: '',
        confirm_pwd: '',
        isUpdate: isUpdate
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Yup.InferType<typeof createUserSchema>>({
        resolver: yupResolver(createUserSchema),
        defaultValues: defaultValues
    });


    async function onSubmit(data: Yup.InferType<typeof createUserSchema>) {
        setIsLoading(true);
        const requestBody = {
            usr_nm: data.usr_nm,
            full_nm: data.full_nm,
            role: data.role,
            usr_pwd: data.usr_pwd ? PasswordUtils.encrypt(data.usr_pwd) : undefined,
        };

        try {
            if (isUpdate) {
                const response = await userService.updateUser(updateData?.id, requestBody);
                if (response?.status === 200) {
                    toast.success("Updated User Successfully");
                    queryClient.invalidateQueries({ queryKey: ['users'] });
                    setUpdateData(null);
                    setActiveComponent('userList');
                } else {
                    toast.error(response?.message);
                }
                setIsLoading(false);
                return;
            }

            const response = await userService.createUser(requestBody);
            if (response?.status === 200) {
                toast.success("Created User Successfully");
                queryClient.invalidateQueries({ queryKey: ['users'] });
                reset();
                setActiveComponent('userList');
            } else {
                toast.error(response?.message);
            }
            setIsLoading(false);
        } catch (error) {
            toast.error("Failed to create user");
            setIsLoading(false);
        }
    }

    function handleBackToUser() {
        setActiveComponent('userList');
    }

    return (
        <>
            {
                activeComponent === 'addNewUser' ? (
                    <div className="ks-wt-modal-wrapper ks_d_flex ks_flex_col ks_flex_row_fluid">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="ks-wt-modal-toolbar-user-container ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr">
                                <label><span className="cursor-pointer" onClick={handleBackToUser}>User</span>  {">"} <span
                                    className="ks_fw_bd">{isUpdate ? "Edit User" : "Create User"}</span></label>
                                <div className="ks-wt-modal-toolbar-action-user-container">
                                    <button className="ks_btn ks_btn_icon_pm" type="submit" disabled={isLoading}>
                                        {isLoading ? (isUpdate ? "Editing..." : "Saving...") : (isUpdate ? "Edit" : "Save")}
                                    </button>
                                </div>
                            </div>
                            <div className="ks-wt-modal-sub-toolbar-container ks_d_flex ks_flex_col ks_scrollable">
                            <div className="ks-wt-modal-body ks_d_flex ks_flex_col">
                                    <div className="ks-wt-modal-sub-toolbar-container-row">
                                        <div className="ks_row">
                                            <div className="col-12 mb-3">
                                                <label className="mb-3">Profile</label>
                                                <div
                                                    className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                                                    <label className="fw-bold">Full Name</label>
                                                    <div className="ks-wt-form-input-container">
                                                        <input
                                                            type="text"
                                                            className={`ks_form_input ks_form_input_clear ${errors?.full_nm ? 'border-danger' : ''}`}
                                                            placeholder="first and lastname"
                                                            maxLength={150}
                                                            {...register('full_nm')}
                                                        />
                                                        {errors?.full_nm?.message &&
                                                            <ErrorMessage message={errors.full_nm?.message.toString()}/>
                                                        }
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-6 mb-3">
                                                <div
                                                    className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                                                    <label>Username</label>
                                                    <div className="ks-wt-form-input-container">
                                                        <input
                                                            type="text"
                                                            className={`ks_form_input ks_form_input_clear ${errors?.usr_nm ? 'border-danger' : ''}`}
                                                            placeholder="enter"
                                                            maxLength={150}
                                                            {...register('usr_nm')}
                                                            {...(isUpdate ? { disabled: true } : {})} // Disable input field if it's an update
                                                        />
                                                        {errors?.usr_nm?.message &&
                                                            <ErrorMessage message={errors.usr_nm?.message.toString()}/>
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div
                                                    className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                                                    <div className="ks-wt-table-header-title-block">
                                                        <label>Role</label>
                                                    </div>
                                                    <div className="ks_row">
                                                        <div className="col-12">
                                                            <div className="ks-wt-form-input-container">
                                                                <select
                                                                    className={`ks_form_select ${errors?.role ? 'border-danger' : ''}`}
                                                                    {...register('role')}
                                                                >
                                                                    <option value="">select</option>
                                                                    <option value="ADMIN">{RoleType.ADMIN}</option>
                                                                    <option value="DEV">{RoleType.DEV}</option>
                                                                    <option value="PO">{RoleType.PO}</option>
                                                                </select>
                                                                {errors?.role?.message &&
                                                                    <ErrorMessage
                                                                        message={errors.role?.message.toString()}/>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <label className="mb-3">Credentials Information</label>
                                                <div
                                                    className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                                                    <div className="ks-wt-table-header-title-block">
                                                        <label>New Password</label>
                                                        <CustomTooltip
                                                            placement="top"
                                                            title={`Password Requirements:
                                                            - Minimum length: 8 characters
                                                            - Include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)`}
                                                        >
                                                            <svg viewBox="0 0 22 22">
                                                                <path
                                                                    d="M5.71082 19.7338C3.82556 19.7338 2.84802 18.765 2.84802 16.8972V6.27515C2.84802 4.40735 3.82556 3.43854 5.71082 3.43854H16.2805C18.1657 3.43854 19.1432 4.40735 19.1432 6.27515V16.8972C19.1432 18.7562 18.1657 19.7338 16.2805 19.7338H5.71082ZM10.9651 8.58807C11.6546 8.58807 12.2045 8.02948 12.2045 7.33997C12.2045 6.633 11.6546 6.08313 10.9651 6.08313C10.2756 6.08313 9.71698 6.633 9.71698 7.33997C9.71698 8.02948 10.2756 8.58807 10.9651 8.58807ZM9.4115 16.6004H13.0947C13.5049 16.6004 13.8279 16.3036 13.8279 15.8847C13.8279 15.5007 13.5049 15.1865 13.0947 15.1865H12.091V10.901C12.091 10.3511 11.8117 9.99329 11.2968 9.99329H9.57733C9.16711 9.99329 8.85291 10.3075 8.85291 10.6915C8.85291 11.1105 9.16711 11.4072 9.57733 11.4072H10.4938V15.1865H9.4115C9.00128 15.1865 8.68707 15.5007 8.68707 15.8847C8.68707 16.3036 9.00128 16.6004 9.4115 16.6004Z"
                                                                />
                                                            </svg>
                                                        </CustomTooltip>
                                                    </div>
                                                    <div className="ks-wt-form-input-container">
                                                        <div className="ks-wt-form-input-container">
                                                            <input
                                                                type={showNewPassword ? "text" : "password"}
                                                                className={`ks_form_input ks_form_input_clear ${errors?.usr_pwd ? 'border-danger' : ''}`}
                                                                placeholder={`${isUpdate ? "●●●●●●●●●●●●●" : "example1234"}`}
                                                                maxLength={150}
                                                                {...register("usr_pwd")}
                                                                {...(isUpdate ? { disabled: true } : {})} // Disable input field if it's an update
                                                            />
                                                            <div className="ks-wt-form-input-svg-container">
                                                                {
                                                                    showNewPassword ?
                                                                        <svg className="ks-wt-eye-hide-svg"
                                                                             viewBox="0 0 16 16"
                                                                             onClick={() => setShowNewPassword(!showNewPassword)}>
                                                                            <path
                                                                                d="M8 12.8262C3.26562 12.8262 0.0078125 8.96484 0.0078125 7.78125C0.0078125 6.5918 3.27148 2.73047 8 2.73047C12.7871 2.73047 15.9863 6.5918 15.9863 7.78125C15.9863 8.96484 12.793 12.8262 8 12.8262ZM8 10.9395C9.75195 10.9395 11.1758 9.49805 11.1758 7.78125C11.1758 6.01758 9.75195 4.62305 8 4.62305C6.23633 4.62305 4.82422 6.01758 4.82422 7.78125C4.82422 9.49805 6.23633 10.9395 8 10.9395ZM8 8.98242C7.33203 8.98242 6.78711 8.4375 6.78711 7.78125C6.78711 7.11914 7.33203 6.57422 8 6.57422C8.66211 6.57422 9.21289 7.11914 9.21289 7.78125C9.21289 8.4375 8.66211 8.98242 8 8.98242Z"/>
                                                                        </svg>
                                                                        : <svg
                                                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                                                            className="ks-wt-eye-hide-svg"
                                                                            viewBox="0 0 16 16">
                                                                            <path
                                                                                d="M8 12.8262C7.24609 12.8262 6.53516 12.7344 5.86719 12.5508C5.19922 12.3672 4.58203 12.127 4.01562 11.8301C3.44922 11.5293 2.93945 11.1992 2.48633 10.8398C2.03711 10.4805 1.6543 10.1191 1.33789 9.75586C1.02148 9.39258 0.779297 9.05859 0.611328 8.75391C0.447266 8.44531 0.365234 8.19531 0.365234 8.00391C0.365234 7.78516 0.478516 7.48828 0.705078 7.11328C0.931641 6.73438 1.25781 6.32812 1.68359 5.89453C2.10938 5.46094 2.62305 5.05078 3.22461 4.66406L4.12695 5.56641C3.63477 5.86719 3.21094 6.18359 2.85547 6.51562C2.5 6.84766 2.22656 7.14844 2.03516 7.41797C1.84375 7.6875 1.74805 7.88281 1.74805 8.00391C1.74805 8.13281 1.82031 8.3125 1.96484 8.54297C2.10938 8.76953 2.31641 9.02148 2.58594 9.29883C2.85938 9.57227 3.18359 9.84961 3.55859 10.1309C3.9375 10.4082 4.35938 10.6641 4.82422 10.8984C5.28906 11.1289 5.78906 11.3164 6.32422 11.4609C6.85938 11.6055 7.41797 11.6777 8 11.6777C8.32812 11.6777 8.64453 11.6543 8.94922 11.6074C9.25781 11.5566 9.55664 11.4883 9.8457 11.4023L10.8008 12.3633C10.375 12.5039 9.92773 12.6152 9.45898 12.6973C8.99414 12.7832 8.50781 12.8262 8 12.8262ZM8 3.19336C8.76172 3.19336 9.47852 3.28516 10.1504 3.46875C10.8223 3.64844 11.4414 3.88672 12.0078 4.18359C12.5742 4.48047 13.0801 4.81055 13.5254 5.17383C13.9746 5.5332 14.3555 5.89453 14.668 6.25781C14.9805 6.61719 15.2188 6.95117 15.3828 7.25977C15.5469 7.56836 15.6289 7.81641 15.6289 8.00391C15.6289 8.22266 15.5195 8.51758 15.3008 8.88867C15.0859 9.25977 14.7734 9.6582 14.3633 10.084C13.957 10.5098 13.4648 10.9141 12.8867 11.2969L12.002 10.4062C12.4629 10.1133 12.8613 9.80859 13.1973 9.49219C13.5332 9.17578 13.791 8.88477 13.9707 8.61914C14.1543 8.35352 14.2461 8.14844 14.2461 8.00391C14.2461 7.89844 14.1738 7.73633 14.0293 7.51758C13.8848 7.29883 13.6758 7.05078 13.4023 6.77344C13.1328 6.49609 12.8086 6.21484 12.4297 5.92969C12.0547 5.64453 11.6348 5.38281 11.1699 5.14453C10.7051 4.90234 10.2051 4.70703 9.66992 4.55859C9.13867 4.41016 8.58203 4.33594 8 4.33594C7.69531 4.33594 7.40234 4.35742 7.12109 4.40039C6.83984 4.44336 6.56445 4.50195 6.29492 4.57617L5.33984 3.62109C5.75 3.48828 6.17383 3.38477 6.61133 3.31055C7.05273 3.23242 7.51562 3.19336 8 3.19336ZM8 10.9453C7.45312 10.9453 6.95703 10.8105 6.51172 10.541C6.06641 10.2715 5.71289 9.91602 5.45117 9.47461C5.18945 9.0293 5.05859 8.54102 5.05859 8.00977C5.05859 7.80273 5.08008 7.60352 5.12305 7.41211C5.16602 7.2207 5.22852 7.04102 5.31055 6.87305L9.125 10.6875C8.95312 10.7695 8.77344 10.834 8.58594 10.8809C8.39844 10.9238 8.20312 10.9453 8 10.9453ZM10.7305 9.01172L6.98633 5.27344C7.14648 5.20703 7.31055 5.1582 7.47852 5.12695C7.64648 5.0918 7.82031 5.07422 8 5.07422C8.54297 5.07422 9.03711 5.20508 9.48242 5.4668C9.92773 5.72852 10.2812 6.08203 10.543 6.52734C10.8086 6.96875 10.9414 7.46094 10.9414 8.00391C10.9414 8.18359 10.9219 8.35938 10.8828 8.53125C10.8477 8.69922 10.7969 8.85938 10.7305 9.01172ZM12.3945 12.9375L2.94922 3.50391C2.86328 3.41797 2.82031 3.3125 2.82031 3.1875C2.82031 3.0625 2.86328 2.95703 2.94922 2.87109C3.03516 2.78516 3.14062 2.74219 3.26562 2.74219C3.39062 2.74219 3.49805 2.78516 3.58789 2.87109L13.0273 12.3047C13.1133 12.3906 13.1562 12.4941 13.1562 12.6152C13.1602 12.7363 13.1172 12.8438 13.0273 12.9375C12.9375 13.0273 12.8301 13.0703 12.7051 13.0664C12.584 13.0664 12.4805 13.0234 12.3945 12.9375Z"/>
                                                                        </svg>
                                                                }
                                                            </div>
                                                        </div>
                                                        {  errors?.usr_pwd?.message &&
                                                            <ErrorMessage message={errors.usr_pwd?.message.toString()}/>
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <label className="mb-3" style={{color: 'white'}}>{"hide"}</label>
                                                <div
                                                    className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                                                    <div className="ks-wt-table-header-title-block">
                                                        <label>Confirm Password</label>
                                                    </div>
                                                    <div className="ks_row">
                                                        <div className="col-12">
                                                            <div className="ks-wt-form-input-container">
                                                                <div className="ks-wt-form-input-container">
                                                                    <input
                                                                        type={showCfPassword ? "text" : "password"}
                                                                        className={`ks_form_input ks_form_input_clear ${errors?.confirm_pwd ? 'border-danger' : ''}`}
                                                                        placeholder={`${isUpdate ? "●●●●●●●●●●●●●" : "enter"}`}
                                                                        maxLength={150}
                                                                        {...register("confirm_pwd")}
                                                                        {...(isUpdate ? { disabled: true } : {})} // Disable input field if it's an update
                                                                    />
                                                                    <div className="ks-wt-form-input-svg-container">
                                                                        {
                                                                            showCfPassword ?
                                                                                <svg className="ks-wt-eye-hide-svg"
                                                                                     viewBox="0 0 16 16"
                                                                                     onClick={() => setShowCfPassword(!showCfPassword)}>
                                                                                    <path
                                                                                        d="M8 12.8262C3.26562 12.8262 0.0078125 8.96484 0.0078125 7.78125C0.0078125 6.5918 3.27148 2.73047 8 2.73047C12.7871 2.73047 15.9863 6.5918 15.9863 7.78125C15.9863 8.96484 12.793 12.8262 8 12.8262ZM8 10.9395C9.75195 10.9395 11.1758 9.49805 11.1758 7.78125C11.1758 6.01758 9.75195 4.62305 8 4.62305C6.23633 4.62305 4.82422 6.01758 4.82422 7.78125C4.82422 9.49805 6.23633 10.9395 8 10.9395ZM8 8.98242C7.33203 8.98242 6.78711 8.4375 6.78711 7.78125C6.78711 7.11914 7.33203 6.57422 8 6.57422C8.66211 6.57422 9.21289 7.11914 9.21289 7.78125C9.21289 8.4375 8.66211 8.98242 8 8.98242Z"/>
                                                                                </svg>
                                                                                : <svg
                                                                                    onClick={() => setShowCfPassword(!showCfPassword)}
                                                                                    className="ks-wt-eye-hide-svg"
                                                                                    viewBox="0 0 16 16">
                                                                                    <path
                                                                                        d="M8 12.8262C7.24609 12.8262 6.53516 12.7344 5.86719 12.5508C5.19922 12.3672 4.58203 12.127 4.01562 11.8301C3.44922 11.5293 2.93945 11.1992 2.48633 10.8398C2.03711 10.4805 1.6543 10.1191 1.33789 9.75586C1.02148 9.39258 0.779297 9.05859 0.611328 8.75391C0.447266 8.44531 0.365234 8.19531 0.365234 8.00391C0.365234 7.78516 0.478516 7.48828 0.705078 7.11328C0.931641 6.73438 1.25781 6.32812 1.68359 5.89453C2.10938 5.46094 2.62305 5.05078 3.22461 4.66406L4.12695 5.56641C3.63477 5.86719 3.21094 6.18359 2.85547 6.51562C2.5 6.84766 2.22656 7.14844 2.03516 7.41797C1.84375 7.6875 1.74805 7.88281 1.74805 8.00391C1.74805 8.13281 1.82031 8.3125 1.96484 8.54297C2.10938 8.76953 2.31641 9.02148 2.58594 9.29883C2.85938 9.57227 3.18359 9.84961 3.55859 10.1309C3.9375 10.4082 4.35938 10.6641 4.82422 10.8984C5.28906 11.1289 5.78906 11.3164 6.32422 11.4609C6.85938 11.6055 7.41797 11.6777 8 11.6777C8.32812 11.6777 8.64453 11.6543 8.94922 11.6074C9.25781 11.5566 9.55664 11.4883 9.8457 11.4023L10.8008 12.3633C10.375 12.5039 9.92773 12.6152 9.45898 12.6973C8.99414 12.7832 8.50781 12.8262 8 12.8262ZM8 3.19336C8.76172 3.19336 9.47852 3.28516 10.1504 3.46875C10.8223 3.64844 11.4414 3.88672 12.0078 4.18359C12.5742 4.48047 13.0801 4.81055 13.5254 5.17383C13.9746 5.5332 14.3555 5.89453 14.668 6.25781C14.9805 6.61719 15.2188 6.95117 15.3828 7.25977C15.5469 7.56836 15.6289 7.81641 15.6289 8.00391C15.6289 8.22266 15.5195 8.51758 15.3008 8.88867C15.0859 9.25977 14.7734 9.6582 14.3633 10.084C13.957 10.5098 13.4648 10.9141 12.8867 11.2969L12.002 10.4062C12.4629 10.1133 12.8613 9.80859 13.1973 9.49219C13.5332 9.17578 13.791 8.88477 13.9707 8.61914C14.1543 8.35352 14.2461 8.14844 14.2461 8.00391C14.2461 7.89844 14.1738 7.73633 14.0293 7.51758C13.8848 7.29883 13.6758 7.05078 13.4023 6.77344C13.1328 6.49609 12.8086 6.21484 12.4297 5.92969C12.0547 5.64453 11.6348 5.38281 11.1699 5.14453C10.7051 4.90234 10.2051 4.70703 9.66992 4.55859C9.13867 4.41016 8.58203 4.33594 8 4.33594C7.69531 4.33594 7.40234 4.35742 7.12109 4.40039C6.83984 4.44336 6.56445 4.50195 6.29492 4.57617L5.33984 3.62109C5.75 3.48828 6.17383 3.38477 6.61133 3.31055C7.05273 3.23242 7.51562 3.19336 8 3.19336ZM8 10.9453C7.45312 10.9453 6.95703 10.8105 6.51172 10.541C6.06641 10.2715 5.71289 9.91602 5.45117 9.47461C5.18945 9.0293 5.05859 8.54102 5.05859 8.00977C5.05859 7.80273 5.08008 7.60352 5.12305 7.41211C5.16602 7.2207 5.22852 7.04102 5.31055 6.87305L9.125 10.6875C8.95312 10.7695 8.77344 10.834 8.58594 10.8809C8.39844 10.9238 8.20312 10.9453 8 10.9453ZM10.7305 9.01172L6.98633 5.27344C7.14648 5.20703 7.31055 5.1582 7.47852 5.12695C7.64648 5.0918 7.82031 5.07422 8 5.07422C8.54297 5.07422 9.03711 5.20508 9.48242 5.4668C9.92773 5.72852 10.2812 6.08203 10.543 6.52734C10.8086 6.96875 10.9414 7.46094 10.9414 8.00391C10.9414 8.18359 10.9219 8.35938 10.8828 8.53125C10.8477 8.69922 10.7969 8.85938 10.7305 9.01172ZM12.3945 12.9375L2.94922 3.50391C2.86328 3.41797 2.82031 3.3125 2.82031 3.1875C2.82031 3.0625 2.86328 2.95703 2.94922 2.87109C3.03516 2.78516 3.14062 2.74219 3.26562 2.74219C3.39062 2.74219 3.49805 2.78516 3.58789 2.87109L13.0273 12.3047C13.1133 12.3906 13.1562 12.4941 13.1562 12.6152C13.1602 12.7363 13.1172 12.8438 13.0273 12.9375C12.9375 13.0273 12.8301 13.0703 12.7051 13.0664C12.584 13.0664 12.4805 13.0234 12.3945 12.9375Z"/>
                                                                                </svg>
                                                                        }
                                                                    </div>
                                                                </div>
                                                                { errors?.confirm_pwd?.message &&
                                                                    <ErrorMessage
                                                                        message={errors.confirm_pwd?.message.toString()}/>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                ) : activeComponent === 'userList' ? (
                    <UserContainer />
                ) : null
            }
        </>
    );
};

export default AddNewUser;
