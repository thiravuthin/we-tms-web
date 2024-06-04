"use client"
import React from 'react';
import {useProjectStore} from "@/app/lib/store";
import CreateProjects from "@/app/components/ui/project/CreateProjects";
import ProjectList from "@/app/components/ui/project/ProjectList";
import ProjectItem from "@/app/components/ui/project/ProjectItem";

export const ProjectContainer = () => {

    const {isCreate, isView, data, isOpen, setIsOpen, isUpdate, setIsCreate} = useProjectStore(state => state);


    return (
        <>
            <div className="w-auto d-flex flex-column p-5">

                {/* project and btn add */}
                <div className={'d-flex flex-row justify-content-between align-items-center py-4'}>
                    <div>
                        <label className="ks_fs22 ks_fw_bd ks_cs_pointer">
                            Projects
                        </label>
                    </div>

                    <div>
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
                </div>

                {/* Line*/}
                <div className={'color_black'}>
                    <br />
                </div>

                {/* List of Card Project*/}
                <ProjectList/>
            </div>

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