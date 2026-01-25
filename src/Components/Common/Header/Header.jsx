import React, { useEffect, useState } from 'react'
import "./Header.scss"
import logoWhite from "../../../assets/Logo/City-Doctor-Logo.avif"
import { useLocation } from 'react-router-dom'
import service247Icon from "../../../assets/Common/247-service-icon.png"
import whatsappIcon from "../../../assets/Common/whatsapp.svg"

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
                    <div className="service-button">
                        <img src={service247Icon} alt="24/7 Services" className="service-icon" />
                    </div>
                    <div className="whatsapp-button">
                        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon-btn" />
                        <span className="whatsapp-number">055 154 8684</span>
                    </div>
                </div>

            </div>
        </nav>
    )
}