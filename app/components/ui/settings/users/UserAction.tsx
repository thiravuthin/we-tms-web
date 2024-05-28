import { Row } from "@tanstack/react-table";
import React, { useState } from "react";
import { User } from "@/app/lib/types/user";
import { isNullOrWhiteSpace } from "typescript-string-operations";
import DeleteIcon from "@/app/components/icons/DeleteIcon";
import EditUserIcon from "@/app/components/icons/EditUserIcon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/service/user.service";
import toast from "react-hot-toast";
import DeleteDialog from "@/app/components/ui/settings/users/DeleteDialog";
import {useUserStore} from "@/app/lib/store";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
    setSelectedUser: (id: number | null) => void;
    handleEditUserClick: (userId: number) => void;
}

function UserAction<TData>({ row, setSelectedUser, handleEditUserClick }: DataTableRowActionsProps<TData>) {
    const queryClient = useQueryClient();
    const data = row.original as User;
    const showDelete = isNullOrWhiteSpace(data.numbering);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const { setIsUpdate, setUpdateData } = useUserStore(state => state);
    const [activeComponent, setActiveComponent] = useState<'userList' | 'addNewUser'>('userList');

    const handleEditClick = () => {
        setIsUpdate(true);
        setUpdateData(row?.original);
        handleEditUserClick(data.id);
    };

    const handleDeleteUserMutate = useMutation({
        mutationFn: (user_ids: number[]) => userService.deleteUser(user_ids),
        onSuccess: async () => {
            toast.success("User deleted successfully")
            queryClient.invalidateQueries({ queryKey: ['users'] })
            setShowDeleteDialog(false)
        }
    });

    const handleDeleteUser = async () => {
        handleDeleteUserMutate.mutate([data.id]);
    };

    return (
        <>
            <DeleteDialog
                isOpen={showDeleteDialog}
                setIsOpen={setShowDeleteDialog}
                handleDeleteUser={handleDeleteUser}
            />

            <div className="ks-wt-tbl-data-act-container ks_d_flex ks_alg_itm_ctr">
                {showDelete && (
                    <>
                        <div role="button" onClick={() => setShowDeleteDialog(true)} data-bs-toggle="tooltip"
                             data-bs-title="issue" className="ks-wt-tbl-data-act-itm">
                            <DeleteIcon/>
                        </div>
                        <div className="ks-wt-line"></div>
                    </>
                )}
                {/*<div role="button" onClick={(e) => {*/}
                {/*    e.stopPropagation();*/}
                {/*    // setActiveComponent('addNewUser');*/}
                {/*    setIsUpdate(true);*/}
                {/*    setUpdateData(row.original);*/}
                {/*}} className="ks-wt-tbl-data-act-itm">*/}
                <div role="button" onClick={handleEditClick} className="ks-wt-tbl-data-act-itm">
                    <EditUserIcon/>
                </div>
            </div>
        </>
    );
}

export default UserAction;
