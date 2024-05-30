import React, {useState} from 'react';
import {Row} from "@tanstack/react-table";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {isNullOrWhiteSpace} from "typescript-string-operations";
import {useLanguageStore, useUserStore} from "@/app/lib/store";
import {Language, LanguageData} from "@/app/lib/types/LanguageRequest";
import toast from "react-hot-toast";
import DeleteIcon from "@/app/components/icons/DeleteIcon";
import EditUserIcon from "@/app/components/icons/EditUserIcon";
import {languagesService} from "@/service/language.service";
import DeleteDialog from "@/app/components/ui/settings/users/DeleteDialog";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>;
    setSelectedData: (id: number | null) => void;
    handleEditLanguageClick: (lang_code: string) => void;
}

function LanguageAction<TData>({row, setSelectedData, handleEditLanguageClick}: DataTableRowActionsProps<TData>) {
    const queryClient = useQueryClient();
    const data = row.original as LanguageData;
    const showDelete = isNullOrWhiteSpace(data.lang_cd);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const {setIsUpdate, setUpdateData} = useLanguageStore(state => state);

    const handleEditClick = () => {
        setIsUpdate(true);
        setUpdateData(row?.original); // Store the language data for updating
        handleEditLanguageClick(data.lang_cd); // This function will be passed from the parent component
    };

    const handleDeleteUserMutate = useMutation({
        mutationFn: (lang_cd: string[]) => languagesService.deleteLanguage(lang_cd),
        onSuccess: async () => {
            toast.success("Language deleted successfully")
            queryClient.invalidateQueries({queryKey: ['language']})
            setShowDeleteDialog(false)
        }
    });

    const handleDeleteLanguage = () => {
        handleDeleteUserMutate.mutate([data.lang_cd], {
            onSuccess: () => {
                toast.success("Language deleted successfully");
                queryClient.invalidateQueries({queryKey: ['language']});
                setShowDeleteDialog(false);
            },
            onError: (error) => {
            }
        });
    };
    return (
        <div>
            <>
                <DeleteDialog
                    isOpen={showDeleteDialog}
                    setIsOpen={setShowDeleteDialog}
                    handleDeleteUser={handleDeleteLanguage}
                />

                <div className="ks-wt-tbl-data-act-container ks_d_flex ks_alg_itm_ctr p-2">
                    <div className={"me-2"} onClick={handleEditClick}>
                        <EditUserIcon/>
                    </div>

                    <div>
                        <DeleteIcon/>
                    </div>

                </div>

            </>
        </div>
    );
};

export default LanguageAction;