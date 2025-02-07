"use client"

import React, {useState} from "react";

const SidebarToggle = () => {
    
    const [toggleBody, setToggleBody] = useState(false);

    const handleToggleBody = () => {
        if (!toggleBody) {
            document.body.classList.toggle("ks-wt-collapse-sidebar");
            setToggleBody(true);
        } else {
            document.body.classList.toggle("ks-wt-collapse-sidebar");
            setToggleBody(false);
        }
    };

    return (
        <>
            <svg
                onClick={handleToggleBody}
                className="ks_wth22 ks_hgt22 ks_hamb_svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 4.5C1.5 4.08579 1.83579 3.75 2.25 3.75H15.75C16.1642 3.75 16.5 4.08579 16.5 4.5C16.5 4.91421 16.1642 5.25 15.75 5.25H2.25C1.83579 5.25 1.5 4.91421 1.5 4.5Z"
                    fill="#0F172A"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 9C1.5 8.58579 1.83579 8.25 2.25 8.25H15.75C16.1642 8.25 16.5 8.58579 16.5 9C16.5 9.41421 16.1642 9.75 15.75 9.75H2.25C1.83579 9.75 1.5 9.41421 1.5 9Z"
                    fill="#0F172A"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 13.5C1.5 13.0858 1.83579 12.75 2.25 12.75H15.75C16.1642 12.75 16.5 13.0858 16.5 13.5C16.5 13.9142 16.1642 14.25 15.75 14.25H2.25C1.83579 14.25 1.5 13.9142 1.5 13.5Z"
                    fill="#0F172A"
                />
            </svg>
        </>
    );
};

export default SidebarToggle;