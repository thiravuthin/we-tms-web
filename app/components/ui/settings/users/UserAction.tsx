import { Row } from "@tanstack/react-table";
import React from "react";
import { User } from "@/app/lib/types/user";
import { isNullOrWhiteSpace } from "typescript-string-operations";
import DeleteIcon from "@/app/components/icons/DeleteIcon";
import EditUserIcon from "@/app/components/icons/EditUserIcon";
import { useUserStore } from "@/app/lib/store";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
    handleEditUserClick: (userId: number) => void;
    triggerDeleteDialog: () => void;
}

function UserAction<TData>({ row, handleEditUserClick, triggerDeleteDialog }: DataTableRowActionsProps<TData>) {
    const data = row.original as User;
    const showDelete = isNullOrWhiteSpace(data.numbering);
    const { setIsUpdate, setUpdateData } = useUserStore(state => state);

    const handleEditClick = () => {
        setIsUpdate(true);
        setUpdateData(row?.original);
        handleEditUserClick(data.id);
    };

    return (
        <div className="ks-wt-tbl-data-act-container ks_d_flex ks_alg_itm_ctr">
            {showDelete && (
                <>
                    <div role="button" onClick={triggerDeleteDialog} data-bs-toggle="tooltip"
                         data-bs-title="issue" className="ks-wt-tbl-data-act-itm">
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

export default UserAction;
