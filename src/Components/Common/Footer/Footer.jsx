import "./Footer.scss";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import logo from "../../../assets/Logo/City-Doctor-Logo-White.svg";
import { RiInstagramFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import tiktokIcon from "../../../assets/Icons/tiktok-icon.png";
import instagramIcon from "../../../assets/Icons/instagram-icon.png";
import facebookIcon from "../../../assets/Icons/facebook-icon.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_content">
                {/* Left Column - Logo and License */}
                <div className="footer_col footer_col_logo">
                    <div className="logo_section">
                        <img src={logo} alt="City Doctor" className="logo_image" />
                    </div>
                    <p className="license_text">MOHAP License: 0QA5X607-080623</p>
                </div>

                {/* Middle Column - Contact Us */}
                <div className="footer_col footer_col_contact">
                    <h2 className="footer_heading">Contact Us</h2>
                    <div className="contact_details">
                        <p>Phone: <a href="tel:8005060">800 50 60</a></p>
                        <p>WhatsApp: <a href="https://wa.me/971987654321" target="_blank" rel="noopener noreferrer">Click to Chat</a></p>
                        <p>Email: <a href="mailto:support@citydoctor.ae">support@citydoctor.ae</a></p>
                    </div>
                </div>

                {/* Right Column - Follow Us */}
                <div className="footer_col footer_col_social">
                    <h2 className="footer_heading">Follow Us</h2>
                    <p className="social_description">Stay updated and connected:</p>
                    <div className="social_icons">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social_icon">
                            <img src={tiktokIcon} alt="TikTok" className="social_icon_image" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social_icon">
                            <img src={instagramIcon} alt="Instagram" className="social_icon_image" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social_icon">
                            <img src={facebookIcon} alt="Facebook" className="social_icon_image" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer_copyright">
                <div className="copyright_divider"></div>
                <p className="copyright_text">© 2025 City Doctor Healthcare LLC. All Rights Reserved.</p>
            </div>
        </footer>
    );
}