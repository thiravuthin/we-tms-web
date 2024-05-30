
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import IconNextStep from "@/app/components/icons/IconNextStep";
import {languagesService} from "@/service/language.service";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {LanguageRequest} from "@/app/lib/types/LanguageRequest";
import toast from "react-hot-toast";
import {yupResolver} from "@hookform/resolvers/yup";
import {createLanguageSchema} from "@/app/validators/language.schema";
import {useLanguageStore} from "@/app/lib/store";

interface AddLanguageFormProps {
    onAddLanguage: (newLanguage: { name: string; abbreviations: string }) => void;
    onCancel: () => void;
}

const AddLanguageForm: React.FC<AddLanguageFormProps> =  ({onAddLanguage, onCancel}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const queryClient = useQueryClient();
    const {isUpdate, updateData, setIsUpdate, setUpdateData} = useLanguageStore(state => state);
    const {
        reset,
        handleSubmit,
        register,
        formState: {
            errors
        },
    } = useForm({
        resolver: yupResolver(createLanguageSchema(isUpdate)),
        defaultValues: {
            name: updateData?.name || '',
            lang_cd: updateData?.abbreviations || ''
        }
    });

    // Service for creating and updating languages
    const mutation = useMutation({
        mutationFn: (data: LanguageRequest) => {
            if (isUpdate) {
                return languagesService.updateLanguages(updateData?.lang_cd, data);
            } else {
                return languagesService.createLanguages(data);
            }
        },
        onMutate: () => {
            toast.loading("Loading...");
            toast.dismiss()
        },
        onError: (error) => {
            toast.error(error?.message || 'An error occurred');
        },
        onSuccess: (data) => {
            if (isUpdate) {
                toast.success('Language updated successfully!');
            } else {
                toast.success('Language created successfully!');
            }
            reset(); // Reset the form after successful submission
            onAddLanguage({name: data.name, abbreviations: data.lang_cd});
            onCancel();
        },
    });

    const submit = (data: any) => {
        const reqBody: LanguageRequest = {
            name: data?.name,
            lang_cd: data?.lang_cd
        }
        mutation.mutate(reqBody);
    };

    return (
        <form onSubmit={handleSubmit(submit)}
              className="add-language-form p-4"
        >
            <div className="ks-wt-modal-toolbar-user-container ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr">
                <label><span className="text-secondary fw-bold">Languages</span>  <IconNextStep/> <span
                    className="ks_fw_bd">{updateData ? "Edit Language" : "Create Language"}</span></label>
                <div className="ks-wt-modal-toolbar-action-user-container">
                    <div className="ks_d_flex">
                        <button
                            type={"button"}
                            onClick={onCancel}
                            className="ks_btn ks_btn_tiary ks_mr_8">
                            Cancel
                        </button>

                        <button type="submit"
                                className="ks_btn ks_btn_pm" disabled={isSubmitting}>
                            {updateData ? 'Update' : 'Save'}
                        </button>
                    </div>
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
                    {errors.name && typeof errors.name.message === 'string' &&
                        <span className={'text-danger mt-2'}>{errors.name.message}</span>}
                </div>

                <div className={'w-50 me-2'}>
                    <input
                        aria-label="EN | KM | ..."
                        className={'form-control'}
                        type="text"
                        placeholder="EN | KM | ..."
                        {...register('lang_cd', {required: 'Abbreviation must not be empty'})}
                        disabled={isUpdate}
                    />
                    {errors.lang_cd && typeof errors.lang_cd.message === 'string' &&
                        <span className={'text-danger mt-2'}>{errors.lang_cd.message}</span>}
                </div>
            </div>
        </form>
    );
};

export default AddLanguageForm;
