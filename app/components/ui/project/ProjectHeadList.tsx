"use client"
import React from 'react';
import LayoutGrid from "@/app/components/icons/LayoutGrid";
import Line from "@/app/components/icons/Line";
import List from "@/app/components/icons/List";
import ProjectSearch from "@/app/components/ui/project/ProjectSearch";
import ProjectRectangleView from "@/app/components/ui/project/ProjectRectangleView";
import {useProjectStore} from "@/app/lib/store";

const ProjectHeadList = () => {
    const {isCreate, isUpdate,setIsCreate } = useProjectStore(state => state);

    const PROJECT_NAVIGATION = {
        items: [
            {
                id: 1,
                icon: <LayoutGrid/>
            }
        ]
    }
    const PROJECT_NAVIGATE = {
        items: [
            {
                id: 1,
                icon:  <List/>
            }
        ]
    }


    return (
        <>
            <div className="ks_d_flex ks_pd_30 ks_jt_cont_betw">
                <div className="ks_d_flex">
                    {
                        PROJECT_NAVIGATION.items.map((item) => (
                            <div key={item.id}>
                                {item.icon}
                            </div>
                        ))
                    }
                    <div className="ks_pr_20 ks_pl_20">
                        <Line/>
                    </div>
                    {
                        PROJECT_NAVIGATE.items.map((item) => (
                            <div key={item.id}>
                                {item.icon}
                            </div>
                        ))
                    }
                </div>

                <div>
                    <ProjectSearch/>
                </div>
            </div>
            <div className="ks_w100 ks_jt_cont_betw ks_alg_itm_ctr ks_brd_btm">
                <label className="ks_fs20 ks_fw_bd ks_cs_pointer ks_pl_30">
                    My Projects
                </label>
            </div>
            <ProjectRectangleView/>

            {/*{*/}
            {/*    isCreate && <CreateProjects handleClose={() => setIsCreate(false)}/>*/}
            {/*}*/}

            {/*{*/}
            {/*    isUpdate && <CreateProjects handleClose={() => setIsCreate(false)}/>*/}
            {/*}*/}
        </>
    );
};

export default ProjectHeadList;