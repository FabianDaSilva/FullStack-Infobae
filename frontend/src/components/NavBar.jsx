import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({hide}) => {
    return (
        <nav className="w-full h-16 flex items-center justify-between px-4">
            <div className="flex-1 flex justify-start">
                <Link to="/">
                    <img src="https://www.infobae.com/pf/resources/images/logo_infobae_naranja.svg?d=2709" alt="Logo" className="h-8" />
                </Link>
            </div>
            {!hide && (
                <Link to="/register">
                    <button className="bg-orange-300 hover:bg-orange-200 text-[#3b3b3b] px-4 py-1 rounded">
                        Registrarme
                    </button>
                </Link>
            )}            
        </nav>
    )
}

export default NavBar