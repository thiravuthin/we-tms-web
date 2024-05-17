"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import avatar from '@/public/avatar.svg'
import { signOut } from 'next-auth/react'
import SettingSvg from "@/app/components/icons/SettingSvg";
import ExitSvg from "@/app/components/icons/ExitSvg";
import SettingContainer from "@/app/components/ui/settings/SettingContainer";
import {ProfileAccount} from "@/app/lib/types/profile";

const DropdownProfile = ({ accountData}: { accountData: ProfileAccount}) => {

    const [showSetting, setShowSetting] = useState(false)

    const handleLogout = () => {
        if (confirm("Do you really want to Logout?")) {
            signOut();
        }
    }

    return (
        <>
            <div className="ks_dropdown_menu dropdown-menu dropdown-menu-end ks_wth_280 ks_mt_5 " >
                <div className="ks-wt-dropdown-dialog ks_pd_0 ks_d_flex ks_flex_col">
                    <div className="ks-wt-user-profile-layout-container ks_d_flex ks_alg_itm_ctr ks_flex_col">
                        <div className="ks-wt-user-profile-container ks_pos_rlt ks_d_flex ks_jt_cont_ctr ks_alg_itm_ctr">
                            <Image
                               style={{borderRadius: '50%'}}
                                src={ avatar}
                                width={85}
                                height={85}
                                alt=""
                            />

                        </div>
                        <label className="ks-wt-user-profile-username-label">
                            {accountData?.name}
                        </label>
                        <label className="ks-wt-user-profile-email-label">
                            {/*{accountData?.email}*/}
                        </label>
                    </div>
                    <div className="ks-wt-line ks_w100" />
                    <div className="ks-wt-dropdown-md-dialog-item" onClick={() => setShowSetting(!showSetting)}>
                        <SettingSvg/>
                        <label>Settings</label>
                    </div>
                    <div className="ks-wt-line ks_w100" />
                    <div className="ks-wt-dropdown-md-dialog-item" onClick={handleLogout}>
                        <ExitSvg/>
                        <label>Log out</label>
                    </div>
                </div>
            </div>
            {showSetting && <SettingContainer accountData={accountData!}
                                              show={showSetting}
                                              handleClose={() => setShowSetting(false)} />}
        </>
    )
}

export default DropdownProfile