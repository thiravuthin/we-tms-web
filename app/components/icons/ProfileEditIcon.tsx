import React from 'react';


const ProfileEditIcon = ({onclick}: { onclick?: () => void }) => {
    return (
        <svg
            onClick={onclick}
            width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="35" fill="#F1F5F9"/>
            <path
                d="M46.6663 50V46.6667C46.6663 44.8986 45.964 43.2029 44.7137 41.9526C43.4635 40.7024 41.7678 40 39.9997 40H29.9997C28.2316 40 26.5359 40.7024 25.2856 41.9526C24.0354 43.2029 23.333 44.8986 23.333 46.6667V50"
                stroke="#94A3B8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M34.9997 33.3333C38.6816 33.3333 41.6663 30.3486 41.6663 26.6667C41.6663 22.9848 38.6816 20 34.9997 20C31.3178 20 28.333 22.9848 28.333 26.6667C28.333 30.3486 31.3178 33.3333 34.9997 33.3333Z"
                stroke="#94A3B8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    );
};

export default ProfileEditIcon;