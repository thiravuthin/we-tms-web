'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {useProjectStore} from "@/app/lib/store";
import RightArrow from "@/app/components/icons/RightArrow";
import Members from "@/app/components/ui/project/ProjectDetail/Members";
import DropdownTranslateKey from "@/app/components/ui/project/ProjectDetail/DropdownTranslateKey";

const ProjectTranslate = () => {
    const  router = useRouter();
    const {data}= useProjectStore();
    console.log("data",data)
    return (
        <>
            <div className="ks_d_flex ks_pl_30">
                <div className="ks_pt_20 ks_w80 ks_pr_30">
                    <div className="ks_d_flex ks_alg_itm_ctr">
                        <label className="ks_fs20 ks_fw_bd ks_cs_pointer ks-silver ks-pr-15"
                               onClick={() => router.push(`/projects`)}>
                            Project
                        </label>
                        <RightArrow/>
                        <label className="ks_fs20 ks_fw_bd ks_cs_pointer ks-pl-15">{data?.project_name}</label>
                    </div>

                    <div className="ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr ks_pt_25">
                        <div className="ks_d_flex ks_alg_itm_ctr">
                            <div className="ks_btn_pm_cld ks_d_flex ks_jt_cont_betw ks_pd_10 ks_alg_itm_ctr">
                                <div className="ks-pl-5">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V15C3 15.4142 3.33579 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V4.5C15 4.08579 14.6642 3.75 14.25 3.75H3.75ZM1.5 4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H14.25C15.4926 2.25 16.5 3.25736 16.5 4.5V15C16.5 16.2426 15.4926 17.25 14.25 17.25H3.75C2.50736 17.25 1.5 16.2426 1.5 15V4.5Z"
                                              fill="#0F172A"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12 0.75C12.4142 0.75 12.75 1.08579 12.75 1.5V4.5C12.75 4.91421 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91421 11.25 4.5V1.5C11.25 1.08579 11.5858 0.75 12 0.75Z"
                                              fill="#0F172A"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M6 0.75C6.41421 0.75 6.75 1.08579 6.75 1.5V4.5C6.75 4.91421 6.41421 5.25 6 5.25C5.58579 5.25 5.25 4.91421 5.25 4.5V1.5C5.25 1.08579 5.58579 0.75 6 0.75Z"
                                              fill="#0F172A"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M1.5 7.5C1.5 7.08579 1.83579 6.75 2.25 6.75H15.75C16.1642 6.75 16.5 7.08579 16.5 7.5C16.5 7.91421 16.1642 8.25 15.75 8.25H2.25C1.83579 8.25 1.5 7.91421 1.5 7.5Z"
                                              fill="#0F172A"/>
                                    </svg>
                                </div>
                                <label className="ks_fs15">Jan 20, 2024 - Apr 02, 2024</label>
                            </div>
                            <div className="ks-pl-10">
                                <input type="text" className="ks_form_input ks_form_search_input"
                                       placeholder="search..."
                                       />
                            </div>
                        </div>

                        <div className="">
                            <DropdownTranslateKey />
                        </div>
                    </div>

                    <div className="ks_pt_20">

                    </div>


                    {/*<div className={"d-flex gap-1"}>*/}
                    {/*</div>*/}
                </div>
                <Members/>
            </div>


        </>
    );
};

export default ProjectTranslate;