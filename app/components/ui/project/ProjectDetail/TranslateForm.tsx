import React from 'react';
import {Modal} from "react-bootstrap";
import {useTranslateStore} from "@/app/lib/store";

type Props = {
    handleClose: () => void,
};
const TranslateForm = ({handleClose}: Props) => {
    const { isOpen, setIsOpen } = useTranslateStore()
    return (
        <>
            <Modal show={isOpen} dialogClassName="modal-dialog modal-dialog-centered ks-wt-modal-md-850-dialog">
                <div className="ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr ks_pd_20 ks_pt_10 ks_pb_10 ks_brd_btm">
                    <label className="ks_fw_bd ks_fs16">Create Translate Key</label>
                    <div className="ks_d_flex">
                        <button
                            className="ks_btn ks_btn_tiary ks_mr10 ks_pd_10 ks_pl_20 ks_pr_20"
                            onClick={handleClose}
                        >Close</button>
                        <button
                            className="btn-primary btn ks_pd_10 ks_pl_20 ks_pr_20"
                        >Save</button>
                    </div>
                </div>
                <div className="ks_pd_20">
                    <div>
                        <label className="ks_fs14 ks_fw_bd">Key</label>
                        <div className="ks-wt-form-input-container ks_pt_5">
                            <input
                                className="ks_form_input ks_form_input_clear"
                                placeholder="key_name"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="ks_pt_20">
                        <label className="ks_fs14 ks_fw_bd ks_pb_10">Languages</label>
                        <table className="">
                            <tr className="ks-silver ks_fs14">
                                <td>#</td>
                                <td className="ks_pl_15">Language</td>
                                <td className="ks_pl_15">Value</td>
                            </tr>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className="ks_pl_15">
                                        <form>
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option>English</option>
                                                    <option>Vietnam</option>
                                                    <option>Khmer</option>
                                                </select>
                                            </div>
                                        </form>
                                    </td>
                                    <td className="ks_pl_15">
                                        <input
                                            className="ks_form_input ks_form_input_clear"
                                            placeholder="enter"
                                            type="text"
                                        />
                                    </td>
                                    <td className="ks-pl-15">
                                        <div>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.5" clip-path="url(#clip0_1488_18949)">
                                                    <path
                                                        d="M7.99967 14.6654C11.6816 14.6654 14.6663 11.6806 14.6663 7.9987C14.6663 4.3168 11.6816 1.33203 7.99967 1.33203C4.31778 1.33203 1.33301 4.3168 1.33301 7.9987C1.33301 11.6806 4.31778 14.6654 7.99967 14.6654Z"
                                                        stroke="#E12329" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                    <path d="M5.33301 8H10.6663" stroke="#E12329" stroke-width="1.5"
                                                          stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1488_18949">
                                                        <rect width="16" height="16" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="ks_d_flex ks_alg_itm_ctr ks_pt_10">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.33594V12.6693" stroke="#0059E3" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M3.3335 8H12.6668" stroke="#0059E3" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                        <label className="ks_fs14 ks-bluee ks-pl-5 fw-bold">Add new</label>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default TranslateForm;