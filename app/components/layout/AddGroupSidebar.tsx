"use client"
import React, { useState } from 'react';
import LogoWetms from "@/app/components/icons/LogoWetms";
import SidebarToggle from "@/app/components/layout/SidebarToggle";
import Link from "next/link";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { projectService } from "@/service/project.service";
import DeleteDialog from "@/app/components/ui/settings/users/DeleteDialog";
import cn from "clsx";
import {ArrowDown} from "@/app/components/icons";
import EditUserIcon from "@/app/components/icons/EditUserIcon";
import DeleteRedIcon from "@/app/components/icons/DeleteRedIcon";

function AddGroupSidebar() {
    const queryClient = useQueryClient();
    const [showGroupInput, setShowGroupInput] = useState(false);
    const [showAddGroup, setShowAddGroup] = useState(true);
    const [groupInput, setGroupInput] = useState("");
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState<number | null>(null);
    const [isEditId, setIsEditId] = useState<string | number>("");
    const [showMore, setShowMore] = useState(false)

    const { data, isLoading, isError } = useQuery({
        queryKey: ["groups", { pageNumber, pageSize }],
        queryFn: async () => await projectService.getTranslation(1, { page_number: pageNumber, page_size: pageSize })
    });

    //hanlde click to show group input
    const handleShowGroupInput = () => {
        setShowGroupInput((prev) => !prev);
        setShowAddGroup(false);
        setGroupInput("");
        setIsEditId("");
    };

    const handleShowAddGroup = () => {
        setIsEditId("");
        setShowAddGroup((prev) => !prev);
        setShowGroupInput(false);
    };

    const handleClickAddGroupForm = async () => {
        if (groupInput === "") {
            toast.error("Please enter group name");
            return;
        }

        if (isEditId) {
            const res = await projectService.updateGroup(1, isEditId, { nm: groupInput });
            if (res?.status === 200) {
                queryClient.invalidateQueries({ queryKey: ['groups'] });
                setShowAddGroup(true);
                setGroupInput("");
                setShowGroupInput(false);
                setIsEditId("");
                toast.success("Updated group successfully.");
            }
        } else {
            const res = await projectService.createGroup(1, { nm: groupInput });
            if (res?.status === 200) {
                queryClient.invalidateQueries({ queryKey: ['groups'] });
                setShowAddGroup(true);
                setGroupInput("");
                setShowGroupInput(false);
                toast.success("Added group successfully.");
            }
        }
    };

    //handle press enter to create new group
    const pressEnterToCreateGroup = (
        e: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        if (e.code === "Enter") {
            handleClickAddGroupForm();
        }
    };

    const handleClickEditGroup = async (groupId: number, groupName: string) => {
        setIsEditId(groupId);
        setGroupInput(groupName);
        setShowGroupInput(true);
        setShowAddGroup(false);
    };

    const handleDeleteGroupMutate = useMutation({
        mutationFn: (user_ids: number) => projectService.deleteGroup(1, user_ids),
        onSuccess: async () => {
            toast.success("Group has been removed.");
            queryClient.invalidateQueries({ queryKey: ['groups'] });
            setShowDeleteDialog(false);
        }
    });

    const handleClickDeleteGroup = async () => {
        if (selectedUser !== null) {
            handleDeleteGroupMutate.mutate(selectedUser);
        }
    };

    return (
        <>
            <div id="ks_wt_app_sidebar" className="ks_d_flex ks_flex_col">
                <div id="ks_wt_app_default_t" className="ks_d_flex ks_pt_20">
                    <div className="ks_d_flex">
                        <SidebarToggle/>
                        <Link href={"/projects"} className="ks_pl_8">
                            <LogoWetms/>
                        </Link>
                    </div>
                </div>

                <div className="ks-wt-app-sidebar-menu-scroll ">
                    <div className="ks_d_flex ks_flex_col">
                        <div className="ks-wt-app-sidebar-menu-lbl">
                            <div className="ks-wt-app-sidebar-menu-item-contaier ks_d_flex ks_flex_col">
                                <>
                                <div className={"ks_fw_bd ks_fs14 py-4 text-secondary"}>GROUP</div>
                                    <div
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush_collapse_1"
                                        aria-controls="flush_collapse_1"
                                        className="ks-wt-app-sidebar-menu-item ks_d_flex ks_jt_cont_betw ks_sb_itm ks_alg_itm_ctr">
                                        <div
                                            className="ks_d_flex ks_alg_itm_ctr"
                                            onClick={() => setShowMore(!showMore)}
                                        >
                                            <label
                                                className="cursor-pointer text-black ks_lbl_bigger ks_fw_md">All</label>
                                        </div>
                                        <ArrowDown/>
                                    </div>
                                    <div
                                        id="flush_collapse_1"
                                        className="accordion-collapse collapse show ks_sb_itm"
                                        aria-labelledby="flush_collapse_1"
                                    >
                                        <div className="ks_d_flex ks_flex_col ks_wth280">
                                            <div>
                                                {
                                                    data?.categories?.map((cate: any, index: any) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className={cn("ks-wt-app-sidebar-menu-item ks_d_flex ks_jt_cont_st ks_alg_itm_ctr")}
                                                            >
                                                                <div className="ks_d_flex ks_alg_itm_ctr w-100 ks_fs12 ks_jt_cont_betw category-item">
                                                                    <label
                                                                        className="cursor-pointer ks_lbl_bigger ks_fw_md ks-wt-active text-dark">
                                                                        {cate.name}
                                                                    </label>
                                                                    <div className={"d-flex icons"}>
                                                                        <div
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                setIsEditId(cate?.cate_id);
                                                                                handleClickEditGroup(cate?.cate_id, cate?.name);
                                                                            }}
                                                                            className={"me-2 ks_cs_pointer"}>
                                                                            <EditUserIcon/>
                                                                        </div>
                                                                        <div
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                setSelectedUser(cate?.cate_id);
                                                                                setShowDeleteDialog(true);
                                                                            }}
                                                                            className={"ks_cs_pointer"}>
                                                                            <DeleteRedIcon/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                                {showAddGroup && (
                                                    <div
                                                        className="text-decoration-none text-black"
                                                        onClick={handleShowGroupInput}
                                                    >
                                                        <div className="">
                                                            <div className="ks_d_flex ks_alg_itm_ctr">
                                                                <label
                                                                    className="cursor-pointer ks_lbl_bigger ks_fw_md ks-wt-active text-info">Add
                                                                    Group</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {showGroupInput && (
                                                    <div
                                                        className="ks_d_flex ks_alg_itm_ctr ks_sub_sb_itm_add_group ks_mb5 ks_pos_rlt ks_mt_3">
                                                        <input
                                                            type="text"
                                                            onKeyDown={pressEnterToCreateGroup}
                                                            className="ks_group_inp py-1 ks_fs14"
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
                                                                right: "2px",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={handleShowAddGroup}
                                                        >
                                                            <path
                                                                d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showDeleteDialog && (
                <DeleteDialog
                    isOpen={showDeleteDialog}
                    setIsOpen={setShowDeleteDialog}
                    handleDelete={handleClickDeleteGroup}
                />
            )}

        </>
    );
}

export default AddGroupSidebar;
