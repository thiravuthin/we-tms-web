'use client'
import React, {useReducer, useState} from 'react';
import DataTable from "@/app/components/shared/DataTable";
import Pagination from "rc-pagination";
import {getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {defaultColumns} from "@/app/components/ui/settings/languages/columns_language";
import AddLanguageForm from "@/app/components/ui/settings/languages/AddLanguageForm ";
import useFetch_languages from "@/app/lib/hooks/useFetch_languages";
import {useQuery} from "@tanstack/react-query";
import {languagesService} from "@/service/language.service";

interface Language {
    name: string;
    abbreviations: string;
    register_date: string;
}

const LanguageList: React.FC = () => {

    const data = useQuery({
        queryKey: ["language"],
        queryFn: languagesService.getLanguages
    })

    console.log("data :: ", data?.data)

    const [languages, setLanguages] = useState<Language[]>(data?.data);

    // console.log("languages::" , languages.map())

    const [isAddingLanguage, setIsAddingLanguage] = useState(false);

    const handleAddLanguageClick = () => {
        setIsAddingLanguage(true);
    };

    const handleCancel = () => {
        setIsAddingLanguage(false);
    };

    const handleSaveLanguage = (newLanguage: Omit<Language, 'register_date'>) => {
        setIsAddingLanguage(false);
        console.log("newLanguage:: ", newLanguage.abbreviations)
        setLanguages(prev => [...prev, {...newLanguage, register_date: new Date().toISOString().split('T')[0]}]);
    };

    const table = useReactTable({
        data: languages,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
    })

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
                                <DataTable table={table}/>
                            </div>
                            <Pagination/>
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
