import React from 'react';
import ProjectTranslate from "@/app/components/ui/project/ProjectDetail/ProjectTranslate";

export const metadata = {
    title: 'WeTMS | Translation',
    description: 'Generated by Next.js',
}
const Page = ({params}: { params: { project_id: number } }) => {

    return (
        <>
            <ProjectTranslate/>
        </>
    );
};

export default Page;