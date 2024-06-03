import React from 'react';
import InviteUserIcon from "@/app/components/icons/InviteUserIcon";
import ProjectSearch from "@/app/components/ui/project/ProjectSearch";
import UserViewCard from "@/app/components/ui/project/ProjectDetail/UserViewCard";

const Members = () => {
    return (
        <>
            <div className="ks_w30 ks_brd_left_832">
                <div className="ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr ks_pd_20 ks_brd_btm">
                    <label className="ks_fs18 ks_fw_bd">Members 1</label>
                    <div className="">
                        <button className="btn btn-primary ks_d_flex ks_alg_itm_ctr" aria-expanded="false">
                            <InviteUserIcon/>
                            <label className="ks-pl-5 ks_fs16">Invite User</label>
                        </button>
                    </div>
                </div>
                <div className="ks_pd_20 ks_brd_btm">
                    <ProjectSearch/>
                </div>
                <div className="ks_pd_20">
                    <label className="ks-silver ks_fs13">SYSTEM ADMIN</label>
                    <UserViewCard />
                    <UserViewCard />
                    <UserViewCard />
                </div>

            </div>
        </>
    );
};

export default Members;