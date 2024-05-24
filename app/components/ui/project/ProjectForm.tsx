import React from 'react';
import {ProjectRequest} from "@/app/lib/types/project";
import {Modal} from "react-bootstrap";
import {useProjectItemStore, useUpdateProjectStore} from "@/app/lib/store";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {createProjectSchema} from "@/app/validators/proejct.schema";

type Props = {
    isSuccess: boolean;
    isOpen: boolean;
    handelSubmit: (data: ProjectRequest) => void
    // onSubmit: (data: ProjectRequest) => void
    isSubmit: boolean;
    handleClose: () => void
}

const ProjectForm: React.FC<Props> = ({isSuccess,isSubmit, isOpen, handelSubmit, handleClose}) => {

    const { isOpenItem, setIsOpenItem, updateDataItem} = useProjectItemStore();
    const {isUpdate, setUpdate} = useUpdateProjectStore();
    const [checked, setChecked] = React.useState(false);
    const methods = useForm<any>({
        resolver: yupResolver(createProjectSchema),
        values:{
            name: isUpdate ? updateDataItem.project_name : ''
        }
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors}
    } = methods;

    return (
        <div>
            <Modal show={isOpen} dialogClassName="modal-dialog modal-dialog-centered ks-wt-modal-sm-m-500-dialog">
                <div className="ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr ks_brd_btm ks_pd_20 ks_pt_10 ks_pb_10">
                    <div>
                        <label className="fw-bold"> {!isUpdate ? " Create Project":"Update Project"}</label>
                    </div>
                    <div className="ks_d_flex">
                        <button
                            type={"button"}
                            onClick={()=> {
                                handleClose()
                                setUpdate(false)
                            }}
                            className="ks_btn ks_btn_tiary ks_mr_8">
                            Cancel
                        </button>
                       {/*<button*/}
                       {/*         type={"button"}*/}
                       {/*         onClick={()=> {*/}
                       {/*             handelSubmit(updateDataItem)*/}
                       {/*             setUpdate(false)*/}
                       {/*         }}*/}
                       {/*         className="ks_btn ks_btn_pm ks_mr_8">*/}
                       {/*         Update*/}
                       {/*     </button>*/}

                        <button type="submit"
                                onClick={handleSubmit(handelSubmit)}
                                className="ks_btn ks_btn_pm">Save</button>
                    </div>
                </div>

                <div className="ks_pd_20">
                    <label className="fw-bold ks_mb_5">Name</label>
                    <div className="ks-wt-form-input-container">
                        <input
                            className="ks_form_input ks_form_input_clear"
                            placeholder="project name"
                            type="text"
                            {...register("name")}
                        />

                        <div className="ks-wt-form-input-svg-container">
                            <svg viewBox="0 0 22 22">
                                <path
                                    d="M7.34187 14.6584C7.39985 14.7191 7.46955 14.7675 7.54675 14.8005C7.62396 14.8336 7.70706 14.8506 7.79104 14.8506C7.87502 14.8506 7.95812 14.8336 8.03533 14.8005C8.11253 14.7675 8.18223 14.7191 8.24021 14.6584L11 11.8986L13.7805 14.6792C13.8378 14.7359 13.9067 14.7795 13.9824 14.8072C14.0582 14.8348 14.139 14.8458 14.2193 14.8393C14.3837 14.838 14.5411 14.7726 14.6581 14.6572C14.7188 14.5992 14.7672 14.5295 14.8002 14.4523C14.8333 14.3751 14.8503 14.292 14.8503 14.208C14.8503 14.124 14.8333 14.0409 14.8002 13.9637C14.7672 13.8865 14.7188 13.8168 14.6581 13.7588L11.8983 11.0003L14.6789 8.21973C14.7356 8.16243 14.7792 8.09357 14.8069 8.01784C14.8345 7.94211 14.8455 7.8613 14.839 7.78095C14.8377 7.61657 14.7723 7.45918 14.6569 7.34217C14.5989 7.28142 14.5292 7.23306 14.452 7.20002C14.3748 7.16698 14.2917 7.14995 14.2077 7.14995C14.1237 7.14995 14.0406 7.16698 13.9634 7.20002C13.8862 7.23306 13.8165 7.28142 13.7585 7.34217L11 10.102L8.21943 7.32139C8.16213 7.26469 8.09327 7.22102 8.01754 7.19339C7.94181 7.16576 7.861 7.1548 7.78065 7.16128C7.61627 7.1626 7.45888 7.22793 7.34187 7.3434C7.28112 7.40137 7.23276 7.47107 7.19972 7.54828C7.16668 7.62548 7.14965 7.70858 7.14965 7.79256C7.14965 7.87654 7.16668 7.95964 7.19972 8.03685C7.23276 8.11405 7.28112 8.18375 7.34187 8.24173L10.1017 11.0003L7.3211 13.7808C7.26439 13.8381 7.22072 13.907 7.19309 13.9827C7.16546 14.0585 7.1545 14.1393 7.16098 14.2196C7.16198 14.3838 7.22685 14.5412 7.34187 14.6584ZM11 19.5558C9.84122 19.5661 8.69214 19.3442 7.62054 18.9032C6.60459 18.4868 5.68159 17.8726 4.90523 17.0963C4.12886 16.3199 3.51465 15.3969 3.09832 14.381C2.65672 13.3091 2.43439 12.1595 2.44443 11.0003C2.43542 9.84837 2.65734 8.70633 3.0971 7.64162C3.51487 6.62641 4.12872 5.70355 4.90354 4.92584C5.70474 4.12911 6.65625 3.4995 7.70281 3.07357C8.74937 2.64765 9.87012 2.43389 11 2.44473C12.4137 2.45499 13.8032 2.81284 15.046 3.48675C16.2888 4.16065 17.3467 5.12992 18.1266 6.30913C18.9065 7.48833 19.3843 8.84126 19.5179 10.2487C19.6516 11.6561 19.437 13.0748 18.8931 14.3797C18.4684 15.3942 17.8508 16.3165 17.0744 17.0955C16.2968 17.8708 15.374 18.485 14.3587 18.9032C13.2939 19.3429 12.1519 19.5648 11 19.5558Z"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default ProjectForm;