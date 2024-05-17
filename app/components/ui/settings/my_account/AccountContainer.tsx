"use client";
import {ProfileAccount} from '@/app/lib/types/profile';
import React from 'react'
import {useQueryClient} from '@tanstack/react-query';
import CustomTooltip from '@/app/components/shared/CustomTooltip';
import Image from "next/image";
import {avatar} from "@nextui-org/theme";
import {text} from "node:stream/consumers";

const AccountContainer = ({accountData}: { accountData?: ProfileAccount }) => {

    const queryClient = useQueryClient();
    console.log()

    return (
        <div className="ks-wt-modal-wrapper ks_d_flex ks_flex_col ks_flex_row_fluid">
            <form>
                <div className="p-4 ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr">
                    <h5>Profile</h5>

                    <div className="ks-wt-modal-toolbar-action-container">
                        <button
                            className="ks_btn ks_btn_icon_pm"
                            type='submit'
                        >
                            <label> Edit</label>
                        </button>
                    </div>
                </div>

                {/* Avatar*/}
                <div className={'p-4'}>
                    <Image src={''} alt={'avatar'}/>
                </div>

                {/* Basic Information*/}
                <div className={'p-4'}> Basic Information</div>

                {/*Full Name*/}
                <div className={'d-flex flex-column p-4'}>
                    <span>Full Name</span>
                    <input
                        className={'p-2 form-control'}
                        placeholder={'John Smith '}
                        type={'text'}
                        maxLength={150}

                    />
                </div>

                {/* Username and Role */}
                <div className={'d-flex flex-row justify-content-evenly'}>
                    <span>Username</span>
                    <span>Role</span>
                </div>

                <div className={'d-flex flex-row justify-content-sm-evenly p-4'}>
                    <input
                        className={'p-2 form-control'}
                        placeholder={'johunsmith'}/>
                    <input
                        className={'p-2 form-control'}
                        placeholder={'System Admin'}
                    />
                </div>
            </form>

            {/* Credentials Information*/}
            <div className={'p-4 ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr'}>
                <div>
                    <h5 className={''}>Credentials Information</h5>
                </div>
                <div className="ks-wt-modal-toolbar-action-container">
                    <button
                        className="ks_btn ks_btn_icon_pm"
                        type='submit'
                    >
                        <label> Edit</label>
                    </button>
                </div>
            </div>

            {/* */}
            <div className={'d-flex flex-row justify-content-evenly'}>
                <div><span>New Password</span></div>
                <div><span>Confirm Password</span></div>
            </div>

            <div className={'d-flex justify-content-evenly ks_alg_itm_ctr p-4'}>
                <div>
                    <input
                        className={'p-2 form-control'}
                        type={"password"}/>
                </div>
                <div>
                    <input
                        className={'p-2 form-control'}
                        type={"password"}
                    />
                </div>
            </div>

            {/* line*/}
            <hr className={'text-secondary m-4'}/>

            {/* */}
            <div className={'p-4 ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr'}>
                <div>
                    <h5 className={''}>Advanced</h5>
                </div>
                <div className="ks-wt-modal-toolbar-action-container">
                    <button
                        className="ks_btn border"
                        type='button'
                    >
                        <label> Expand</label>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AccountContainer