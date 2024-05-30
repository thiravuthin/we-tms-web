"use client"
import React from 'react';

const BookmarkHead = () => {
    return (
        <>
            <div
                className="ks_w100 ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr ks_plr300 ks_brd_btm ks_pd_30">
                <label className="ks_fs22 ks_fw_bd ks_cs_pointer">
                    Bookmarks
                </label>
                <button className="btn btn-primary" aria-expanded="false">
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
                    Add Bookmark
                </button>
            </div>
        </>
    );
};

export default BookmarkHead;