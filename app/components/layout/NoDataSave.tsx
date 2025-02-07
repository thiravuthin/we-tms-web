"use client"
import React from 'react';

const NoDataSave = () => {
    return (
        <>
            <div className="ks_d_flex justify-content-center ks_mt_40">

                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.25 1.5H6.75C6.33579 1.5 6 1.83579 6 2.25V3.75C6 4.16421 6.33579 4.5 6.75 4.5H11.25C11.6642 4.5 12 4.16421 12 3.75V2.25C12 1.83579 11.6642 1.5 11.25 1.5Z"
                        stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M12 3H13.5C13.8978 3 14.2794 3.15804 14.5607 3.43934C14.842 3.72064 15 4.10218 15 4.5V15C15 15.3978 14.842 15.7794 14.5607 16.0607C14.2794 16.342 13.8978 16.5 13.5 16.5H4.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H6"
                        stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.25 8.25L6.75 12.75" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M6.75 8.25L11.25 12.75" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>

                <label className="ks_ml_5 ks-silver">No data to save</label>
            </div>
        </>
    );
};

export default NoDataSave;