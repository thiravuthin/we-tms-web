import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {useTranslateStore} from "@/app/lib/store";
import TranslateForm from "@/app/components/ui/project/ProjectDetail/TranslateForm";

const DropdownTranslateKey = () => {
    const {isOpen, setIsOpen} = useTranslateStore()
    console.log("isOpen", isOpen)
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
                                ss        <path d="M3.3335 8H12.6668" stroke="black" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <label className="ks-pl-10 ks_fs14 ks_fw_bd">Add New</label>
                        </div>
                    </DropdownItem>
                    <DropdownItem
                        className="dropdown-item border rounded ks_pd_5 ks_btn_pm_tr"
                    >
                        <div className="ks_d_flex ks_alg_itm_ctr">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.66699 1.33203H4.00033C3.6467 1.33203 3.30756 1.47251 3.05752 1.72256C2.80747 1.9726 2.66699 2.31174 2.66699 2.66536V13.332C2.66699 13.6857 2.80747 14.0248 3.05752 14.2748C3.30756 14.5249 3.6467 14.6654 4.00033 14.6654H12.0003C12.3539 14.6654 12.6931 14.5249 12.9431 14.2748C13.1932 14.0248 13.3337 13.6857 13.3337 13.332V4.9987L9.66699 1.33203Z"
                                    stroke="#475569" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"/>
                                <path d="M9.33301 1.33203V5.33203H13.333" stroke="#475569"
                                      stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                            <label className="ks-pl-10 ks_fs14">Export File</label>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {
                isOpen && <TranslateForm handleClose={() => setIsOpen(false)} />
            }
        </>
    );
};

export default DropdownTranslateKey;