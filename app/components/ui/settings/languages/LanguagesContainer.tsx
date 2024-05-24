'use client'

import {useState} from "react";
import LanguageList from "@/app/components/ui/settings/languages/LanguageList";

interface Language {
    name: string;
    abbreviation: string;
    date: string;
}

const LanguagesContainer = () => {

    const [languages, setLanguages] = useState<Language[]>([]);

    const handleSaveLanguage = (newLanguage: Omit<Language, 'date'>) => {
        const newLanguageWithDate = { ...newLanguage, date: new Date().toLocaleString() };
        setLanguages([...languages, newLanguageWithDate]);
    };

    return (
        <div className=" ks-wt-modal-wrapper ">
            <LanguageList onSaveLanguage={handleSaveLanguage} />
        </div>
    );
};

export default LanguagesContainer;