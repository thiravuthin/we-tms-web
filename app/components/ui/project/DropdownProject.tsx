// 'use client'
// import React from 'react';
// import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
// import LogoutIcon from "@/app/components/icons/LogoutIcon";
// import SettingIcon from "@/app/components/icons/SettingIcon";
// import {useProjectStore} from "@/app/lib/store";
// import UpdateProjects from "@/app/components/ui/project/UpdateProjects";
// import {projectService} from "@/service/project.service";
// import toast from "react-hot-toast";
//
//
// function DropdownProject({show, id}: { show?: boolean, id: number}) {
//     const { isOpen, setIsOpen, setData, data} = useProjectStore();
//     // const { isOpen, setIsOpen } = useUpdateProjectStore();
//     console.log(id, "hhhh")
//     const handleRemoveProject = async () => {
//         try {
//         const res=     await projectService.getProjects(data.project_id);
//             const response = await projectService.deleteProject(data.project_id);
//
//             if (response.status === 200) {
//                 toast.success('Project deleted successfully')
//             } else {
//                 toast.error('Error deleting project:', response);
//             }
//         } catch (error) {
//             console.error('Error deleting project:', error);
//         }
//     };
//
//     return (
//         <>
//             <Dropdown className={''}>
//                 <DropdownTrigger>
//                     <button type={"button"} className={'unstyled-button'}>
//                         <svg
//                             className="ks_wth20 ks_hgt20"
//                             width="20"
//                             height="20"
//                             viewBox="0 0 20 20"
//                         >
//                             <path
//                                 d="M10 3C10.8284 3 11.5 3.67157 11.5 4.5C11.5 5.32843 10.8284 6 10 6C9.17157 6 8.5 5.32843 8.5 4.5C8.5 3.67157 9.17157 3 10 3Z"
//                                 fill="#333333"
//                             />
//                             <path
//                                 d="M10 8.5C10.8284 8.5 11.5 9.17157 11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5Z"
//                                 fill="#333333"
//                             />
//                             <path
//                                 d="M11.5 15.5C11.5 14.6716 10.8284 14 10 14C9.17157 14 8.5 14.6716 8.5 15.5C8.5 16.3284 9.17157 17 10 17C10.8284 17 11.5 16.3284 11.5 15.5Z"
//                                 fill="#333333"
//                             />
//                         </svg>
//                     </button>
//                 </DropdownTrigger>
//                 <DropdownMenu className="ks_wth_280 bg-white rounded "
//                               aria-label="Static Actions"
//                 >
//                     {/* My Account*/}
//                     <DropdownItem className={'dropdown-item border rounded'}>
//                         <label className={'text- m-2'}>Edit</label>
//                         {
//                             isOpen && <UpdateProjects  handleClose={() => setIsOpen(false)}/>
//                         }
//                     </DropdownItem>
//
//                     {/* Setting Icon */}
//                     <DropdownItem
//                         key="setting"
//                         className={'dropdown-item border rounded'}
//                     >
//                         <SettingIcon/>
//                         <label className="ks_lbl ks_fw_md m-2">Hide</label>
//                     </DropdownItem>
//
//
//                     <DropdownItem className={'dropdown-item border rounded'} onClick={handleRemoveProject}>
//                         <LogoutIcon/>
//                         <label className="ks_lbl ks_fw_md m-2">Remove</label>
//                     </DropdownItem>
//                 </DropdownMenu>
//             </Dropdown>
//
//
//         </>
//     );
// }
//
// export default DropdownProject;