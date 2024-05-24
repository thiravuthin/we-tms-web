'use client'

import {useState} from "react";
import LanguageList from "@/app/components/ui/settings/languages/LanguageList";
import AddLanguageForm from "@/app/components/ui/settings/languages/AddLanguageForm ";

interface Language {
    name: string;
    abbreviation: string;
    date: string;
}

const LanguagesContainer = () => {

    const [languages, setLanguages] = useState<Language[]>([]);
    const [isAddingLanguage, setIsAddingLanguage] = useState(false);

    const handleAddLanguageClick = () => {
        setIsAddingLanguage(true);
    };

    const handleAddLanguage = (newLanguage: Omit<Language, 'date'>) => {
        const newLanguageWithDate = { ...newLanguage, date: new Date().toLocaleString() };
        setLanguages([...languages, newLanguageWithDate]);
        setIsAddingLanguage(false);
    };

    const handleCancel = () => {
        setIsAddingLanguage(false);
    };

    return (
        <div className=" ks-wt-modal-wrapper">
            {isAddingLanguage
            ? (
                <AddLanguageForm onAddLanguage={handleAddLanguage}
                                 onCancel={handleCancel}
                />
            ) : (
                <LanguageList languages={languages}
                                onAddLanguageClick={handleAddLanguageClick}
                />
            )}
        </div>
    );
};

export default LanguagesContainer;