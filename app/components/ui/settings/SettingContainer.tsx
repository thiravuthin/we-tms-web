'use client'
import React, {useRef, useState} from "react";
import {Modal} from "react-bootstrap";
import {ProfileAccount} from "@/app/lib/types/profile";
import {SettingNavIcon} from "@/app/components/icons/SettingNavIcon";
import {SettingNavEnum} from "@/utils/enums";
import CustomTooltip from "@/app/components/shared/CustomTooltip";
import ProfileIcon from "@/app/components/icons/ProfileIcon";
import {useSettingStore} from "@/app/lib/store";
import cn from "clsx";
import UserContainer from "@/app/components/ui/settings/users/UserContainer";
import LanguagesContainer from "@/app/components/ui/settings/languages/LanguagesContainer";
import AccountContainer from "@/app/components/ui/settings/my_account/AccountContainer";
import IconZoomOut from "@/app/components/icons/IconZoomOut";

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

const SettingContainer = ({accountData, show, handleClose}: {
    handleClose: () => void
    accountData: any,
    show: boolean,
}) => {

    let activeNav = useSettingStore();
    const [zoomLevel, setZoomLevel] = useState(1);
    const modalRef = useRef<HTMLDivElement>(null);
    const [toggleSettingSidebar, setToggleSettingSidebar] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleToggleSettingSidebar = () => {
        setToggleSettingSidebar(!toggleSettingSidebar);
    };

    const handleZoomIn = () => {
        setZoomLevel(prevZoom => prevZoom + 0.1);
    };

    const handleZoomOut = () => {
        setZoomLevel(prevZoom => (prevZoom > 1 ? prevZoom - 0.1 : 1));
    };

    const handleFullScreen = () => {
        if (modalRef.current) {
            const element = modalRef.current as HTMLDivElement & {
                requestFullscreen?: () => Promise<void>;
                mozRequestFullScreen?: () => Promise<void>;
                webkitRequestFullscreen?: () => Promise<void>;
                msRequestFullscreen?: () => Promise<void>;
            };
            if (!isFullScreen) {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) { /* Firefox */
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                    element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) { /* IE/Edge */
                    element.msRequestFullscreen();
                }
                setIsFullScreen(true);
            } else {
                const doc = document as Document & {
                    mozCancelFullScreen?: () => Promise<void>;
                    webkitExitFullscreen?: () => Promise<void>;
                    msExitFullscreen?: () => Promise<void>;
                };
                if (doc.exitFullscreen) {
                    doc.exitFullscreen();
                } else if (doc.mozCancelFullScreen) { /* Firefox */
                    doc.mozCancelFullScreen();
                } else if (doc.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                    doc.webkitExitFullscreen();
                } else if (doc.msExitFullscreen) { /* IE/Edge */
                    doc.msExitFullscreen();
                }
                setIsFullScreen(false);
            }
        }
    };

    return (
        <Modal dialogClassName="modal-dialog modal-dialog-centered ks-wt-modal-xl-dialog" show={show}>
            {/* TODO: Don't delete this comment << Handle toggleSettingSidebar >> */}
            <div className={cn("modal-content ks-wt-modal-content ks-wt-modal-content-wrapper", {"ks-wt-toggled": toggleSettingSidebar})}>
                {/*<div className={'modal-content ks-wt-modal-content ks-wt-modal-content-wrapper'}>*/}

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

                    {/* Handle button close*/}
                    <div className="d-flex flex-row mb-2 align-items-center ks-wt-modal-wrapper-header-container">
                        <div
                            className="ks-wt-modal-header-container ks_w100 ks_d_inl_flex ks_jt_cont_end ks_alg_itm_ctr">
                            {/*<div className={' '}>*/}
                            {/*    <button*/}
                            {/*        className={'ks-border-none'}*/}
                            {/*        type="button"*/}
                            {/*            onClick={handleFullScreen}*/}
                            {/*        >*/}
                            {/*        /!*<IconZoomOut/>*!/*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            <CustomTooltip placement={"top"}
                                           title={"close"}>
                                <svg data-bs-dismiss="modal"
                                     viewBox="0 0 24 24"
                                     onClick={handleClose}>
                                    <path
                                        d="M4.81916 19.4822C4.42024 19.0926 4.42951 18.4061 4.81916 18.0257L10.5247 12.3109L4.81916 6.6053C4.42951 6.22492 4.42024 5.54768 4.81916 5.13948C5.21809 4.74055 5.89533 4.74983 6.28498 5.13948L11.9905 10.845L17.6961 5.13948C18.095 4.74983 18.7537 4.74983 19.1619 5.14875C19.5701 5.5384 19.5609 6.21565 19.1712 6.6053L13.4656 12.3109L19.1712 18.0257C19.5609 18.4154 19.5609 19.0833 19.1619 19.4822C18.763 19.8905 18.095 19.8812 17.6961 19.4915L11.9905 13.786L6.28498 19.4915C5.89533 19.8812 5.22737 19.8812 4.81916 19.4822Z"/>
                                </svg>
                            </CustomTooltip>
                        </div>
                    </div>

                {/* Body of sidebar render */}
                {activeNav.isActive === SettingNavEnum.MyAccount && <AccountContainer accountData={accountData}/>}
                {activeNav.isActive === SettingNavEnum.User && <UserContainer />}
                {activeNav.isActive === SettingNavEnum.Language && <LanguagesContainer />}

            </div>
        </Modal>
    )
}

export default SettingContainer