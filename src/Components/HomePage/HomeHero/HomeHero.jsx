import "./HomeHero.scss";
import bannerImage5 from "../../../assets/Banners/Banner-5.webp";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
// import dhaLicensedBadge from "../../../assets/Icons/icon3.png";
import dhaLicensedBadge from "../../../assets/Icons/secure-icon.png";

export default function HomeHero() {
  return (
    <div className="home-hero">
      <div className="banner-background">
        <img
          className="banner-image"
          src={bannerImage5}
          alt="Healthcare at Your Doorstep"
        />
      </div>

      <div className="hero-content">
        <div className="care-tag">
          <span>Care Delivered in 30 min!</span>
        </div>

        <h1 className="hero-title">Healthcare at<br/> Your Doorstep</h1>

        <p className="hero-description">
          Trusted doctors, IV drips, lab checkups, and<br/> physiotherapy when you need it.
        </p>

        <div className="hero-buttons">
          <a href="https://wa.me/971987654321" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="btn-icon" />
            WhatsApp
          </a>
          <a href="tel:8005060" className="btn-solid-blue">
            <IoMdCall className="btn-icon" />
            Call Now
          </a>
        </div>

        <div className="dha-licensed-badge">
          <img src={dhaLicensedBadge} alt="DHA Licensed Medical" className="check-icon" />
          <span>DHA Licensed Medical</span>
        </div>
      </div>
    </div>
  );
}
