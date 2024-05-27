'use client'
import React from 'react';
import {useForm} from "react-hook-form";
import IconNextStep from "@/app/components/icons/IconNextStep";
import {languagesService} from "@/service/language.service";
import {useMutation} from "@tanstack/react-query";
import {LanguageRequest} from "@/app/lib/types/LanguageRequest";
import toast from "react-hot-toast";
import {yupResolver} from "@hookform/resolvers/yup";
import {createLanguageSchema} from "@/app/validators/language.schema";


interface AddLanguageFormProps {
    onAddLanguage: (newLanguage: { name: string; abbreviation: string }) => void;
    onCancel: () => void;
}

const AddLanguageForm: React.FC<AddLanguageFormProps> = ({onAddLanguage, onCancel}) => {

    console.log("onAddLanguage:: ", onAddLanguage.name)

    const {
        reset,
        handleSubmit,
        register,
        formState: {
            errors,
            isValid,
            isValidating
        },
    } = useForm({
        resolver: yupResolver(createLanguageSchema),
        values: {
            name: '',
            lang_cd: ''
        }
    });

    /* Call Service */
    const mutation = useMutation({
        mutationFn: (data: LanguageRequest) => {
            return languagesService.createLanguages(data)
        },
        onMutate: () => {
            toast.loading("Loading...");
        },
        onError: (error) => {
            toast.error(error?.message || 'An error occurred');
        },
        onSuccess: () => {
            toast.success('Language created successfully!');
            reset(); // Reset the form after successful submission
        },
        onSettled: () => {
            toast.dismiss();
        }
    })

    const submit = (data: any) => {

        const reqBody: LanguageRequest = {
            name: data?.name,
            lang_cd: data?.lang_cd
        }

        mutation.mutate(
            reqBody,
            {
                onSuccess: () => {
                    toast.success('success create')
                },
                onError: (error: any) => {
                    toast.error(error?.message || 'An error occurred');
                }
            }
        )
    };

    return (
        <form onSubmit={handleSubmit(submit)}
              className="add-language-form p-4"
        >
            <div className={'d-flex flex-row justify-content-between  align-content-center align-items-center'}>
                {/**/}
                <div className={'d-flex'}>
                    <h5 className={'text-secondary'}>Users</h5>
                    <IconNextStep/>
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
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </div>

            {/**/}
            <div className={'d-flex flex-row justify-content-evenly w-100'}>
                <label className={'w-50 '}>Name</label>
                <label className={'w-50 '}>Abbreviation</label>
            </div>

            {/**/}
            <div className={'d-flex flex-row justify-content-evenly w-100'}>
                <div className={'w-50 me-2'}>
                    <input
                        type="text"
                        placeholder="Country name"
                        className="form-control "
                        aria-label="Country name"
                        {
                            ...register('name', {
                            required: 'Name must not be empty'
                        })}
                    />
                    {errors.name && <span className={'text-danger mt-2'}>{errors.name.message}</span>}
                </div>

                {/*<IconErrorInput/>*/}
                <div className={'w-50 me-2'}>
                    <input
                        aria-label={"EN | KM | ..."}
                        className={'form-control'}
                        type="text"
                        placeholder="EN | KM | ..."
                        {
                            ...register('lang_cd')
                        }
                    />
                    {errors.lang_cd && <span className={'text-danger mt-2'}>{errors.lang_cd.message}</span>}
                </div>
            </div>
        </form>
    );
};

export default AddLanguageForm;
