"use client"
import React from 'react';
import cn from 'clsx'
import PrevPage from "@/app/components/icons/PrevPage";
import NextPage from "@/app/components/icons/NextPage";
import {UserPagination} from "@/app/components/ui/settings/users/UserPagination";
const PaginationLanguageComponent = ({data: {total_pages, current_page, size, first, last, total_elements}, page}: { data: UserPagination, page: (pageNumber?: number, pageSize?: number) => void }) => {

    console.log("total : ", total_elements)
    console.log("size : ", size)
    return (
        <div className="w-100 ks_d_flex ks_jt_cont_betw p-3">
            <div className="ks_d_flex ks_alg_itm_ctr d-flex">
                <div className="showing-container">
                    <label htmlFor="items-per-page">Showing:</label>
                    <select defaultValue={size} id="items-per-page" className="p-2" onChange={(e) => {
                        e.preventDefault();
                        page(0, Number(e.target.value));
                    }}>
                        {[10, 25, 50, 100].map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                    <span><label className={"mx-2"}>of</label> <span>{total_elements}</span></span>
                </div>
            </div>
            <div className="w-20 d-flex justify-content-between">
                <div className="pagination">
                    <a
                        className={cn("pagination-button prev", {'disabled-page': first})}
                        onClick={async () => {
                            page(current_page - 1, size);
                        }}
                        aria-label="Previous"
                    >
            <span title="previous">
                <PrevPage/>
            </span>
                        Previous
                    </a>
                    <button className="pagination-number active">{current_page + 1}</button>
                    <label className="text-16 fw-bold">{(current_page + 1) + 1}</label>
                    <a
                        className={cn("pagination-button next", {'disabled-page': last})}
                        onClick={async () => {
                            page(current_page + 1, size);
                        }}
                        aria-label="Next"
                    >
                        Next
                        <span title="next">
                <NextPage />
            </span>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default PaginationLanguageComponent;