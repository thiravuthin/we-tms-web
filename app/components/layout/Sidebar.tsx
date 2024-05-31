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
import ProjectIcon from "@/app/components/icons/ProjectIcon";
import FavoritesIcon from "@/app/components/icons/FavoritesIcon";
import BookmarkIcon from "@/app/components/icons/BookmarkIcon";
import VersionIcon from "@/app/components/icons/VersonIcon";
import MoreIcon from "@/app/components/icons/MoreIcon";
import StarredIcon from "@/app/components/icons/StarredIcon";
import HiddenIcon from "@/app/components/icons/HiddenIcon";

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
                icon: <ProjectIcon />
            },
            {
                id: 2,
                path: NavbarPathEnum.FAVORITE,
                name: 'Favorites',
                icon: <FavoritesIcon />
            },
            {
                id: 3,
                path: NavbarPathEnum.BOOKMARK,
                name: 'Bookmarks',
                icon: <BookmarkIcon />
            },
        ]
    }


    return (
        <>
            <div id="ks_wt_app_sidebar" className="ks_d_flex ks_flex_col ks-wt-app-sidebar-menu-lbl">
                <div id="ks_wt_app_default_t" className="ks_d_flex ks_alg_itm_ctr ks_pt_25 ks_pl_20">
                    <div className="ks_d_flex">
                        <SidebarToggle/>
                        <Link href={"/projects"} className="ks_pl_8">
                                <LogoWetms/>
                        </Link>
                    </div>
                </div>

                <div className="ks-wt-app-sidebar-menu-scroll ">
                    <div className="ks_d_flex ks_flex_col">
                        <div className="">
                            <div className="ks-wt-app-sidebar-menu-item-contaier ks_d_flex ks_flex_col">
                                {
                                    NAVIGATION_CONFIG.items.map((item) => (
                                        <ActiveLink key={item?.id}
                                                    isActive={pathname.startsWith(NavbarPathEnum.PROJECT) ? pathname.startsWith(item.path) : pathname === item.path}
                                                    className={'ks-wt-app-sidebar-menu-item ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr'}
                                                    href={item.path + '?' + urlParam.toString()}
                                                    activeClassName={'ks-wt-active'}
                                                    icon={item.icon}>
                                            <label className="cursor-pointer ks_lbl_bigger ks_fw_md ks-pl-10 ks_sb_itm">{item?.name}</label>
                                        </ActiveLink>
                                    ))
                                }

                                <>
                                    <div
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush_collapse_1"
                                        aria-controls="flush_collapse_1"
                                        className="ks-wt-app-sidebar-menu-item ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr ks_sb_itm">
                                        <div
                                            onClick={() => setShowMore(!showMore)}
                                            className="ks_d_flex ks_alg_itm_ctr"
                                        >
                                            <MoreIcon />
                                            <label
                                                className="cursor-pointer text-black ks_lbl_bigger ks_fw_md ks-pl-10">More</label>
                                        </div>
                                    </div>

                                    <div
                                        id="flush_collapse_1"
                                        className="accordion-collapse collapse show ks_sb_itm"
                                        aria-labelledby="flush_collapse_1"
                                    >
                                        <div className="ks_d_flex ks_flex_col ks_wth280">
                                            <div>
                                                <Link href={NavbarPathEnum.STARRED + '?' + urlParam.toString()}>
                                                    <div
                                                        className={cn("ks-wt-app-sidebar-menu-item ks_d_flex ks_jt_cont_st ks_alg_itm_ctr", {
                                                            'ks-wt-active': pathname === NavbarPathEnum.STARRED
                                                        })}
                                                    >
                                                        <div
                                                            className="ks_d_flex ks_alg_itm_ctr"
                                                        >
                                                           <StarredIcon />
                                                            <label
                                                                className="cursor-pointer ks_lbl_bigger ks_fw_md ks-pl-10">Starred</label>
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
                                                            className="ks_d_flex ks_alg_itm_ctr"
                                                        >
                                                            <HiddenIcon />
                                                            <label
                                                                className="cursor-pointer ks_lbl_bigger ks_fw_md ks_ml ks-pl-10">Hidden</label>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ks_mtauto">
                    <div className="ks_hide_x_scroll ks_p25 ks_ml_15 ks_pb_5">
                        <VersionIcon />
                        <label className="ks_fw_md text-black ks-size-small ks_ml_5">
                            WeTMS v.1.0.0
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;