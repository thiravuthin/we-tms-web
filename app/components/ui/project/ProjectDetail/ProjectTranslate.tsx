'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import {useProjectStore} from "@/app/lib/store";

const ProjectTranslate = () => {
    const  router = useRouter();
    const {data}= useProjectStore();
    return (
        <>
            <div className="">
                <div className="">

                    <label className="ks_fs20 ks_fw_bd ks_cs_pointer ks_pl_30"
                           onClick={() => router.push(`/projects`)}>
                        Project
                    </label>

                    <svg className="ks_wth_16 ks_hgt24 ks_ml15 ks_mr10" viewBox="0 0 8 14">
                        <path
                            fill="#333333"
                            d="M7.16309 6.99805C7.16309 6.86621 7.13867 6.74414 7.08984 6.63184C7.04102 6.51953 6.96289 6.41211 6.85547 6.30957L1.49414 1.06543C1.32812 0.899414 1.12549 0.816406 0.88623 0.816406C0.720215 0.816406 0.568848 0.855469 0.432129 0.933594C0.300293 1.00684 0.195312 1.10938 0.117188 1.24121C0.0390625 1.37305 0 1.52197 0 1.68799C0 1.92725 0.090332 2.13965 0.270996 2.3252L5.06836 6.99805L0.270996 11.6709C0.090332 11.8564 0 12.0688 0 12.3081C0 12.4692 0.0390625 12.6157 0.117188 12.7476C0.195312 12.8843 0.300293 12.9917 0.432129 13.0698C0.568848 13.1479 0.720215 13.187 0.88623 13.187C1.12549 13.187 1.32812 13.104 1.49414 12.938L6.85547 7.68652C6.96777 7.58398 7.0459 7.47656 7.08984 7.36426C7.13867 7.25195 7.16309 7.12988 7.16309 6.99805Z"
                        />
                    </svg>
                    <label className="ks_fs20 ks_fw_bd ks_cs_pointer ">{data?.project_name}</label>
                </div>
                <div className={"d-flex gap-1"}>

                </div>
            </div>

        </>
    );
};

export default ProjectTranslate;