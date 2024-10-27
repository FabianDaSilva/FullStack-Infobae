import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const Layout = ({ children, hide }) => {
    return (
        <div className='Layout'>
            <NavBar hide={hide} />
            {children}
            <Footer />
        </div>
    )
}
