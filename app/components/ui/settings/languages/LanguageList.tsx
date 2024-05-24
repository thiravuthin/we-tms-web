'use client'
import React, {useState} from 'react';
import DataTable from "@/app/components/shared/DataTable";
import Pagination from "rc-pagination";
import {getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {defaultColumns} from "@/app/components/ui/settings/languages/columns_language";
import AddLanguageForm from "@/app/components/ui/settings/languages/AddLanguageForm ";


const dataMock = [
    {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    },
    {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    },
    {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    }, {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    }, {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    }, {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    }, {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    }, {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    }, {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    }, {
        "name": "WeTax",
        "abbreviatons": "Korean",
        "register_date": "07072024"
    }
]

interface Language {
    name: string;
    abbreviation: string;
    date: string;
}

interface LanguageListProps {
    onSaveLanguage: (newLanguage: Omit<Language, 'date'>) => void;
}

const LanguageList: React.FC<LanguageListProps> = ({onSaveLanguage}) => {

    const [isAddingLanguage, setIsAddingLanguage] = useState(false);

    const handleAddLanguageClick = () => {
        setIsAddingLanguage(true);
    };

    const handleCancel = () => {
        setIsAddingLanguage(false);
    };

    const handleSaveLanguage = (newLanguage: Omit<Language, 'date'>) => {
        onSaveLanguage(newLanguage);
        setIsAddingLanguage(false);
    };

    const table = useReactTable({
        data: dataMock,
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <>
            {!isAddingLanguage
            ? (
                <div
                    className=" d-flex flex-column p-4 f"
                    style={{height: '100vh'}}
                >
                    {/* Head */}
                    <div className="d-flex flex-row align-items-center justify-content-between mb-3">
                        <h5>Languages</h5>
                        <button onClick={handleAddLanguageClick} className="btn btn-primary">+ Add Language</button>
                    </div>

                    {/* Table*/}
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
