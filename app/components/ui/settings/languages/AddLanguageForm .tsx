'use client'
import React, {useState} from 'react';
import IconErrorInput from "@/app/components/icons/IconErrorInput";

interface AddLanguageFormProps {
    onAddLanguage: (newLanguage: { name: string; abbreviation: string }) => void;
    onCancel: () => void;
}

const AddLanguageForm: React.FC<AddLanguageFormProps> = ({onAddLanguage, onCancel}) => {

    const [name, setName] = useState('');
    const [abbreviation, setAbbreviation] = useState('');
    const [errors, setErrors] = useState({ name: false, abbreviation: false });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name && abbreviation) {
            onAddLanguage({name, abbreviation});
            setName('');
            setAbbreviation('');
        }
    };

    return (
        <form onSubmit={handleSubmit}
              className="add-language-form p-4">

            <div className={'d-flex flex-row justify-content-between  align-content-center align-items-center'}>
                {/**/}
                <div className={'d-flex'}>
                    <h5 className={'text-secondary'}>Users</h5>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C12.0732 8.76256 12.0732 9.23744 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
                                  fill="#94A3B8"/>
                        </svg>
                    </div>
                    <h5>Create Language</h5>
                </div>

                {/**/}
                <div>
                    <button type="button"
                            onClick={onCancel}
                            className={'btn btn-primary me-2'}
                    >
                        Cancel
                    </button>
                    <button
                        className={'btn btn-primary'}
                        type="submit">
                        Save
                    </button>
                </div>
            </div>

            {/**/}
            <div className={'d-flex flex-row justify-content-evenly w-100'}>
                <label className={'w-50 m-lg-2'}>Name</label>
                <label className={'w-50 m-lg-2'}>Abbreviation</label>
            </div>

            {/**/}
            <div className={'d-flex flex-row justify-content-evenly w-100'}>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Country name"
                        className="form-control w-50 m-2"
                        aria-label="Country name"
                    />
                  {/*<IconErrorInput/>*/}


                <input
                    className={'w-50 m-2'}
                    type="text"
                    value={abbreviation}
                    onChange={(e) => setAbbreviation(e.target.value)}
                    placeholder="EN | KM | ..."
                />
            </div>
        </form>
    );
};

export default AddLanguageForm;
