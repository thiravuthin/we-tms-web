import React from 'react';

const IconScreenZoomIn = ({ handleZoomIn }:{ handleZoomIn: ()=> void }) => {
    return (
        <svg
            onClick={handleZoomIn}
            width="5"
            height="5"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33398 11.668H8.33398V16.668"
                  stroke="black"
                 strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M3.33398 11.668H8.33398V16.668"
                  stroke="#94A3B8"
                 strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M16.666 8.33203H11.666V3.33203"
                  stroke="black"
                 strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M16.666 8.33203H11.666V3.33203"
                  stroke="#94A3B8"
                 strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M11.666 8.33333L17.4993 2.5"
                  stroke="black"
                 strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M11.666 8.33333L17.4993 2.5"
                  stroke="#94A3B8"
                 strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M2.5 17.5013L8.33333 11.668"
                  stroke="black"
                 strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M2.5 17.5013L8.33333 11.668"
                  stroke="#94A3B8"
                 strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
};

export default IconScreenZoomIn;