'use client'
import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {signOut} from "next-auth/react";
import SettingContainer from "@/app/components/ui/settings/SettingContainer";
import LogoutIcon from "@/app/components/icons/LogoutIcon";
import SettingIcon from "@/app/components/icons/SettingIcon";
import ProfileIcon from "@/app/components/icons/ProfileIcon";


function DropdownProfile({show}: { show?: boolean }) {

    const [showSetting, setShowSetting] = useState(false)

    const handleLogout = () => {
        if (confirm("Do you really want to Logout?")) {
            signOut();
        }
    }
    return (
        <>
            <Dropdown className={''}>
                <DropdownTrigger>
                    <button type={"button"} className={'unstyled-button'}>
                        <ProfileIcon/>
                    </button>
                </DropdownTrigger>
                <DropdownMenu className="ks_wth_280 bg-white rounded "
                              aria-label="Static Actions"
                >
                    {/* My Account*/}
                    <DropdownItem className={'dropdown-item border rounded'}>
                        <label className={'text- m-2'}> My account</label>
                    </DropdownItem>

                    {/* Setting Icon */}
                    <DropdownItem
                        key="setting"
                        onClick={() => setShowSetting(!showSetting)}
                        className={'dropdown-item border rounded'}
                    >
                            <SettingIcon/>
                            <label className="ks_lbl ks_fw_md m-2">Setting</label>
                    </DropdownItem>

                    {/* Logout Icon */}
                    <DropdownItem
                        key="logout"
                        onClick={handleLogout}
                        className={'dropdown-item border rounded'}
                    >
                            <LogoutIcon/>
                            <label className="ks_lbl ks_fw_md m-2">Log Out</label>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {
                showSetting && <SettingContainer
                                show={showSetting}
                                handleClose={() => setShowSetting(false)}/>
            }
        </>
    );
}

export default DropdownProfile;