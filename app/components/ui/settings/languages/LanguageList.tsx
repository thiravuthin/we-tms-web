import React, {useReducer, useState} from 'react';
import DataTable from "@/app/components/shared/DataTable";
import {getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {defaultColumns} from "@/app/components/ui/settings/languages/columns_language";
import AddLanguageForm from "@/app/components/ui/settings/languages/AddLanguageForm ";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {languagesService} from "@/service/language.service";
import {useLanguageStore, useUserStore} from "@/app/lib/store";
import LanguageAction from "@/app/components/ui/settings/languages/LanguageAction";
import PaginationLanguageComponent from "@/app/components/ui/settings/languages/PaginationLanguageComponent";


interface Language {
    name: string;
    abbreviations: string;
    register_date: string;
}

const LanguageList: React.FC = () => {
    const queryClient = useQueryClient();
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [isAddingLanguage, setIsAddingLanguage] = useState(false);
    const [updateLanguage, setUpdateLanguage] = useState<Language | null>(null);
    const { setIsUpdate, setUpdateData } = useLanguageStore(state => state);
    const [, setSelectedData] = useState<number | null>(null);
    const { data, isLoading, isError } = useQuery({
        queryKey: ["language", { pageNumber, pageSize } ],
        queryFn: async () => languagesService.getLanguages(pageNumber, pageSize)
    })
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
            queryClient.invalidateQueries({queryKey: ["language"]});
            return;

        }else {
            setIsAddingLanguage(false);
            setLanguages(prev => [...prev, {...newLanguage, register_date: new Date().toISOString().split('T')[0]}]);
            queryClient.invalidateQueries({queryKey: ["language"]});
        }
    };

    const table = useReactTable({
        data: data?.data,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
    })

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
                    <div
                        className="d-flex flex-column p-4"
                        style={{height: '100vh'}}
                    >
                        {/* Head */}
                        <div className="d-flex flex-row align-items-center justify-content-between mb-3">
                            <h5>Languages</h5>
                            <button onClick={handleAddLanguageClick} className="btn btn-primary">+ Add Language</button>
                        </div>

                        {/* Table */}
                        <div className="d-flex flex-column">
                            <div className="ks_table_wrapper">
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
                    </div>
                )
                :
                (
                    <AddLanguageForm onAddLanguage={handleSaveLanguage} onCancel={handleCancel}/>
                )}
        </>
    );
}

export default LanguageList;
