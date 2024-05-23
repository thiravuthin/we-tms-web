import React from 'react';
import {getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {defaultColumns} from "@/app/components/ui/settings/languages/columns_language";
import DataTable from "@/app/components/shared/DataTable";
import Pagination from "rc-pagination";

const dataMock = [
    {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    }
]
const MyLanguageList = () => {

    const table = useReactTable({
        data: dataMock,
        columns: defaultColumns,
        // state: {
        //     rowSelection,
        //     columnVisibility,
        //     sorting,
        //     columnOrder,
        // },
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <div
            className="ks-wt-modal-wrapper d-flex flex-column"
            style={{height: '100vh'}}
        >
            <div className={'p-4 d-flex flex-row align-items-center justify-content-lg-between'}>
                <div>
                    <h5 className={'font-weight-bold'}>Languages</h5>
                </div>
                <div>
                    <button type="button"
                            className="btn btn-primary "
                    >
                        + Add Language
                    </button>
                </div>
            </div>

            <div className=" mx-4 ks_d_flex ks_flex_col ks_mt_auto ks_h100">
                {/* begin--ks-table-wrapper */}
                <div className="ks_table_wrapper ks_h100 ks_mt_12">
                    <DataTable table={table}
                    />
                </div>
                <Pagination/>
            </div>
        </div>
    );
};

export default MyLanguageList;