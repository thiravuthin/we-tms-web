"use client";

import React, {useState} from 'react';
import ProfileIcon from "@/app/components/icons/ProfileIcon";
import NotificationIcon from "@/app/components/icons/NotificationIcon";
import SettingContainer from "@/components/ui/settings/SettingContainer";
import DropdownProfile from "@/app/components/layout/DropdownProfile";

const Navbar = () => {

    const [showDropdownProfile, setShowDropdownProfile] = useState(false);

    return (
        <>
            <div id="ks_wt_app_header"
                 className="ks_d_flex justify-content-end">

                <div
                    id="ks_wt_app_header_action_icon"
                    className="d-flex align-items-center"
                >
                    <div
                        id="ks_wt_app_header_username_container"
                        className="d-flex"
                    >
                        {/* Notification*/}
                        <NotificationIcon/>

                        {/* Profile*/}
                        <DropdownProfile/>

                    </div>
                </div>
            </div>
        </>
    );
};


export default Navbar;