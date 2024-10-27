import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const Layout = ({ children }) => {
    return (
        <div className='Layout'>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}
