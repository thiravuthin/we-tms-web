import React from 'react';

const Page = ({params}:{params:{project_id : number}}) => {

    return (
        <div>
            Project Detail 11111{params.project_id}
        </div>
    );
};

export default Page;