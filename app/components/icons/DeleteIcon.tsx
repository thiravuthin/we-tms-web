import React from 'react';

const DeleteIcon = ({handleDelete}: {handleDelete?: ()=>  void}) => {
    return (
        <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4H14" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M12.6673 4V13.3333C12.6673 14 12.0007 14.6667 11.334 14.6667H4.66732C4.00065 14.6667 3.33398 14 3.33398 13.3333V4"
                    stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M5.33398 3.9987V2.66536C5.33398 1.9987 6.00065 1.33203 6.66732 1.33203H9.33398C10.0007 1.33203 10.6673 1.9987 10.6673 2.66536V3.9987"
                    stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.66602 7.33203V11.332" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M9.33398 7.33203V11.332" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>

        </div>
    );
};

export default DeleteIcon;