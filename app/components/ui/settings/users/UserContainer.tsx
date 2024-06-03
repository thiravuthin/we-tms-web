import React, { useState } from 'react';
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DefaultColumns } from "@/app/components/ui/settings/users/DefaultColumns";
import PlusIcon from "@/public/asset/icon/PlusIcon";
import DataTable from "@/app/components/shared/DataTable";
import UserAction from "@/app/components/ui/settings/users/UserAction";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/service/user.service";
import toast from "react-hot-toast";
import AddNewUser from "@/app/components/ui/settings/users/AddNewUser";
import { useUserStore } from "@/app/lib/store";
import PaginationUserComponent from "@/app/components/ui/settings/users/PaginationUserComponent";
import DeleteDialog from "@/app/components/ui/settings/users/DeleteDialog";

const UserContainer = () => {
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [activeComponent, setActiveComponent] = useState<'userList' | 'addNewUser'>('userList');
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState<number | null>(null);
    const queryClient = useQueryClient();
    const { setIsUpdate, setUpdateData } = useUserStore(state => state);

    const handleAddUserClick = () => {
        setIsUpdate(false);
        setUpdateData(null);
        setActiveComponent('addNewUser');
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ["users", { pageNumber, pageSize }],
        queryFn: async () => await userService.getUsers(pageNumber, pageSize)
    });

    const table = useReactTable({
        data: data?.data?.users,
        columns: DefaultColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    const handleDeleteUserMutate = useMutation({
        mutationFn: (user_ids: number[]) => userService.deleteUser(user_ids),
        onSuccess: async () => {
            toast.success("User has been removed.");
            queryClient.invalidateQueries({ queryKey: ['users'] });
            setShowDeleteDialog(false);
        }
    });

    const handleDeleteUser = async () => {
        if (selectedUser !== null) {
            handleDeleteUserMutate.mutate([selectedUser]);
        }
    };

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error</span>;
    }

    return (
        <>
            {activeComponent === 'userList' ? (
                <div className="ks-wt-modal-wrapper ks_d_flex ks_flex_col ks_flex_row_fluid ks_h100vh bg-primary">
                    <div className="ks-wt-modal-toolbar-container ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr">
                        <label className={"ks_fw_bd"}>User</label>

                        <div className="ks-wt-modal-toolbar-action-user-container">
                            <button className="ks_btn ks_btn_icon_pm" type="button" onClick={handleAddUserClick}>
                                <PlusIcon/> Add User
                            </button>
                        </div>
                    </div>

                    <div className="ks_scrollable ks_h100">
                        <DataTable
                            table={table}
                            rowActions={(data) => (
                                <UserAction
                                    row={data}
                                    handleEditUserClick={() => setActiveComponent('addNewUser')}
                                    triggerDeleteDialog={() => {
                                        setSelectedUser(data.original.id);
                                        setShowDeleteDialog(true);
                                    }}
                                />
                            )}
                        />
                    </div>
                    <PaginationUserComponent
                        data={data?.data?.pagination}
                        page={(number, size) => {
                            setPageNumber(number!);
                            setPageSize(size!);
                        }}
                    />
                </div>
            ) : activeComponent === 'addNewUser' ? (
                <AddNewUser/>
            ) : null}

            {showDeleteDialog && (
                <DeleteDialog
                    isOpen={showDeleteDialog}
                    setIsOpen={setShowDeleteDialog}
                    handleDelete={handleDeleteUser}
                />
            )}
        </>
    );
};

export default UserContainer;
