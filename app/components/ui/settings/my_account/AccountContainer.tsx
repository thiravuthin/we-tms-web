"use client";
import {ProfileAccount} from '@/app/lib/types/profile';
import React, {useRef, useState} from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useForm} from "react-hook-form";
import ProfileEditIcon from "@/app/components/icons/ProfileEditIcon";
import EditIcon from "@/app/components/icons/EditIcon";
import {profileService} from "@/service/profile.service";
import toast from "react-hot-toast";
import {myAccountSchema} from "@/app/validators/profile.schema";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PasswordComponent from "@/app/components/layout/PasswordComponent";

const AccountContainer = ({accountData}: { accountData: ProfileAccount }) => {

    const queryClient = useQueryClient();
    const [previewImage, setPreviewImage] = useState<string | null>(accountData?.usr_prof_img);
    const [fileImage, setFileImage] = useState<File | null>(null);
    const [isEditAccount, setIsEditAccount] = useState(false);
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const handleClickUploadImage = () => {
        hiddenFileInput?.current?.click();
    };
    const handleUploadImageChange = (e: any) => {
        const file = e.target.files[0];
        setFileImage(file);
        setPreviewImage(URL.createObjectURL(e.target.files!![0]));
    };
    const handleDeleteImage = () => {
        setPreviewImage(null);
        setFileImage(null);
    };

    type requestType = Yup.InferType<typeof myAccountSchema>;
    const {
        resetField,
        setFocus,
        watch,
        trigger,
        getValues,
        setValue,
        setError,
        getFieldState,
        control,
        register,
        handleSubmit,
        formState: {errors, isValid, isDirty, isValidating}
    } = useForm<requestType>({
        resolver: yupResolver(myAccountSchema),
        defaultValues: {
            fullname: accountData?.full_nm || '',
        }
    });

    const updateProfileMutation = useMutation({
        mutationFn: (data: any) => profileService.updateUserProfile(data),
        onMutate: () => {
            toast.loading("Updating Profile...");
            toast.dismiss()
        },
        onSuccess: () => {
            toast.success('Update Profile successfully');
            queryClient.invalidateQueries({queryKey: ['profile']});
            setIsEditAccount(false);
        },
        onError: (error: any) => {
            toast.error(error?.message || 'Update Profile failed');
        },
    });

    const onSubmit = async (data: any) => {
        let profileImage = null;
        if (fileImage != null) {
            try {
                const fileResponse = await profileService.uploadImage(fileImage);
                profileImage = fileResponse?.data?.data?.image_url;
            } catch (error) {
                toast.error("Fail to upload profile image");
                return;
            }
        }
        const requestBody = {
            full_nm: data?.fullname,
            usr_prof_img: profileImage
        };

        updateProfileMutation.mutate(requestBody);
    };

    return (
        <div className="ks-wt-modal-wrapper ks_d_flex ks_flex_col ks_flex_row_fluid">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-4 ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr">
                    <h5>Profile</h5>

                    <div className="ks-wt-modal-toolbar-action-container">
                        {!isEditAccount && (
                            <button
                                className="ks_btn ks_btn_icon_pm"
                                type='button'
                                onClick={() => setIsEditAccount(true)}
                            >
                                <label>Edit</label>
                            </button>
                        )}
                        {isEditAccount && (
                            <>
                                <button
                                    className="ks_btn ks_btn_icon_pm"
                                    type='button'
                                    onClick={() => setIsEditAccount(false)}
                                >
                                    <label>Cancel</label>
                                </button>
                                <button
                                    className="ks_btn ks_btn_icon_pm"
                                    type='submit'
                                >
                                    {updateProfileMutation.isPending ? "Updating..." : 'Update'}
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Avatar */}
                <div className="p-4">
                    <label>Avatar</label>
                </div>

                {/* Image */}
                <div className="d-flex">
                    <div className="p-4 d-flex flex-row align-items-center">
                        <div
                            className="ks_d_flex ks_jt_cont_ctr ks_alg_itm_ctr cursor-pointer"
                            onClick={isEditAccount ? handleClickUploadImage : undefined}
                            style={{position: 'relative'}}
                        >
                            {isEditAccount
                                ? null
                                : (
                                    <div className="">
                                        {/**/}
                                        {previewImage ? (
                                            <img
                                                src={previewImage}
                                                alt="Profile Preview"
                                                height={100}
                                                width={100}
                                                style={{borderRadius: '0.4rem'}}
                                                onChange={handleUploadImageChange}
                                            />
                                        ) : (
                                            <>
                                                {isEditAccount ? (<div>
                                                                 <ProfileEditIcon/>
                                                                 <EditIcon/>
                                                                 </div>
                                                                ) :
                                                                <ProfileEditIcon/>
                                                }
                                                {isEditAccount &&
                                                    <input
                                                        type="file"
                                                        ref={hiddenFileInput}
                                                        accept=".png, .jpg, .jpeg"
                                                        hidden
                                                        onChange={handleUploadImageChange}
                                                    />
                                                }

                                            </>
                                        )}
                                    </div>
                                )
                            }

                            {isEditAccount && previewImage
                                ? (<img
                                        src={previewImage}
                                        alt="Profile Preview"
                                        height={100}
                                        width={100}
                                        style={{borderRadius: '0.4rem'}}
                                        onChange={handleUploadImageChange}
                                    />
                                )
                                : (<>
                                        {isEditAccount &&
                                            <div>
                                                <ProfileEditIcon/>
                                                <EditIcon/>
                                            </div>
                                        }
                                        <input
                                            type="file"
                                            ref={hiddenFileInput}
                                            accept=".png, .jpg, .jpeg"
                                            hidden
                                            onChange={handleUploadImageChange}
                                        />
                                    </>
                                )
                            }
                            {isEditAccount && previewImage && (
                                <button className="btn-delete-image m-lg-4"
                                        type="button"
                                        onClick={handleDeleteImage}>
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>

                </div>

                {/* Basic Information */}
                <div className="p-4">Basic Information</div>

                {/* Full Name */}
                <div className="d-flex flex-column p-4">
                    <span>Full Name</span>
                    {!isEditAccount && (
                        <input
                            className="p-2 form-control d-inline-flex focus-ring focus-ring-light  text-decoration-none border rounded-2"
                            placeholder="John Smith"
                            type="text"
                            maxLength={150}
                            {...register('fullname')}
                            readOnly
                        />
                    )}
                    {isEditAccount && (
                        <>
                            <input
                                className="p-2 form-control focus-ring d-inline-flex focus-ring focus-ring-light text-decoration-none "
                                placeholder="John Smith"
                                type="text"
                                maxLength={150}
                                {...register('fullname')}
                            />
                            {errors.fullname && <p>{errors.fullname.message}</p>}
                        </>
                    )}
                </div>

                {/* Username and Role */}
                <div className={'d-flex flex-row justify-content-evenly'}>
                    <span>Username</span>
                    <span>Role</span>
                </div>
                <div className={'d-flex flex-row justify-content-sm-evenly p-4'}>
                    <input
                        className="p-2 form-control d-inline-flex focus-ring focus-ring-light  text-decoration-none border rounded-2"
                        placeholder="johunsmith"
                        value={accountData.full_nm}
                        readOnly
                    />
                    <input
                        className="p-2 form-control d-inline-flex focus-ring focus-ring-light text-decoration-none border rounded-2"
                        placeholder="System Admin"
                        value={accountData.role}
                        readOnly
                    />

                </div>
            </form>

            {/* Credentials Information */}
            <PasswordComponent/>

            <hr className="text-secondary m-4"/>

            <div className="p-4 ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr">
                <div>
                    <h5>Advanced</h5>
                </div>
                <div className="ks-wt-modal-toolbar-action-container">
                    <button
                        className="ks_btn border"
                        type="button"
                    >
                        <label>Expand</label>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountContainer;
