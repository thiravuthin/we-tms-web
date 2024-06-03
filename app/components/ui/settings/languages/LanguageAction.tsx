import React, {useState} from 'react';
import {Row} from "@tanstack/react-table";
import {useLanguageStore} from "@/app/lib/store";
import {LanguageData} from "@/app/lib/types/LanguageRequest";
import DeleteIcon from "@/app/components/icons/DeleteIcon";
import EditUserIcon from "@/app/components/icons/EditUserIcon";
import {isNullOrWhiteSpace} from "typescript-string-operations";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
    setSelectedData: (id: number | null) => void;
    handleEditLanguageClick: (lang_code: string) => void;
    handleDeleteLanguageClick: () => void;
}

function LanguageAction<TData>({row, handleDeleteLanguageClick, handleEditLanguageClick}: DataTableRowActionsProps<TData>) {

    const data = row.original as LanguageData;
    const {setIsUpdate, setUpdateData} = useLanguageStore(state => state);
    const showDelete = isNullOrWhiteSpace(data.numbering);

    const handleEditClick = () => {
        setIsUpdate(true);
        setUpdateData(row?.original); // Store the language data for updating
        handleEditLanguageClick(data.lang_cd); // This function will be passed from the parent component
    };

    return (
        <div className="ks-wt-tbl-data-act-container ks_d_flex ks_alg_itm_ctr">
            {
                showDelete && (
                    <>
                        <div role="button" onClick={
                            handleDeleteLanguageClick
                        }
                             data-bs-toggle="tooltip"
                             data-bs-title="issue"
                             className="ks-wt-tbl-data-act-itm">
                            <DeleteIcon/>
                        </div>
                        <div className="ks-wt-line"></div>
                    </>
                )}
            <div role="button" onClick={handleEditClick} className="ks-wt-tbl-data-act-itm">
                <EditUserIcon/>
            </div>
        </div>
    );
}

export default LanguageAction;