import React, {ReactElement} from 'react';
import {popUpConfirmType} from "@/utils/enums";
import {Modal} from "react-bootstrap";

type PopupConfirmProps = {
    show: boolean;
    title: string;
    message: string;
    confirm: () => void;
    cancel: () => void;
    confirmType: popUpConfirmType,
};
type confirmType = {
    title: string;
    message1: string;
    message2?: string;
    message3?: string;
    icon?: ReactElement | JSX.Element | string,    confirmText: string;
    cancelText: string;
}
const PopupConfirm = ({show, confirm,cancel, confirmType}: PopupConfirmProps) => {

    const confirmData: confirmType = {
        title: "",
        message1: "",
        message2: "",
        message3: "",
        confirmText: "",
        cancelText: "",
        icon: '',
    }

    switch (confirmType) {
        case popUpConfirmType.LOGOUT: {
            confirmData.title = "Confirm";
            confirmData.message1 = "Do you really want to log out from the system?";
            confirmData.confirmText = "OK";
            confirmData.cancelText = "Cancel";
            confirmData.icon = '';
            break;
        }
        case popUpConfirmType.DELETE: {
            confirmData.title = "Confirm for delete!";
            confirmData.message1 = "Do you really want to delete this item?";
            confirmData.confirmText = "Confirm";
            confirmData.cancelText = "Cancel";
            confirmData.icon = ''
            break;
        }

    }
    return (
        <>
            <Modal show={show} dialogClassName="modal-dialog modal-dialog-centered ks_mxwth400">
                <div className="modal-content ks_mod_comp ks_pd">
                    <div className="ks_mb_20 ks_ml_20rem ks_ml_10 ks_mt_15">
                        <label className="fw-bold ks-size-big ">{confirmData.title}</label>
                    </div>
                    <div className="ks_pd_10rem ks_pb_10 ks_pt_5 ks_mt_mn_30_rem">
                        <label className="ks_lbl ks_fw_md">
                            {confirmData.message1}
                        </label>
                    </div>
                    <div className="ks_d_flex ks_jt_cont_end ks_alg_itm_ctr ks_mt_20 ks_mb_15 ks_mr_16 ks_mr_20">
                        <button className="ks_btn ks_btn_tiary ks_mr_8 ks_ml_20" onClick={cancel}>{confirmData.cancelText}</button>
                        <button className="ks_btn ks_btn_pm ks_pd_5 ks_ml_0" onClick={confirm}>
                            {confirmData.confirmText}
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default PopupConfirm;