
import { Modal } from "react-bootstrap";
import React from "react";

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    handleDeleteUser: () => void;
}

const DeleteDialog: React.FC<Props> = ({ isOpen, setIsOpen, handleDeleteUser }) => {
    return (
        <Modal show={isOpen} dialogClassName={"modal-dialog modal-dialog-centered ks-wt-modal-xs-dialog"}>
            <div className="modal-content ks-wt-modal-content">
                <div className="ks-wt-modal-header-container ks_d_inl_flex ks_jt_cont_betw ks_alg_itm_ctr">
                    <label>Are you absolutely sure?</label>
                </div>
                <div className="ks-wt-modal-body ks_d_flex ks_flex_col">
                    <div className="ks-wt-modal-body-content-item ks_d_flex ks_alg_itm_ctr">
                        <label>This action cannot be undone. This will permanently delete this user data from the system.</label>
                    </div>
                </div>
                <div className="ks-wt-modal-footer ks_d_flex ks_jt_cont_end ks_alg_itm_ctr">
                    <div className="ks-wt-element-group-container ks_d_flex ks_alg_itm_ctr">
                        <button onClick={() => setIsOpen(false)} className="ks_btn ks_btn_tiary">
                            Cancel
                        </button>
                        <button onClick={handleDeleteUser} data-bs-dismiss="modal" className="ks_btn ks_btn_pm">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteDialog;
