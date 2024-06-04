"use client"


import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar'
import { usePathname } from 'next/navigation'
const Layout = ({ children }) => {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout