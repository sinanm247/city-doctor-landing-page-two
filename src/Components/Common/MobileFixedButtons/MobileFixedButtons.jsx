import { FaWhatsapp } from "react-icons/fa";
import { useBookingModal } from "../../../Context/BookingModalContext";
import "./MobileFixedButtons.scss";
import { IoMdCall } from "react-icons/io";

export default function MobileFixedButtons() {
  const { openModal } = useBookingModal();

  return (
    <div className="mobile-fixed-buttons">
      <a
        href="https://wa.me/971987654321"
        className="fixed-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="btn-icon" />
        <span className="btn-text">WhatsApp</span>
      </a>
      <button 
        onClick={openModal}
        className="fixed-btn book-online-btn"
        style={{ background: '#2096F3', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        <IoMdCall className="btn-icon" />
        <span className="btn-text">Call Now</span>
      </button>
    </div>
  );
}

