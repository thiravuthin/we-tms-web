"use client"

import React from 'react';
import {useProjectStore} from "@/app/lib/store";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {projectService} from "@/service/project.service";
import {ProjectRequest} from "@/app/lib/types/project";
import toast from "react-hot-toast";
import ProjectForm from "@/app/components/ui/project/ProjectForm";

type Props = {
    handleClose: () => void,
};

function CreateProjects({handleClose}: Props) {
    const {
        isUpdate,
        id,
        setId,
        setIsCreate,
        setIsUpdate,
        setUpdateData,
        setIsView,
        updateData,
        isOpen,
        setIsOpen,
        // data: project
    } = useProjectStore();

    const projectStore = useProjectStore();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: ProjectRequest) => {
            if (isUpdate) {
                return projectService.updateProject(id as number, data);
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
            queryClient.invalidateQueries({queryKey: [`projects`]})
            setIsOpen(false)
            setIsUpdate(false)
            setIsCreate(false)
            setIsView(false)
            // setId(id)
            toast.success(isUpdate ? 'Project has been updated' : 'Project has been saved');
        }
    })

    const onSubmit = (data: ProjectRequest) => {
        const reqBody: ProjectRequest = {
            name: data.name
        }
        mutation.mutate(reqBody, {
            onSuccess: (updateData) => {
                queryClient.invalidateQueries({queryKey: ["projects"]})

                if (projectStore.isOpen) {
                    projectStore.setIsOpen(false)
                }
            },
            onError: (error: any) => {
                toast.error(error?.message || 'An error occurred');
            }
        })
    }

    return (
        <>
            {
                <ProjectForm
                    isOpen={isOpen}
                    onSubmit={onSubmit}
                    handleClose={() => {
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