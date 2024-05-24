"use client"

import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import {useCreateProjectStore, useProjectItemStore} from "@/app/lib/store";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {projectService} from "@/service/project.service";
import {ProjectRequest} from "@/app/lib/types/project";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";
import ProjectForm from "@/app/components/ui/project/ProjectForm";

type Props = {
    handleClose: () => void,
    // onSuccess: () => void,
};

function CreateProjects({handleClose}: Props) {
    const {isUpdate, updateData, isOpen, setIsOpen} = useCreateProjectStore();
    // const {isOpen , setIsOpen} = useCreateProjectStore();
    const [projectName, setProjectName] = useState('');
    const [reset, setReset] = useState(false);
    const projectStore = useProjectItemStore();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: ProjectRequest) => {
            if (isUpdate) {
                return projectService.updateProject(updateData?.project_id, data);
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
            toast.success('Success');
            queryClient.invalidateQueries( {queryKey: [`projects`]})
            setIsOpen(false)
        }
    })

    // const handelSubmit= (e:any)=>{
    //     e.preventDefault()
    //     console.log('Project Name:', projectName);
    //     // Call mutation.mutate({ project_name: projectName }) to create or update the project
    //     mutation.mutate({ name: projectName });
    //     setProjectName(''); // Reset the form field
    // }

    const onSubmit = (data: ProjectRequest)=>{
        const reqBody: ProjectRequest = {
            name: data.name
        }
        mutation.mutate(reqBody, {
            onSuccess: () => {
                toast.success('Success');
                queryClient.invalidateQueries({queryKey:["projects"]})

                if(projectStore.isOpenItem){
                    projectStore.setIsOpenItem(false)
                    setReset(true)
                }else {
                    projectStore.setIsOpenItem(false)
                }
                !isUpdate ? toast.success("Project has been saved") : toast.success("Project has been updated")
            },
            onError: (error: any) => {
                toast.error(error?.message || 'An error occurred');
            }


        })
    }

    // const {register} = useForm();
    return (
        <>
            {
                <ProjectForm  isSuccess={mutation.isSuccess} isOpen={isOpen} onSubmit={onSubmit} handleClose={handleClose} />
            }
        </>
    );
}

export default CreateProjects;