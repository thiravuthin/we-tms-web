import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import CustomTooltip from "@/app/components/shared/CustomTooltip";
import IconClosePopup from "@/app/components/icons/IconClosePopup";

type Props = {
    show: boolean
    handleClose: () => void
}

const ExportFilePopup = ({show, handleClose}: Props) => {

    const [selectedFormat, setSelectedFormat] = useState('.csv');
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event: any) => {
        setSelectedFormat(event.target.value);
    };

    const handleCheckboxChange = (event:any) => {
        setSelectedOption(event.target.value);
    };


    return (
        <Modal
            dialogClassName="modal-dialog modal-dialog-centered ks_mxwth400"
            show={show}
        >
            <div className="modal-content ks_mod_comp ks_pd p-4 d-flex flex-column">

                {/* Header*/}
                <div className="d-flex justify-content-between  ks_mb_20  ks_mt_15 ">
                    <div>
                        <h4 className={'fw-bold'}>Export File</h4>
                    </div>

                    <CustomTooltip placement={"top"}
                                   title={"close"}>
                        <IconClosePopup handleClose={handleClose}/>
                    </CustomTooltip>
                </div>

                {/* Radios*/}
                <div className={'d-flex flex-row '}>
                    <div>
                        <h5 className={'fw-bold'}>File format</h5>
                    </div>

                    <div className={'d-flex'}>
                        {/* json*/}
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value=".json"
                                checked={selectedFormat === '.json'}
                                onChange={handleRadioChange}
                            />
                            <label
                                className={`${selectedFormat === '.json' ? 'fw-bold' : 'form-check-label'}`}
                                htmlFor="flexRadioDefault1">
                                .json
                            </label>
                        </div>

                        {/*csv */}
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="radio"
                                   name="flexRadioDefault"
                                   id="flexRadioDefault2"
                                   value=".csv"
                                   checked={selectedFormat === '.csv'}
                                   onChange={handleRadioChange}
                            />
                            <label
                                className={`${selectedFormat === '.csv' ? 'fw-bold' : 'form-check-label'}`}
                                htmlFor="flexRadioDefault2">
                                .csv
                            </label>
                        </div>
                    </div>
                </div>

                {/* Content of Radio Switch*/}
                <div className={'ks_mt_15'}>
                    <h5 className={'text-wrap text-body-secondary'}>
                        Export this project’s copy as a JSON file to share it with developers or integrate it with other
                        internal systems (e.g. localization platforms, codebase, etc.).
                    </h5>
                </div>

                {/* Check box*/}
                <div className={''}>
                    <div className={'ks_mb_20 ks_mt_15'}>
                        <h5>Options</h5>
                    </div>

                    <div className={'d-flex flex-row align-self-start'}>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="allInstancesCheckbox"
                                value="allInstances"
                                checked={selectedOption === 'allInstances'}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="allInstancesCheckbox"></label>
                        </div>

                        <div>
                            <div><h5>All instances</h5></div>
                            <div><p>Export instance in the entire project</p></div>
                        </div>
                    </div>

                    <div className={'d-flex flex-row'}>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="uniqueInstancesCheckbox"
                                value="uniqueInstances"
                                checked={selectedOption === 'uniqueInstances'}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="uniqueInstancesCheckbox"></label>
                        </div>

                        <div>
                            <div><h5>Include only unique instance</h5></div>
                            <div><p>Export only unique instances</p></div>
                        </div>
                    </div>

                    <div className={'d-flex flex-row'}>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="duplicateInstancesCheckbox"
                                value="duplicateInstances"
                                checked={selectedOption === 'duplicateInstances'}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="duplicateInstancesCheckbox"></label>
                        </div>

                        <div>
                            <div><h5>Include duplicate instances</h5></div>
                            <div><p>Export duplicate instance into separate rows</p></div>
                        </div>
                    </div>
                </div>

                {/* Btn Export*/}
                <div className={'align-self-center mb-3 mt-3'}>
                    <button className={'btn btn-primary'}> Export as JSON (.json)</button>
                </div>
            </div>
        </Modal>
    )
};

export default ExportFilePopup;