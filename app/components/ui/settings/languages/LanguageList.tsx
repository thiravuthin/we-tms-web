'use client'
import React, {useState} from 'react';
import DataTable from "@/app/components/shared/DataTable";
import {getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {defaultColumns} from "@/app/components/ui/settings/languages/columns_language";
import AddLanguageForm from "@/app/components/ui/settings/languages/AddLanguageForm ";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {languagesService} from "@/service/language.service";
import {useLanguageStore} from "@/app/lib/store";
import LanguageAction from "@/app/components/ui/settings/languages/LanguageAction";
import PaginationLanguageComponent from "@/app/components/ui/settings/languages/PaginationLanguageComponent";
import useFetch_languages from "@/app/lib/hooks/useFetch_languages";
import DeleteDialog from "@/app/components/ui/settings/users/DeleteDialog";
import toast from "react-hot-toast";

interface Language {
    name: string;
    abbreviations: string;
    register_date: string;
}

const LanguageList = () => {

    const queryClient = useQueryClient();
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [isAddingLanguage, setIsAddingLanguage] = useState(false);
    const [updateLanguage, setUpdateLanguage] = useState<Language | null>(null);
    const {setIsUpdate, setUpdateData} = useLanguageStore(state => state);
    const [, setSelectedData] = useState<number | null>(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<any | null>(null);

    const {
        data,
        isError,
        isLoading
    } = useFetch_languages({
        page_number: pageNumber,
        page_size: pageSize
    });

    const [languages, setLanguages] = useState<Language[]>(data?.data || []);

    const handleUpdateLanguage = (language: Language) => {
        setUpdateLanguage(language);
        setIsAddingLanguage(true);
        setIsUpdate(true);
    }
    const handleAddLanguageClick = () => {
        setIsAddingLanguage(true);
        setIsUpdate(false);
        setUpdateData(null);

    };

    const handleDeleteLanguageClick = useMutation({
        mutationFn: (lang_cd: any[]) => languagesService.deleteLanguage(lang_cd),
        onSuccess: async () => {
            toast.success("Language has been removed.")
            queryClient.invalidateQueries({queryKey: ['languages']})
            setShowDeleteDialog(false)
        },
        onError: () => {
            toast.error("Error deleting language")
        }
    });

    const handleCancel = () => {
        setIsAddingLanguage(false);
    };

    const handleSaveLanguage = (newLanguage: Omit<Language, 'register_date'>) => {
        if (updateLanguage) {
            const updatedLanguages = languages.map(language => {
                if (language.abbreviations === updateLanguage.abbreviations) {
                    return {...newLanguage, register_date: new Date().toISOString().split('T')[0]};
                }
                return language;
            });
            setLanguages(updatedLanguages);
            queryClient.invalidateQueries({queryKey: ["languages"]});
            return;

        } else {
            setIsAddingLanguage(false);
            setLanguages(prev => [...prev, {...newLanguage, register_date: new Date().toISOString().split('T')[0]}]);
            queryClient.invalidateQueries({queryKey: ["languages"]});
        }
    };

    const table = useReactTable({
        data: data?.data,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
    })

    const handleDeleteLange = async () => {
        if (selectedLanguage !== null) {
            handleDeleteLanguageClick.mutate([selectedLanguage]);
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
            {!isAddingLanguage
                ? (
                    <>
                        <div className="ks-wt-modal-wrapper ks_d_flex ks_flex_col ks_flex_row_fluid ks_h100vh p-4">

                            {/* Head */}
                            <div className="d-flex flex-row align-items-center justify-content-between mb-3">
                                <h5>Languages</h5>
                                <button onClick={handleAddLanguageClick} className="btn btn-primary">+ Add Language
                                </button>
                            </div>

                            {/* Table */}
                            <div className="ks_scrollable ks_h100 border rounded">
                                <DataTable
                                    table={table}
                                    rowActions={(data) => (
                                        <LanguageAction
                                            row={data}
                                            setSelectedData={setSelectedData}
                                            handleEditLanguageClick={() => handleUpdateLanguage({
                                                ...data.original,
                                                abbreviations: data.original.lang_cd,
                                                register_date: data.original.regi_dtm,
                                            })}
                                            handleDeleteLanguageClick={() => {
                                                setSelectedLanguage(data.original.lang_cd);
                                                setShowDeleteDialog(true)
                                            }
                                            }
                                        />
                                    )}
                                />
                            </div>
                            <PaginationLanguageComponent
                                data={data?.pagination}
                                page={(number, size) => {
                                    setPageNumber(number!);
                                    setPageSize(size!);
                                }}
                            />
                        </div>

                        {showDeleteDialog && (
                            <DeleteDialog
                                isOpen={showDeleteDialog}
                                setIsOpen={setShowDeleteDialog}
                                handleDelete={handleDeleteLange}
                            />
                        )}
                    </>
                )
                :
                (
                    <AddLanguageForm onAddLanguage={handleSaveLanguage} onCancel={handleCancel}/>
                )}
        </>
    );
}

export default LanguageList;
