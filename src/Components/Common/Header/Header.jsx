import React, { useEffect, useState } from 'react'
import "./Header.scss"
import logoWhite from "../../../assets/Logo/City-Doctor-Logo.avif"
import { useLocation } from 'react-router-dom'
import { IoMdCall } from "react-icons/io"
import { FaWhatsapp } from "react-icons/fa"

export default function Header(){
    const location = useLocation()
    const [ isSticky, setIsSticky ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(location.pathname === "/thank-you" || location.pathname !== "/") {
                setIsSticky(true)
            } else if(window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    return (
        <nav className='navbar-container'>
            <div className={`navbar ${isSticky ? "sticky" : ""} ${location.pathname === "/thank-you" ? "thank-you-header" : ""}`}>
                <div className="logo-div">
                    <a href="/" className="logo-link">
                        <img src={logoWhite} alt="City Doctor Logo" className="logo" />
                    </a>
                </div>

                <div className="call-div-right">
                    <div className="call-div">
                        <IoMdCall className="call-icon" />
                        Call Us 24/7
                    </div>
                    <a href="tel:8005060">
                        <div className="call-number">800 50 60</div>
                    </a>
                </div>

                <div className="whatsapp-button-mobile btn btn-whatsapp">
                    <a href="https://wa.me/971987654321" target="_blank" rel="noopener noreferrer" className="whatsapp-btn-header">
                        <FaWhatsapp className="whatsapp-icon" /> WhatsApp
                    </a>
                </div>
            </div>
        </nav>
    )
}