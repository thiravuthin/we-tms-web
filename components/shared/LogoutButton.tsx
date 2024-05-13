'use client'
import { signOut } from 'next-auth/react';
import React from 'react'

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