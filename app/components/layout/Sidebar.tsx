"use client"
import React, {useState} from 'react';
import {NavbarPathEnum} from "@/utils/enums";
import {usePathname, useSearchParams} from "next/navigation";
import LogoWetms from "@/app/components/icons/LogoWetms";
import ActiveLink from "@/app/components/shared/ActiveLink";
import SidebarToggle from "@/app/components/layout/SidebarToggle";
import Link from "next/link";
import cn from "clsx";
import {signOut} from "next-auth/react";

function Sidebar() {
    const pathname = usePathname();
    const urlParam = new URLSearchParams();
    const [showMore, setShowMore] = useState(false)


    const NAVIGATION_CONFIG = {
        items: [
            {
                id: 1,
                path: NavbarPathEnum.PROJECT,
                name: 'Projects',
                icon: <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.75 11.9985V5.99846C15.7497 5.73542 15.6803 5.47707 15.5487 5.24933C15.417 5.0216 15.2278 4.83248 15 4.70096L9.75 1.70096C9.52197 1.56931 9.2633 1.5 9 1.5C8.7367 1.5 8.47803 1.56931 8.25 1.70096L3 4.70096C2.7722 4.83248 2.58299 5.0216 2.45135 5.24933C2.31971 5.47707 2.25027 5.73542 2.25 5.99846V11.9985C2.25027 12.2615 2.31971 12.5199 2.45135 12.7476C2.58299 12.9753 2.7722 13.1644 3 13.296L8.25 16.296C8.47803 16.4276 8.7367 16.4969 9 16.4969C9.2633 16.4969 9.52197 16.4276 9.75 16.296L15 13.296C15.2278 13.1644 15.417 12.9753 15.5487 12.7476C15.6803 12.5199 15.7497 12.2615 15.75 11.9985Z"
                        stroke="#0F172A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2.46729 5.25L8.99979 9L15.5323 5.25"
                        stroke="#0F172A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 16.5V9"
                        stroke="#0F172A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            },
            {
                id: 2,
                path: NavbarPathEnum.FAVORITE,
                name: 'Favorites',
                icon: <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.25 2.25V8.25L10.5 6L12.75 8.25V2.25"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            },
            {
                id: 3,
                path: NavbarPathEnum.BOOKMARK,
                name: 'Bookmarks',
                icon: <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.25 15.75L9 12.75L3.75 15.75V3.75C3.75 3.35218 3.90804 2.97064 4.18934 2.68934C4.47064 2.40804 4.85218 2.25 5.25 2.25H12.75C13.1478 2.25 13.5294 2.40804 13.8107 2.68934C14.092 2.97064 14.25 3.35218 14.25 3.75V15.75Z"
                        stroke="#475569"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            },
        ]
    }


    return (
        <>
            <div id="ks_wt_app_sidebar" className="ks_d_flex ks_flex_col">
                <div id="ks_wt_app_default_t" className="ks_d_flex ks_alg_itm_ctr ks_pt_25 ks_pl_20">
                    <div className="ks_d_flex">
                        <SidebarToggle/>
                        <div>
                            <Link href={"/projects"} className="ks_pl_8">
                                <LogoWetms/>
                                {/*<label>WeTMS</label>*/}
                            </Link>
                        </div>

                    </div>


                </div>

                <div className="ks-wt-app-sidebar-menu-scroll ">
                    <div className="ks_d_flex ks_flex_col">
                        <div className="ks-wt-app-sidebar-menu-lbl">
                            <div className="ks-wt-app-sidebar-menu-item-contaier ks_d_flex ks_flex_col">
                                {
                                    NAVIGATION_CONFIG.items.map((item) => (
                                        <ActiveLink key={item?.id}
                                                    isActive={pathname.startsWith(NavbarPathEnum.PROJECT) ? pathname.startsWith(item.path) : pathname === item.path}
                                                    className={'ks-wt-app-sidebar-menu-item ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr'}
                                                    href={item.path + '?' + urlParam.toString()}
                                                    activeClassName={'ks-wt-active'}
                                                    icon={item.icon}>
                                            <label className="cursor-pointer ks_lbl_bigger ks_fw_md">{item?.name}</label>
                                        </ActiveLink>
                                    ))
                                }

                                <>
                                    <div className="ks-wt-app-sidebar-menu-item ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr">
                                        <div
                                            onClick={() => setShowMore(!showMore)}
                                            className="ks-wt-app-sidebar-item ks_d_flex ks_alg_itm_ctr"
                                        >
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9Z"
                                                    fill="#475569"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.5 3.75C7.5 2.92157 8.17157 2.25 9 2.25C9.82843 2.25 10.5 2.92157 10.5 3.75C10.5 4.57843 9.82843 5.25 9 5.25C8.17157 5.25 7.5 4.57843 7.5 3.75Z"
                                                    fill="#475569"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.5 14.25C7.5 13.4216 8.17157 12.75 9 12.75C9.82843 12.75 10.5 13.4216 10.5 14.25C10.5 15.0784 9.82843 15.75 9 15.75C8.17157 15.75 7.5 15.0784 7.5 14.25Z"
                                                    fill="#475569"
                                                />
                                            </svg>
                                            <label className="cursor-pointer text-black ks_lbl_bigger ks_fw_md">More</label>
                                        </div>
                                    </div>
                                </>

                                {
                                    showMore && (
                                        <>
                                            <div className="ks_dropdown_menu">
                                                <div className="ks_d_flex ks_flex_col ks_wth280">
                                                    <div>
                                                        <Link href={NavbarPathEnum.STARRED + '?' + urlParam.toString()}>
                                                            <div
                                                                className={cn("ks-wt-app-sidebar-menu-item ks_d_flex ks_jt_cont_st ks_alg_itm_ctr", {
                                                                    'ks-wt-active': pathname === NavbarPathEnum.STARRED
                                                                })}
                                                            >
                                                                <div
                                                                    className="ks-wt-app-sidebar-item ks_d_flex ks_alg_itm_ctr"
                                                                >
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M8.00016 1.33203L10.0602 5.50536L14.6668 6.1787L11.3335 9.42537L12.1202 14.012L8.00016 11.8454L3.88016 14.012L4.66683 9.42537L1.3335 6.1787L5.94016 5.50536L8.00016 1.33203Z"
                                                                            stroke="#0F172A" stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"/>
                                                                    </svg>
                                                                    <label className="cursor-pointer ks_lbl_bigger ks_fw_md">Starred</label>
                                                                </div>
                                                            </div>
                                                        </Link>

                                                    </div>
                                                    <div>
                                                        <Link href={NavbarPathEnum.HIDDEN + '?' + urlParam.toString()}>
                                                            <div
                                                                className={cn("ks-wt-app-sidebar-menu-item ks_d_flex ks_jt_cont_st ks_alg_itm_ctr", {
                                                                    'ks-wt-active': pathname === NavbarPathEnum.HIDDEN
                                                                })}
                                                            >
                                                                <div
                                                                    className="ks-wt-app-sidebar-item ks_d_flex ks_alg_itm_ctr"
                                                                >
                                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <g clip-path="url(#clip0_1784_9501)">
                                                                            <path
                                                                                d="M6.58675 6.58594C6.39025 6.76904 6.23265 6.98984 6.12334 7.23517C6.01402 7.4805 5.95524 7.74534 5.95051 8.01388C5.94577 8.28242 5.99517 8.54916 6.09576 8.7982C6.19635 9.04723 6.34607 9.27346 6.53598 9.46337C6.7259 9.65329 6.95212 9.80301 7.20116 9.9036C7.45019 10.0042 7.71694 10.0536 7.98548 10.0488C8.25402 10.0441 8.51885 9.98533 8.76419 9.87602C9.00952 9.76671 9.23032 9.6091 9.41342 9.4126"
                                                                                stroke="#475569" stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"/>
                                                                            <path
                                                                                d="M7.15332 3.38536C7.43419 3.35037 7.71694 3.33256 7.99999 3.33203C12.6667 3.33203 14.6667 7.9987 14.6667 7.9987C14.3686 8.63678 13.9948 9.23665 13.5533 9.78536"
                                                                                stroke="#475569" stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"/>
                                                                            <path
                                                                                d="M4.40683 4.40625C3.081 5.30933 2.02008 6.54976 1.3335 7.99958C1.3335 7.99958 3.3335 12.6662 8.00016 12.6662C9.27744 12.6697 10.5274 12.2963 11.5935 11.5929"
                                                                                stroke="#475569" stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"/>
                                                                            <path d="M1.3335 1.33203L14.6668 14.6654"
                                                                                  stroke="#475569"
                                                                                  stroke-width="1.5" stroke-linecap="round"
                                                                                  stroke-linejoin="round"/>
                                                                        </g>
                                                                        <defs>
                                                                            <clipPath id="clip0_1784_9501">
                                                                                <rect width="16" height="16" fill="white"/>
                                                                            </clipPath>
                                                                        </defs>
                                                                    </svg>
                                                                    <label className="cursor-pointer ks_lbl_bigger ks_fw_md">Hidden</label>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                </div>


                                            </div>
                                        </>
                                    )
                                }

                            </div>
                        </div>


                    </div>


                </div>

                <div className="ks_mtauto">
                    <div className="ks_hide_x_scroll ks_p25 ks_ml_12">
                        <path
                            d="M8.99316 10.623C8.84733 10.623 8.69922 10.5957 8.54883 10.541C8.39844 10.4818 8.22982 10.3997 8.04297 10.2949L3.05957 7.40332C2.7679 7.2347 2.54915 7.0638 2.40332 6.89062C2.26204 6.71745 2.19141 6.50781 2.19141 6.26172C2.19141 6.02018 2.26204 5.81283 2.40332 5.63965C2.54915 5.46647 2.7679 5.29329 3.05957 5.12012L8.04297 2.24219C8.22982 2.13281 8.39844 2.05078 8.54883 1.99609C8.69922 1.94141 8.84733 1.91406 8.99316 1.91406C9.14355 1.91406 9.29167 1.94141 9.4375 1.99609C9.58789 2.05078 9.75879 2.13281 9.9502 2.24219L14.9336 5.12012C15.2253 5.29329 15.4417 5.46647 15.583 5.63965C15.7288 5.81283 15.8018 6.02018 15.8018 6.26172C15.8018 6.50781 15.7288 6.71745 15.583 6.89062C15.4417 7.0638 15.2253 7.2347 14.9336 7.40332L9.9502 10.2949C9.75879 10.3997 9.58789 10.4818 9.4375 10.541C9.29167 10.5957 9.14355 10.623 8.99316 10.623ZM8.99316 8.96875C9.05697 8.96875 9.13444 8.94369 9.22559 8.89355L13.7646 6.32324C13.7965 6.30957 13.8125 6.28906 13.8125 6.26172C13.8125 6.23893 13.7965 6.2207 13.7646 6.20703L9.22559 3.63672C9.13444 3.58659 9.05697 3.56152 8.99316 3.56152C8.92936 3.56152 8.85189 3.58659 8.76074 3.63672L4.22168 6.20703C4.19434 6.2207 4.18066 6.23893 4.18066 6.26172C4.18066 6.28906 4.19434 6.30957 4.22168 6.32324L8.76074 8.89355C8.85189 8.94369 8.92936 8.96875 8.99316 8.96875ZM8.99316 13.8496C8.85189 13.8496 8.71289 13.82 8.57617 13.7607C8.43945 13.6969 8.28451 13.6149 8.11133 13.5146L2.82715 10.4111C2.62207 10.2972 2.46484 10.1628 2.35547 10.0078C2.24609 9.85286 2.19141 9.67741 2.19141 9.48145C2.19141 9.2946 2.23926 9.12826 2.33496 8.98242C2.43066 8.83659 2.54915 8.7181 2.69043 8.62695L8.4668 11.9902C8.57161 12.054 8.66504 12.1042 8.74707 12.1406C8.83366 12.1725 8.91569 12.1885 8.99316 12.1885C9.0752 12.1885 9.15723 12.1725 9.23926 12.1406C9.32585 12.1042 9.41927 12.054 9.51953 11.9902L15.2959 8.62695C15.4372 8.7181 15.5557 8.83659 15.6514 8.98242C15.7516 9.12826 15.8018 9.2946 15.8018 9.48145C15.8018 9.67741 15.7471 9.85286 15.6377 10.0078C15.5283 10.1582 15.3711 10.2926 15.166 10.4111L9.875 13.5146C9.70182 13.6149 9.54688 13.6969 9.41016 13.7607C9.27344 13.82 9.13444 13.8496 8.99316 13.8496ZM8.99316 16.9189C8.85189 16.9189 8.71289 16.8893 8.57617 16.8301C8.43945 16.7708 8.28451 16.6888 8.11133 16.584L2.82715 13.4873C2.62207 13.3643 2.46484 13.2253 2.35547 13.0703C2.24609 12.9154 2.19141 12.7399 2.19141 12.5439C2.19141 12.3571 2.23926 12.193 2.33496 12.0518C2.43066 11.9105 2.54915 11.792 2.69043 11.6963L8.4668 15.0596C8.57161 15.1188 8.66504 15.1667 8.74707 15.2031C8.83366 15.2396 8.91569 15.2578 8.99316 15.2578C9.0752 15.2578 9.15723 15.2396 9.23926 15.2031C9.32585 15.1667 9.41927 15.1188 9.51953 15.0596L15.2959 11.6963C15.4372 11.792 15.5557 11.9105 15.6514 12.0518C15.7516 12.193 15.8018 12.3571 15.8018 12.5439C15.8018 12.7399 15.7448 12.9154 15.6309 13.0703C15.5215 13.2253 15.3665 13.3643 15.166 13.4873L9.875 16.584C9.70182 16.6888 9.54688 16.7708 9.41016 16.8301C9.27344 16.8893 9.13444 16.9189 8.99316 16.9189Z"/>
                        <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.75 3.75H1.5V9L6.2175 13.7175C6.9225 14.4225 8.0775 14.4225 8.7825 13.7175L11.4675 11.0325C12.1725 10.3275 12.1725 9.1725 11.4675 8.4675L6.75 3.75Z"
                                stroke="#475569"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4.5 6.7575V6.75"
                                stroke="#475569"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.25 3.75L15.975 8.475C16.1428 8.64223 16.276 8.84093 16.3668 9.05973C16.4577 9.27852 16.5044 9.51309 16.5044 9.75C16.5044 9.98691 16.4577 10.2215 16.3668 10.4403C16.276 10.6591 16.1428 10.8578 15.975 11.025L12.75 14.25"
                                stroke="#475569"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <label className="ks_fw_md ks_ml_5">
                            WeTMS v.1.0.0
                        </label>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Sidebar;