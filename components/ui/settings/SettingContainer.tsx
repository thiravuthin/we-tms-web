'use client'
import React, {useState} from "react";
import cn from "clsx";
import {Modal} from "react-bootstrap";
import CustomTooltip from "@/components/shared/CustomTooltip";
import {SettingNavEnum} from "@/utils/enums";
import {SettingNavIcon} from "@/components/icons/SettingNavIcon";
import {useSettingStore} from "@/lib/store";

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
]

const SettingContainer = ({show, handleClose}: { show?: boolean, handleClose?: () => void }) => {

    const [toggleSettingSidebar, setToggleSettingSidebar] = useState(false);
    const handleToggleSettingSidebar = () => {
        if (!toggleSettingSidebar) {
            setToggleSettingSidebar(true);
        } else {
            setToggleSettingSidebar(false);
        }
    };


    return (
        <Modal
            className={'bg-black'}
            // dialogClassName="modal-dialog modal-dialog-centered ks-wt-modal-xl-dialog "
               >
            <div
                className={cn("modal-content ks-wt-modal-content ks-wt-modal-content-wrapper", {"ks-wt-toggled": toggleSettingSidebar})}>
                <div className="ks-wt-modal-sidebar-wrapper">
                    <div className="ks-wt-modal-sidebar-container">
                        <div className="ks-wt-modal-sidebar-toggle-block">
                            <label>Settings</label>
                            <CustomTooltip placement={"top"}
                                           title={"toggle menu"}>
                                <svg width={16}
                                     height={16}
                                     onClick={handleToggleSettingSidebar}
                                     className="ks_wth_16 ks_hgt_16"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M2.60449 14.4092C1.20166 14.4092 0.452637 13.6729 0.452637 12.2827V4.57031C0.452637 3.18018 1.20166 2.4375 2.60449 2.4375H13.3892C14.792 2.4375 15.541 3.18018 15.541 4.57031V12.2827C15.541 13.6729 14.792 14.4092 13.3892 14.4092H2.60449ZM2.7251 13H5.65771V3.85303H2.7251C2.1665 3.85303 1.86816 4.13232 1.86816 4.71631V12.1304C1.86816 12.7144 2.1665 13 2.7251 13ZM13.2686 3.85303H6.97803V13H13.2686C13.8208 13 14.1255 12.7144 14.1255 12.1304V4.71631C14.1255 4.13232 13.8208 3.85303 13.2686 3.85303ZM4.39453 6.15723H3.1377C2.89014 6.15723 2.68066 5.94775 2.68066 5.71289C2.68066 5.47803 2.89014 5.2749 3.1377 5.2749H4.39453C4.64844 5.2749 4.85156 5.47803 4.85156 5.71289C4.85156 5.94775 4.64844 6.15723 4.39453 6.15723ZM4.39453 7.89648H3.1377C2.89014 7.89648 2.68066 7.69336 2.68066 7.45215C2.68066 7.21729 2.89014 7.01416 3.1377 7.01416H4.39453C4.64844 7.01416 4.85156 7.21729 4.85156 7.45215C4.85156 7.69336 4.64844 7.89648 4.39453 7.89648ZM4.39453 9.63574H3.1377C2.89014 9.63574 2.68066 9.43896 2.68066 9.19775C2.68066 8.96289 2.89014 8.75977 3.1377 8.75977H4.39453C4.64844 8.75977 4.85156 8.96289 4.85156 9.19775C4.85156 9.43896 4.64844 9.63574 4.39453 9.63574Z"></path>
                                </svg>
                            </CustomTooltip>
                        </div>
                        {SettingNav.map((item) => (
                            <div className="ks-wt-modal-sidebar-menu-container"
                                 key={item.id}>
                                <label>{item.name}</label>
                                <div className="ks-wt-modal-sidebar-menu-block ks_d_flex ks_flex_col">
                                    <div className='ks_d_flex ks_flex_col ks_pd_10 ks_gap_1rem'>
                                        {item.navs.map((nav) => (
                                            <div
                                                // className={cn("ks-wt-modal-sidebar-menu-item",
                                                //     {"ks-wt-active": activeNav.isActive === nav.name})}
                                                // key={nav.id} onClick={() => activeNav.setIsActive(nav.name)}
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
                <div className="ks-wt-modal-wrapper-header-container">
                    <div className="ks-wt-modal-header-container ks_w100 ks_d_inl_flex ks_jt_cont_end ks_alg_itm_ctr">
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

                {/*{*/}
                {/*    activeNav.isActive === SettingNavEnum.MyAccount &&*/}
                {/*    <AccountContainer />*/}
                {/*}*/}
            </div>
        </Modal>
    )
}

export default SettingContainer