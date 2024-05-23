'use client'
import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import {SettingNavIcon} from "@/app/components/icons/SettingNavIcon";
import {SettingNavEnum} from "@/utils/enums";
import CustomTooltip from "@/app/components/shared/CustomTooltip";
import ProfileIcon from "@/app/components/icons/ProfileIcon";
import {useSettingStore} from "@/app/lib/store";
import cn from "clsx";
import UserContainer from "@/app/components/ui/settings/users/UserContainer";
import LanguagesContainer from "@/app/components/ui/settings/languages/LanguagesContainer";
import AccountContainer from "@/app/components/ui/settings/my_account/AccountContainer";
import IconScreenZoomOut from "@/app/components/icons/IconScreenZoomOut";
import IconScreenZoomIn from "@/app/components/icons/IconScreenZoomIn";
import IconClosePopup from "@/app/components/icons/IconClosePopup";

const SettingNav = [
    {
        id: 1,
        name: 'Account Settings',
        navs: [
            {
                id: 1,
                name: SettingNavEnum.MyAccount,
                icon: SettingNavIcon.MyAccountNavIcon
            },
        ]
    },
    {
        id: 2,
        name: 'MANAGEMENT',
        navs: [
            {
                id: 1,
                name: SettingNavEnum.User,
                icon: SettingNavIcon.UsersIcon
            },
            {
                id: 2,
                name: SettingNavEnum.Language,
                icon: SettingNavIcon.LanguagesIcon
            },
        ]
    },
]

export const SettingContainerModal = ({accountData, show, handleClose}: {
    handleClose: () => void
    accountData: any,
    show: boolean,
}) => {

    let activeNav = useSettingStore();

    const [isFullscreen, setIsFullscreen] = useState<any>(false);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <Modal
            dialogClassName={`${isFullscreen ? 'fullscreen' : 'modal-dialog modal-dialog-centered ks-wt-modal-xl-dialog'}`}
            show={show}
            fullscreen={isFullscreen}
        >
            <div className={cn("modal-content ks-wt-modal-content ks-wt-modal-content-wrapper",)}>

                <div className="ks-wt-modal-sidebar-wrapper">
                    <div className="ks-wt-modal-sidebar-container">
                        {/* Header Sidebar */}
                        <div className="ks-wt-modal-sidebar-toggle-block">
                            {/* Profile Avatar*/}
                            <ProfileIcon />

                            {/* Username and UserId*/}
                            <div className={'d-flex flex-column'}>
                                <div><label className={'font-monospace'}>Username</label></div>
                                <div><label className={'font-monospace'}>UserId name</label></div>
                            </div>
                        </div>

                        {/* Content of sidebar */}
                        {SettingNav.map((item) => (
                            <div className="ks-wt-modal-sidebar-menu-container"
                                 key={item.id}>
                                <label>{item.name}</label>
                                <div className="ks-wt-modal-sidebar-menu-block ks_d_flex ks_flex_col">
                                    <div className='ks_d_flex ks_flex_col ks_pd_10 ks_gap_1rem'>
                                        {item.navs.map((nav) => (
                                            <div
                                                className={
                                                    cn("ks-wt-modal-sidebar-menu-item",
                                                        {"ks-wt-active": activeNav.isActive === nav.name})
                                                }
                                                key={nav.id}
                                                onClick={() => activeNav.setIsActive(nav.name)}
                                            >
                                                {nav.icon()}
                                                <label>{nav.name}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                    {/* Handle button close and fullScreen */}
                    <div className="d-flex flex-row mb-2 align-items-center ks-wt-modal-wrapper-header-container">
                        <div
                            className="ks-wt-modal-header-container ks_w100 ks_d_inl_flex ks_jt_cont_end ks_alg_itm_ctr">
                            {/* Btn zoomIn and zoomOut */}
                            <div className={'me-3'}>
                                {
                                    !isFullscreen ? (
                                            <CustomTooltip placement={'top'}
                                                           title={'zoomIn'}>
                                                <IconScreenZoomOut handleOpen={toggleFullscreen}/>
                                            </CustomTooltip>

                                        )
                                        :
                                        (
                                            <CustomTooltip placement={'top'}
                                                           title={'zoomOut'}>
                                                <IconScreenZoomIn handleClose={toggleFullscreen}/>
                                            </CustomTooltip>
                                        )
                                }
                            </div>


                            {/* Btn Close popUp*/}
                            <CustomTooltip placement={"top"}
                                           title={"close"}>
                                <IconClosePopup handleClose={handleClose}/>
                            </CustomTooltip>
                        </div>
                    </div>

                {/* Body of sidebar render */}
                {activeNav.isActive === SettingNavEnum.MyAccount && <AccountContainer accountData={accountData}/>}
                {activeNav.isActive === SettingNavEnum.User && <UserContainer/>}
                {activeNav.isActive === SettingNavEnum.Language && <LanguagesContainer/>}

            </div>
        </Modal>
    )
}

