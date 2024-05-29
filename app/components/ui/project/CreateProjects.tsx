"use client"

import React, {useState} from 'react';
import {useProjectStore} from "@/app/lib/store";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {projectService} from "@/service/project.service";
import {ProjectInfo, ProjectRequest} from "@/app/lib/types/project";
import toast from "react-hot-toast";
import ProjectForm from "@/app/components/ui/project/ProjectForm";

type Props = {
    handleClose: () => void,
    // onSuccess: () => void,
};

function CreateProjects({handleClose}: Props) {
    const {isUpdate, id, setIsUpdate, setUpdateData,setData, setUpdate, updateData, isOpen, setIsOpen,data: project} = useProjectStore();

    const [projectName, setProjectName] = useState('');

    const [reset, setReset] = useState(false);
    const projectStore = useProjectStore();
    const queryClient = useQueryClient();
    const handleUpdateProject = (project: ProjectInfo) => {
        setUpdateData({
            project_id: project.project_id,
            project_name: project.project_name
        });
        setIsUpdate(true);
        setIsOpen(true);
    };
    console.log("Project Is Update : ", project)
    const mutation = useMutation({
        mutationFn: (data: ProjectRequest) => {
            if (isUpdate) {
                return projectService.updateProject(project.project_id , data);
            }
            return projectService.createProject(data)
        },
         onMutate: () => {
        toast.loading("Loading...");
    },
        onError: () => {
           toast.dismiss()
            toast.error('Error');
        },
        onSuccess: () => {
            toast.dismiss()
            queryClient.invalidateQueries( {queryKey: [`projects`]})
            setIsOpen(false)
            toast.success( isUpdate ? 'Project has been updated' : 'Project has been saved');
        }
    })

    const onSubmit = (data: ProjectRequest)=>{
        const reqBody: ProjectRequest = {
            name: data.name
        }
        mutation.mutate(reqBody, {
            onSuccess: (updateData) => {
                toast.success('Success');
                queryClient.invalidateQueries({queryKey:["projects"]})

                if(projectStore.isOpen){
                    projectStore.setIsOpen(false)
                    // setReset(true)
                }
                console.log("updateData : ", updateData)
                // else {
                //     projectStore.setIsOpen(false)
                // }
                // !isUpdate ? toast.success("Project has been saved") : toast.success("Project has been updated")
            },
            onError: (error: any) => {
                toast.error(error?.message || 'An error occurred');
            }
        })
    }
    // const handleUpdateProject = async () => {
    //     const askMessage = window.confirm('Are you sure you want to update this project?'), isConfirm = askMessage;
    //     if (isConfirm) {
    //         try {
    //             const response = await projectService.updateProject(project.project_id, setUpdateData);
    //
    //             if (response.status === 200) {
    //                 toast.success('Project updated successfully')
    //             } else {
    //                 toast.error('Error updating project:', response);
    //             }
    //         } catch (error) {
    //             console.error('Error updating project:', error);
    //         }
    //     }
    // };
    return (
        <>
            {
                <ProjectForm
                              isOpen={isOpen}
                              onSubmit={onSubmit}
                              handleClose={()=> {
                                  handleClose();
                                  // setIsUpdate(true);
                                  setUpdateData({project_name: ''});
                                  }
                                        }
                              updateData={updateData}

                />
            }
        </>
    );
}

export default CreateProjects;