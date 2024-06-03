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
import toast from "react-hot-toast";
import {useQueryClient} from "@tanstack/react-query";

function Sidebar() {
    const queryClient = useQueryClient();
    const [showGroupInput, setShowGroupInput] = useState(false);
    const [showAddGroup, setShowAddGroup] = useState(true);
    const [groupInput, setGroupInput] = useState("");

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


    //hanlde click to show group input
    const handleShowGroupInput = () => {
        setShowGroupInput((prev) => !prev);
        setShowAddGroup(false);
        setGroupInput("");
    };

    const handleShowAddGroup = () => {
        // setIsEditId("");
        setShowAddGroup((prev) => !prev);
        setShowGroupInput(false);
    };

    const handleClickGroupForm = async () => {
        alert("add group success")

        // if (groupInput === "") return;
        // let requestBody = { name: groupInput };
        // const response = isEditId
        //     ? await groupService.editGroup(isEditId, requestBody)
        //     : await groupService.createGroup(requestBody);
        // if (response.status === 200) {
        //     isEditId
        //         ? toast.success("Group edited successfully")
        //         : toast.success("Group created successfully");
        //     // queryClient.invalidateQueries(["groupCounts"]);
        //     isEditId ? setIsEditId("") : handleShowAddGroup();
        // } else {
        //     toast.error(response.message);
        // }
    };

    //handle press enter to create new group
    const pressEnterToCreateGroup = (
        e: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        if (e.code === "Enter") {
            handleClickGroupForm();
        }
    };

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
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false" aria-controls="flush-collapseOne">
                                                All
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                                             data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                {/*fetch add group to show here*/}
                                                <div className={"ks_d_flex ks_flex_col"}>
                                                    <label className={"py-2 ks_fs12"}>group added 1</label>
                                                </div>
                                                {/*end of fetch add group to show here*/}
                                                {showAddGroup && (
                                                    <div
                                                        className="text-decoration-none text-black"
                                                        onClick={handleShowGroupInput}
                                                    >
                                                        <div className="">
                                                            <div className="ks_d_flex ks_alg_itm_ctr">
                                                                <div className="ks_w100 ks_cs_pointer ks_d_flex ks_jt_cont_betw ks_fs12 py-2">
                                                                    Add group
                                                                    <div>+</div>
                                                                </div>
                                                            </div>
                                                            {/*<svg className="ks_wth12 ks_hgt12" viewBox="0 0 12 12">*/}
                                                            {/*    <path*/}
                                                            {/*        fill="#1e5cfe"*/}
                                                            {/*        d="M0.162598 5.99756C0.162598 6.23193 0.245605 6.43213 0.411621 6.59814C0.577637 6.76416 0.775391 6.84717 1.00488 6.84717H5.15771V10.9927C5.15771 11.2222 5.23828 11.4199 5.39941 11.5859C5.56543 11.752 5.76562 11.835 6 11.835C6.23438 11.835 6.43213 11.752 6.59326 11.5859C6.75928 11.4199 6.84229 11.2222 6.84229 10.9927V6.84717H10.9951C11.2246 6.84717 11.4199 6.76416 11.5811 6.59814C11.7471 6.43213 11.8301 6.23193 11.8301 5.99756C11.8301 5.76807 11.7471 5.57031 11.5811 5.4043C11.4199 5.23828 11.2246 5.15527 10.9951 5.15527H6.84229V1.00977C6.84229 0.780273 6.75928 0.58252 6.59326 0.416504C6.43213 0.245605 6.23438 0.160156 6 0.160156C5.76562 0.160156 5.56543 0.245605 5.39941 0.416504C5.23828 0.58252 5.15771 0.780273 5.15771 1.00977V5.15527H1.00488C0.775391 5.15527 0.577637 5.23828 0.411621 5.4043C0.245605 5.57031 0.162598 5.76807 0.162598 5.99756Z"*/}
                                                            {/*    />*/}
                                                            {/*</svg>*/}
                                                        </div>
                                                    </div>
                                                )}
                                                {showGroupInput && (
                                                    <div className="ks_d_flex ks_alg_itm_ctr ks_sub_sb_itm_add_group ks_mb5 ks_pos_rlt">
                                                        <input
                                                            type="text"
                                                            onKeyDown={pressEnterToCreateGroup}
                                                            className="ks_group_inp"
                                                            value={groupInput}
                                                            placeholder={"Enter group name"}
                                                            onChange={(e) => setGroupInput(e?.target?.value)}
                                                            autoFocus
                                                        />
                                                        <svg
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 24 24"
                                                            style={{
                                                                position: "absolute",
                                                                right: "15px",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={handleShowAddGroup}
                                                        >
                                                            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

            </div>


        </>
    );
}

export default Sidebar;