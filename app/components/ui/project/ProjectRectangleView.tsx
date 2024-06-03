"use client"
import React, {useEffect, useReducer, useState} from 'react';
import Calender from "@/app/components/icons/Calender";
import useFetchProjects from "@/app/lib/hooks/use-fetch-project";
import {useProjectStore} from "@/app/lib/store";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import SettingIcon from "@/app/components/icons/SettingIcon";
import LogoutIcon from "@/app/components/icons/LogoutIcon";
import {projectService} from "@/service/project.service";
import toast from "react-hot-toast";
import {useQueryClient} from "@tanstack/react-query";
import {DateUtils} from "@/utils/DateUtils";
import {useInView} from "react-intersection-observer";
import NoDataSave from "@/app/components/layout/NoDataSave";
import {useRouter} from "next/navigation";

const ProjectRectangleView = () => {
    const {ref, inView, entry} = useInView();
    const {
        id,
        setId,
        setIsOpen,
        setData,
        isView,
        setIsView
    } = useProjectStore(state => state);
    const projectStore = useProjectStore(state => state);
    const router = useRouter();
    const handleProjectClick = (project_id:number) => {
        router.push(`/projects/${project_id}/translations`);
    }

    const [params, dispatch] = useReducer(
        (state: any, action: any) => {
            return {...state, ...action};
        },
        {
            page_number: 0,
            page_size: 10,
            sort_columns: '',
            search_value: '',
        }
    );

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading
    } = useFetchProjects();

    const [isStar, setIsStar] = useState(true);
    const queryClient = useQueryClient();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage]);

    const projects = data?.pages.flatMap(page => page.data) ?? [];

    const handleRemoveProject = async () => {
        const askMessage = window.confirm('This action cannot be undone. This will permanently remove this data from the system.'),
            isConfirm = askMessage;
        if (isConfirm) {
            try {
                const response = await projectService.deleteProject(id as number);

                if (response.status === 200) {
                    toast.success('Project deleted successfully')

                    // Call queryClient.invalidateQueries( {queryKey: [`projects`]}); to invalidate the projects query
                    queryClient.invalidateQueries({queryKey: [`projects`]})
                    setData({})

                } else {
                    toast.error('Error deleting project:', response);
                }
            } catch (error) {
                console.error('Error deleting project:', error);
            }
        }

    };

    useEffect(() => {
        // if isView is true, open the ProjectItem component
        if (isView) {
            setIsOpen(true)
        }
    }, [isView])

    return (
        <>
            <div className="ks_pd_30 ks_pl_35">
                <div className="row gap-3" onClick={() => {}}>
                    {   isLoading ? (
                        <div>Loading...</div> // or any other loading indicator
                    ) : projects.length === 0 ? (
                            <NoDataSave/>
                        ) :
                            <>
                                {
                                    projects?.map((item, index) => (
                                        <div key={index} ref={ref}
                                             className="ks_btn_pm_m ks_d_flex ks_jt_cont_betw ks_pd_20 ks_hvr_pro"
                                             onClick={() => {
                                                 setId(item.project_id as any)
                                                 projectStore.setData(item);
                                                 setIsOpen(true);
                                                 handleProjectClick(item?.project_id)
                                             }}>
                                            <div className="ks_d_flex">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="20" cy="20" r="20" fill="#F1F5F9"/>
                                                    <path
                                                        d="M16.5385 25V14.8182H20.2672C20.9898 14.8182 21.588 14.9375 22.062 15.1761C22.5359 15.4115 22.8906 15.7313 23.1259 16.1357C23.3612 16.5367 23.4789 16.9891 23.4789 17.4929C23.4789 17.9171 23.401 18.2751 23.2452 18.5668C23.0894 18.8551 22.8806 19.0871 22.6188 19.2628C22.3603 19.4351 22.0752 19.5611 21.7637 19.6406V19.7401C22.1017 19.7566 22.4315 19.866 22.753 20.0682C23.0778 20.267 23.3463 20.5504 23.5584 20.9183C23.7705 21.2862 23.8766 21.7337 23.8766 22.2607C23.8766 22.781 23.754 23.2483 23.5087 23.6626C23.2667 24.0736 22.8922 24.4001 22.3851 24.642C21.878 24.8807 21.2301 25 20.4412 25H16.5385ZM18.0748 23.6825H20.2921C21.0279 23.6825 21.5549 23.54 21.873 23.255C22.1912 22.9699 22.3503 22.6136 22.3503 22.1861C22.3503 21.8646 22.2691 21.5696 22.1067 21.3011C21.9443 21.0327 21.7123 20.8189 21.4107 20.6598C21.1124 20.5007 20.7578 20.4212 20.3468 20.4212H18.0748V23.6825ZM18.0748 19.223H20.133C20.4777 19.223 20.7876 19.1567 21.0627 19.0241C21.3411 18.8916 21.5615 18.706 21.7239 18.4673C21.8896 18.2254 21.9725 17.9403 21.9725 17.6122C21.9725 17.1913 21.825 16.8383 21.53 16.5533C21.235 16.2682 20.7826 16.1257 20.1728 16.1257H18.0748V19.223Z"
                                                        fill="black"/>
                                                </svg>
                                                <div className="ks_ml_15 ks_d_flex ks_flex_col ks_jt_cont_betw">
                                                    <label className="fw-bold ks-size-big">{item.project_name}</label>
                                                    <div className="ks_d_flex">
                                                        <Calender/>
                                                        <label
                                                            className="ks-silver ks_ml_5 ">{DateUtils.formatDateHour(item.regi_dtm)}</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ks_d_flex ks_flex_col ks_jt_cont_betw">
                                                {/*<MoreVertical/>*/}
                                                {/*<DropdownProject show={isOpenItem} id={0}/>*/}


                                                <Dropdown className={''}>
                                                    <DropdownTrigger>
                                                        <button type={"button"} className={'unstyled-button'}
                                                                onClick={() => {
                                                                    setId(item.project_id as any)
                                                                }
                                                                }>
                                                            <svg
                                                                className="ks_wth20 ks_hgt20"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    d="M10 3C10.8284 3 11.5 3.67157 11.5 4.5C11.5 5.32843 10.8284 6 10 6C9.17157 6 8.5 5.32843 8.5 4.5C8.5 3.67157 9.17157 3 10 3Z"
                                                                    fill="#333333"
                                                                />
                                                                <path
                                                                    d="M10 8.5C10.8284 8.5 11.5 9.17157 11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5Z"
                                                                    fill="#333333"
                                                                />
                                                                <path
                                                                    d="M11.5 15.5C11.5 14.6716 10.8284 14 10 14C9.17157 14 8.5 14.6716 8.5 15.5C8.5 16.3284 9.17157 17 10 17C10.8284 17 11.5 16.3284 11.5 15.5Z"
                                                                    fill="#333333"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </DropdownTrigger>
                                                    <DropdownMenu className="ks_wth_280 bg-white rounded "
                                                                  aria-label="Static Actions"
                                                    >
                                                        {/*View*/}
                                                        <DropdownItem key="view"
                                                                      className={'dropdown-item border rounded'}
                                                                      onClick={() => {
                                                                          setIsView(true)
                                                                          setData(item)
                                                                      }}
                                                        >

                                                            <label className={'text- m-2'}>View</label>

                                                        </DropdownItem>
                                                        {/*<DropdownItem key="edit"*/}
                                                        {/*              className={'dropdown-item border rounded'}*/}
                                                        {/*              onClick={() => {*/}
                                                        {/*                  setIsUpdate(true)*/}
                                                        {/*                  setUpdateData(item)*/}
                                                        {/*              }}*/}
                                                        {/*>*/}

                                                        {/*    <label className={'text- m-2'}>Edit</label>*/}
                                                        {/*    {*/}
                                                        {/*        isUpdate && < ProjectForm*/}
                                                        {/*            isOpen={projectStore.isUpdate}*/}
                                                        {/*            onSubmit={() => {*/}
                                                        {/*            }}*/}
                                                        {/*            handleClose={() => setIsUpdate(false)}*/}
                                                        {/*        />*/}
                                                        {/*    }*/}
                                                        {/*</DropdownItem>*/}

                                                        {/* Setting Icon */}
                                                        <DropdownItem
                                                            key="hide"
                                                            className={'dropdown-item border rounded'}
                                                        >
                                                            <SettingIcon/>
                                                            <label className="ks_lbl ks_fw_md m-2">Hide</label>
                                                        </DropdownItem>


                                                        <DropdownItem onClick={handleRemoveProject}
                                                                      className={'dropdown-item border rounded'}>
                                                            <LogoutIcon/>
                                                            <label className="ks_lbl ks_fw_md m-2">Remove</label>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                                {/*<div onClick={() => setIsStar(!isStar)}>*/}
                                                {/*    {*/}
                                                {/*        isStar ? <Star/> : <SavedStar/>*/}
                                                {/*    }*/}
                                                {/*</div>*/}
                                            </div>

                                        </div>
                                    ))
                                }
                            </>
                    }

                </div>
            </div>

            {/*{*/}
            {/*    isOpen && <ProjectItem handleClose={() => setIsOpen(false)}/>*/}
            {/*}*/}

        </>
    );
};

export default ProjectRectangleView;