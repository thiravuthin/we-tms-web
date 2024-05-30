"use client"
import React from 'react';
import LayoutGrid from "@/app/components/icons/LayoutGrid";
import Line from "@/app/components/icons/Line";
import List from "@/app/components/icons/List";

const HiddenHead = () => {
    return (
        <>
            <div
                className="ks_w100 ks_jt_cont_betw ks_alg_itm_ctr ks_brd_btm">
                <div className="ks_d_flex ks_pd_30">
                    <LayoutGrid/>
                    <div className="ks_pr_20 ks_pl_20">
                        <Line/>
                    </div>

                    <List/>
                </div>
                <label className="ks_fs22 ks_fw_bd ks_cs_pointer ks_pl_30">
                    Hidden
                </label>
            </div>
        </>
    );
};

export default HiddenHead;