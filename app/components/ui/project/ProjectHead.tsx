import React from 'react';
import LayoutGrid from "@/app/components/icons/LayoutGrid";
import Line from "@/app/components/icons/Line";
import List from "@/app/components/icons/List";
import ProjectSearch from "@/app/components/ui/project/ProjectSearch";
import {usePathname} from "next/navigation";
import ProjectItem from "@/app/components/ui/project/ProjectItem";
import ProjectRectangleView from "@/app/components/ui/project/ProjectRectangleView";

const ProjectHead = () => {
    const pathname = usePathname();
    const urlParam = new URLSearchParams();

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
        </>
    );
};

export default ProjectHead;