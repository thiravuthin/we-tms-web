"use client";

import React, {useState} from 'react';
import ProfileIcon from "@/app/components/icons/ProfileIcon";
import NotificationIcon from "@/app/components/icons/NotificationIcon";
import SettingContainerModal from "@/app/components/ui/settings/SettingContainerModal";
import DropdownProfile from "@/app/components/layout/DropdownProfile";

const Navbar = () => {

    const [showDropdownProfile, setShowDropdownProfile] = useState(false);

    return (
        <>
            <div id="ks_wt_app_default"
                 className="ks_d_flex justify-content-end ks_brd_btm ks_pd_20">

                <div
                    id="ks_wt_app_header_action_icon"
                    className="d-flex align-items-center"
                >
                    <div
                        id="ks_wt_app_header_username_container"
                        className="d-flex"
                    >
                        <div className="ks_mr_12">
                            <NotificationIcon/>
                        </div>
                        {/* Notification*/}

                        {/* Profile*/}
                        <DropdownProfile/>

                    </div>
                </div>
            </div>
        </>
    );
};


export default Navbar;