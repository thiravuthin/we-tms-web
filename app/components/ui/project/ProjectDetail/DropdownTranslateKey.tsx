import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {useTranslateStore} from "@/app/lib/store";
import TranslateForm from "@/app/components/ui/project/ProjectDetail/TranslateForm";
import IconExportFile from "@/app/components/icons/IconExportFile";
import ExportFilePopup from "@/app/components/ui/project/ProjectDetail/ExportFilePopup";

const DropdownTranslateKey = () => {

    const {isOpen, setIsOpen} = useTranslateStore()
    const [showExportFile, setShowExportFile] = useState(false)

    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <button
                        type={"button"}
                        className="btn btn-primary ks_d_flex ks_alg_itm_ctr ks_pd_10"
                        aria-expanded="false">
                        <label className="ks_fs14">Translation Key</label>
                        <div className="ks-pl-10">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="white" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </button>
                </DropdownTrigger>
                <DropdownMenu
                    className="ks_wth_220 bg-white rounded"
                    aria-label="Static Actions"
                >
                    <DropdownItem
                        className="dropdown-item border rounded ks_pd_5 ks_btn_pm_tr"
                    >
                        <label className="ks-pl-10 ks-silver ks_fs12">Menu</label>
                    </DropdownItem>

                    <DropdownItem
                        className="dropdown-item border rounded ks_pd_5 ks_btn_pm_tr"
                    >
                        <div
                            className="ks_d_flex ks_alg_itm_ctr"
                            onClick={() => setIsOpen(true)}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 3.33594V12.6693" stroke="black" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                                ss <path d="M3.3335 8H12.6668" stroke="black" stroke-width="1.5"
                                         stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <label className="ks-pl-10 ks_fs14 ks_fw_bd">Add New</label>
                        </div>
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item border rounded ks_pd_5 ks_btn_pm_tr"
                        onClick={() => setShowExportFile(!showExportFile)}
                    >
                        <div className="ks_d_flex ks_alg_itm_ctr">
                            <IconExportFile/>
                            <label className="ks-pl-10 ks_fs14 fw-bold font-monospace">
                                Export File
                            </label>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {
                isOpen && <TranslateForm handleClose={() => setIsOpen(false)}/>
            }
            {
                showExportFile && <ExportFilePopup
                    show={showExportFile}
                    handleClose={() => setShowExportFile(false)}
                />
            }


        </>
    );
};

export default DropdownTranslateKey;