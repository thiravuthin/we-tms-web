import React from 'react';
import {useProjectStore} from "@/app/lib/store";
import {Modal} from "react-bootstrap";
import {DateUtilsCopy} from "@/utils/DateUtilsCopy";

type Props = {
    handleClose: () => void,
    // onSuccess: () => void,
};
const ProjectItem = ({handleClose}: Props) => {
    // const {isOpen, setUpdate, setIsOpen} = useUpdateProjectStore();
    const {isOpen, setIsOpen, setData,setUpdateData,setUpdate, updateData} = useProjectStore();

    return (
        <>
            <Modal show={isOpen} dialogClassName="modal-dialog modal-dialog-centered ks-wt-modal-sm-m-500-dialog">
                <div className="ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr ks_pd_20 ks_brd_btm ks_pt_10 ks_pb_10">
                    <label className="text-black fw-bold ks-size-medium">Project</label>
                    <div className="ks_d_flex">
                        <button
                            type={"button"}
                            onClick={() => {
                                handleClose()
                                setIsOpen(true);
                            }}
                            className="ks_btn ks_btn_tiary ks_mr_8 ks_pd_10">
                            Cancel
                        </button>
                        <button
                            type={"button"}
                            className="ks_btn ks_btn_pm ks_pd_10 ks_pr_20 ks_pl_20"
                            onClick={() => {
                                setIsOpen(true);
                                // setIsOpen(false);
                                setUpdate(true);
                            }}
                        >
                            Edit
                        </button>
                    </div>

                </div>

                <div className="ks_d_flex ks_pr_20">

                    <div className="ks_pd_20">
                        <label className="ks-size-medium ks-text-silver">User Activity</label>
                        <div>
                            <label className="ks-size-small ks-silver ks_pt_20">Create By</label>
                        </div>
                        <div className="ks_pt_5 ks_d_flex">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="18" fill="#F1F5F9"/>
                                <path
                                    d="M8.21134 13.5455H10.3072L13.114 20.3963H13.2248L16.0317 13.5455H18.1275V23H16.4841V16.5046H16.3964L13.7834 22.9723H12.5554L9.94252 16.4908H9.8548V23H8.21134V13.5455ZM28.0853 16.7354H26.3587C26.3095 16.4523 26.2187 16.2015 26.0863 15.983C25.954 15.7614 25.7893 15.5736 25.5924 15.4197C25.3954 15.2659 25.1707 15.1504 24.9184 15.0735C24.6691 14.9935 24.3998 14.9535 24.1105 14.9535C23.5965 14.9535 23.141 15.0827 22.744 15.3413C22.347 15.5967 22.0361 15.9722 21.8115 16.4677C21.5868 16.9601 21.4745 17.5618 21.4745 18.2727C21.4745 18.996 21.5868 19.6054 21.8115 20.1009C22.0392 20.5933 22.3501 20.9657 22.744 21.218C23.141 21.4673 23.595 21.592 24.1059 21.592C24.389 21.592 24.6537 21.555 24.8999 21.4812C25.1492 21.4042 25.3723 21.2919 25.5693 21.1442C25.7693 20.9964 25.9371 20.8149 26.0725 20.5994C26.211 20.384 26.3064 20.1378 26.3587 19.8608L28.0853 19.87C28.0206 20.3194 27.8806 20.741 27.6652 21.1349C27.4528 21.5289 27.1743 21.8767 26.8296 22.1783C26.4849 22.4768 26.0817 22.7107 25.6201 22.88C25.1584 23.0462 24.646 23.1293 24.0828 23.1293C23.2518 23.1293 22.5101 22.9369 21.8576 22.5522C21.2052 22.1675 20.6912 21.612 20.3157 20.8857C19.9403 20.1593 19.7525 19.2884 19.7525 18.2727C19.7525 17.254 19.9418 16.383 20.3204 15.6598C20.6989 14.9335 21.2144 14.378 21.8669 13.9933C22.5193 13.6085 23.258 13.4162 24.0828 13.4162C24.6091 13.4162 25.0984 13.4901 25.5508 13.6378C26.0032 13.7855 26.4064 14.0025 26.7603 14.2887C27.1143 14.5719 27.4051 14.9196 27.6329 15.332C27.8637 15.7414 28.0145 16.2092 28.0853 16.7354Z"
                                    fill="#6B7787"/>
                                <path
                                    d="M8.21134 13.5455H10.3072L13.114 20.3963H13.2248L16.0317 13.5455H18.1275V23H16.4841V16.5046H16.3964L13.7834 22.9723H12.5554L9.94252 16.4908H9.8548V23H8.21134V13.5455ZM28.0853 16.7354H26.3587C26.3095 16.4523 26.2187 16.2015 26.0863 15.983C25.954 15.7614 25.7893 15.5736 25.5924 15.4197C25.3954 15.2659 25.1707 15.1504 24.9184 15.0735C24.6691 14.9935 24.3998 14.9535 24.1105 14.9535C23.5965 14.9535 23.141 15.0827 22.744 15.3413C22.347 15.5967 22.0361 15.9722 21.8115 16.4677C21.5868 16.9601 21.4745 17.5618 21.4745 18.2727C21.4745 18.996 21.5868 19.6054 21.8115 20.1009C22.0392 20.5933 22.3501 20.9657 22.744 21.218C23.141 21.4673 23.595 21.592 24.1059 21.592C24.389 21.592 24.6537 21.555 24.8999 21.4812C25.1492 21.4042 25.3723 21.2919 25.5693 21.1442C25.7693 20.9964 25.9371 20.8149 26.0725 20.5994C26.211 20.384 26.3064 20.1378 26.3587 19.8608L28.0853 19.87C28.0206 20.3194 27.8806 20.741 27.6652 21.1349C27.4528 21.5289 27.1743 21.8767 26.8296 22.1783C26.4849 22.4768 26.0817 22.7107 25.6201 22.88C25.1584 23.0462 24.646 23.1293 24.0828 23.1293C23.2518 23.1293 22.5101 22.9369 21.8576 22.5522C21.2052 22.1675 20.6912 21.612 20.3157 20.8857C19.9403 20.1593 19.7525 19.2884 19.7525 18.2727C19.7525 17.254 19.9418 16.383 20.3204 15.6598C20.6989 14.9335 21.2144 14.378 21.8669 13.9933C22.5193 13.6085 23.258 13.4162 24.0828 13.4162C24.6091 13.4162 25.0984 13.4901 25.5508 13.6378C26.0032 13.7855 26.4064 14.0025 26.7603 14.2887C27.1143 14.5719 27.4051 14.9196 27.6329 15.332C27.8637 15.7414 28.0145 16.2092 28.0853 16.7354Z"
                                    fill="#292A2A"/>
                            </svg>
                            <div className="ks_flex_row ks_ml_12 ks_jt_cont_betw">
                                <div>
                                    <label className="fw-bold ks-size-medium">User Name</label>
                                </div>
                                <div>
                                    <label
                                        className="ks-size-small">@ . Admin </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <svg width="1" height="240" viewBox="0 0 1 240" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="-2.18557e-08" x2="0.50001" y2="240" stroke="#E5E7EB"/>
                        </svg>
                    </div>
                    <div className="ks_pd_20">
                        <label className="ks-size-medium ks-text-silver ks_pb_20">Details Information</label>
                        <div className="ks_d_flex">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#E5E7EB"/>
                                <path
                                    d="M18.0007 9.33203H14.0007C13.6325 9.33203 13.334 9.63051 13.334 9.9987V11.332C13.334 11.7002 13.6325 11.9987 14.0007 11.9987H18.0007C18.3688 11.9987 18.6673 11.7002 18.6673 11.332V9.9987C18.6673 9.63051 18.3688 9.33203 18.0007 9.33203Z"
                                    stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path
                                    d="M18.666 10.668H19.9993C20.353 10.668 20.6921 10.8084 20.9422 11.0585C21.1922 11.3085 21.3327 11.6477 21.3327 12.0013V21.3346C21.3327 21.6883 21.1922 22.0274 20.9422 22.2774C20.6921 22.5275 20.353 22.668 19.9993 22.668H11.9993C11.6457 22.668 11.3066 22.5275 11.0565 22.2774C10.8065 22.0274 10.666 21.6883 10.666 21.3346V12.0013C10.666 11.6477 10.8065 11.3085 11.0565 11.0585C11.3066 10.8084 11.6457 10.668 11.9993 10.668H13.3327"
                                    stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path d="M14 15.9987V15.332H18V15.9987" stroke="#0F172A" strokeWidth="1.2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.334 19.332H16.6673" stroke="#0F172A" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 15.332V19.332" stroke="#0F172A" strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                            <div className="ks_flex_row ks_ml_10 ks_jt_cont_betw">
                                <div>
                                    <label className="ks-size-small ks-silver">Name</label>
                                </div>
                                <div>
                                    <label className="fw-bold ks-size-medium">WeTMS</label>
                                </div>
                            </div>
                        </div>
                        <div className="ks_d_flex ks_pt_20">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#E5E7EB"/>
                                <path
                                    d="M22 13.0013V12.0013C22 11.6477 21.8595 11.3085 21.6095 11.0585C21.3594 10.8084 21.0203 10.668 20.6667 10.668H11.3333C10.9797 10.668 10.6406 10.8084 10.3905 11.0585C10.1405 11.3085 10 11.6477 10 12.0013V21.3346C10 21.6883 10.1405 22.0274 10.3905 22.2774C10.6406 22.5275 10.9797 22.668 11.3333 22.668H13.6667"
                                    stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path d="M18.666 9.33203V11.9987" stroke="#0F172A" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.334 9.33203V11.9987" stroke="#0F172A" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 14.668H13.3333" stroke="#0F172A" strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M19.666 19.6654L18.666 18.832V17.332" stroke="#0F172A" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M22.666 18.668C22.666 19.7288 22.2446 20.7463 21.4944 21.4964C20.7443 22.2465 19.7269 22.668 18.666 22.668C17.6051 22.668 16.5877 22.2465 15.8376 21.4964C15.0874 20.7463 14.666 19.7288 14.666 18.668C14.666 17.6071 15.0874 16.5897 15.8376 15.8395C16.5877 15.0894 17.6051 14.668 18.666 14.668C19.7269 14.668 20.7443 15.0894 21.4944 15.8395C22.2446 16.5897 22.666 17.6071 22.666 18.668Z"
                                    stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                            </svg>
                            <div className="ks_flex_row ks_ml_10 ks_jt_cont_betw">
                                <div>
                                    <label className="ks-size-small ks-silver">Register Date Time</label>
                                </div>
                                <div>
                                    <label
                                        className="fw-bold ks-size-medium">Today</label>
                                </div>
                            </div>
                        </div>
                        <div className="ks_d_flex ks_pt_20">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#E5E7EB"/>
                                <path
                                    d="M22 17.3346V12.0013C22 11.6477 21.8595 11.3085 21.6095 11.0585C21.3594 10.8084 21.0203 10.668 20.6667 10.668H11.3333C10.9797 10.668 10.6406 10.8084 10.3905 11.0585C10.1405 11.3085 10 11.6477 10 12.0013V21.3346C10 21.6883 10.1405 22.0274 10.3905 22.2774C10.6406 22.5275 10.9797 22.668 11.3333 22.668H16.6667"
                                    stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path d="M18.666 9.33203V11.9987" stroke="#0F172A" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.334 9.33203V11.9987" stroke="#0F172A" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 14.668H22" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M18.666 21.3333L19.9993 22.6667L22.666 20" stroke="#0F172A"
                                      strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div className="ks_flex_row ks_ml_10 ks_jt_cont_betw">
                                <div>
                                    <label className="ks-size-small ks-silver">Change Date Time</label>
                                </div>
                                <div>
                                    <label
                                        className="fw-bold ks-size-medium">Today</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {
                    isOpen && <ProjectItem handleClose={() => setIsOpen(false)}/>
                }
            </Modal>
        </>
    );
};

export default ProjectItem;