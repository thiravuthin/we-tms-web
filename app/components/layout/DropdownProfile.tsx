'use client'
import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {signOut} from "next-auth/react";
import LogoutIcon from "@/app/components/icons/LogoutIcon";
import SettingIcon from "@/app/components/icons/SettingIcon";
import ProfileIcon from "@/app/components/icons/ProfileIcon";
import useFetchProfile from "@/app/lib/hooks/useFetch_profile_account";
import SettingContainerModal from "@/app/components/ui/settings/SettingContainerModal";
import PopupConfirm from "@/app/components/shared/PopupConfirm";
import {popUpConfirmType} from "@/utils/enums";


function DropdownProfile({show,}: { show?: boolean }) {

    const {profileQuery, isError, isLoading} = useFetchProfile();
    const profileImageUrl = profileQuery.data?.usr_prof_img;
    const [showSetting, setShowSetting] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const handleCancel = () => {
        setShowConfirm(false);
    }

    const handleConfirm = () => {
        setShowConfirm(true);
    }
    return (
        <>
            <Dropdown className={''}>
                <DropdownTrigger>
                    <button type={"button"} className={'unstyled-button'}>
                        <ProfileIcon imageUrl={profileImageUrl} />
                    </button>
                </DropdownTrigger>
                <DropdownMenu className="ks_wth_280 bg-white rounded "
                              aria-label="Static Actions"
                >
                    {/* My Account*/}
                    <DropdownItem className={'dropdown-item border rounded'}>
                        <label className="m-2 text-secondary"> My account</label>
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
                        onClick={handleConfirm}
                        className={'dropdown-item border rounded'}
                    >
                        <LogoutIcon/>
                        <label className="ks_lbl ks_fw_md m-2">Log Out</label>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {/* Setting Container */}
            {showSetting && <SettingContainerModal
                    accountData={profileQuery.data}
                    show={showSetting}
                    handleClose={() => setShowSetting(false)}/>
            }

            {/* Logout Popup */}
            {showConfirm && <PopupConfirm
                    show={showConfirm}
                    title="Confirm"
                    message="Do you really want to log out from the system?"
                    confirms={handleConfirm}
                    cancel={handleCancel}
                    confirmType={popUpConfirmType.LOGOUT}
                    />
            }
        </>
    );
}

export default DropdownProfile;