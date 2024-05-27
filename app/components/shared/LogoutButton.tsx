'use client'
import {signOut} from 'next-auth/react';
import React, {useState} from 'react'
import PopupConfirm from "@/app/components/shared/PopupConfirm";
import {popUpConfirmType} from "@/utils/enums";

const LogoutButton = () => {
    const handleLogout = () => {
        if (confirm("Do you really want to Logout?")) {
            signOut();
        }
    }
  return (
        <button onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton