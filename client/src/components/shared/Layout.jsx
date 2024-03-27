import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { Toaster } from 'react-hot-toast';
const Layout = () => {
    return (
        <>
            <Toaster />
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout
