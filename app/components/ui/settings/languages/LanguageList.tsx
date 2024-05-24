'use client'
import React from 'react';



interface Language {
    name: string;
    abbreviation: string;
    date: string;
}
interface LanguageListProps {
    languages: Language[];
    onAddLanguageClick: () => void;
}

const LanguageList: React.FC<LanguageListProps> = ({ languages, onAddLanguageClick }) => (

    <div className="language-list p-4">
        <div className={'d-flex flex-row align-items-center justify-content-between mb-3'}>
            <h5>Languages</h5>
            <button onClick={onAddLanguageClick}
                    className={'btn btn-primary'}>
                + Add Language
            </button>
        </div>

        {/* Table */}
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Abbreviation</th>
                <th>Register Date</th>
            </tr>
            </thead>
            <tbody>
            {languages.length > 0 ? (
                languages.map((language, index) => (
                    <tr key={index}>
                        <td>{language.name}</td>
                        <td>{language.abbreviation}</td>
                        <td>{language.date}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No data to show</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
);

export default LanguageList;
