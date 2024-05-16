import React from 'react';

export const metadata = {
    title: 'WeTMS | Favorites',
    description: 'Generated by Next.js',
}
const FavoritePage = () => {
    return (
        <div>
            <div
                className="ks_w100 ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr ks_plr300 ks_brd_btm ks_pt_30 ks_pr_20 ks_pb_30 ks_pl_20">
                <label className="ks_fs22 ks_fw_bd ks_cs_pointer">
                    Favorites
                </label>
                <button className="ks_btn ks_btn_pm" aria-expanded="false">
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
                    Add Favorite
                </button>
            </div>
        </div>
    );
};

export default FavoritePage;