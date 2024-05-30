"use client"
import React from 'react';
import {useProjectStore} from "@/app/lib/store";
import CreateProjects from "@/app/components/ui/project/CreateProjects";
import ProjectHeadList from "@/app/components/ui/project/ProjectHeadList";
import ProjectItem from "@/app/components/ui/project/ProjectItem";

const ProjectHead = () => {
    const {isCreate, isView, data, isOpen, setIsOpen, isUpdate, setIsCreate} = useProjectStore(state => state);
    return (
        <>
            <div className="ks_w100 ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr ks_brd_btm ks_pd_30">
                <label className="ks_fs22 ks_fw_bd ks_cs_pointer">
                    Projects
                </label>
                <button
                    className="btn btn-primary"
                    aria-expanded="false"
                    onClick={() => {
                        setIsCreate(true)
                    }}
                >
                    <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 3.33594V12.6693"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.3335 8H12.6668"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Add Project
                </button>
            </div>
            <ProjectHeadList />

            {
                isCreate && <CreateProjects handleClose={() => setIsCreate(false)}/>
            }

            {
                isUpdate && <CreateProjects handleClose={() => setIsCreate(false)}/>
            }

            {
                isOpen && isView && <ProjectItem handleClose={() => setIsOpen(false)}/>
            }

        </>
    );
};

export default ProjectHead;