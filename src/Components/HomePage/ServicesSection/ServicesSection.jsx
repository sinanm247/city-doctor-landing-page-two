import "./ServicesSection.scss";
import { useBookingModal } from "../../../Context/BookingModalContext";
import service1 from "../../../assets/Services/service-1.png";
import service2 from "../../../assets/Services/service-2.png";
import service3 from "../../../assets/Services/service-3.png";
import service4 from "../../../assets/Services/service-4.png";

const services = [
  {
    id: 1,
    image: service1,
    title: "Fever & Flu",
    description: "Seasonal flu, high temperature, infections."
  },
  {
    id: 2,
    image: service2,
    title: "Stomach Pain",
    description: "Digestive issues, nausea, abdominal discomfort."
  },
  {
    id: 3,
    image: service3,
    title: "Baby Care",
    description: "Pediatric care, vaccinations, health monitoring."
  },
  {
    id: 4,
    image: service4,
    title: "Headache & Migraine",
    description: "Pain relief, tension headaches, chronic migraines."
  },
  {
    id: 5,
    image: service1,
    title: "Skin Rashes",
    description: "Allergies, dermatitis, skin infections treatment."
  },
  {
    id: 6,
    image: service2,
    title: "Fever & Flu",
    description: "Seasonal flu, high temperature, infections."
  },
  {
    id: 7,
    image: service3,
    title: "Stomach Pain",
    description: "Digestive issues, nausea, abdominal discomfort."
  },
  {
    id: 8,
    image: service4,
    title: "Baby Care",
    description: "Pediatric care, vaccinations, health monitoring."
  }
];

const ServicesSection = () => {
  const { openModal } = useBookingModal();

  return (
    <section id="services" className="services-section section-container">
      <div className="services-wrapper">
        <h1 className="section-title">We Treat You Where You<br/> Are Comfortable</h1>
        <p className="section-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button 
                  onClick={openModal}
                  className="btn-outline-blue"
                  style={{ background: 'white', border: '2px solid #2096F3', color: '#2096F3', cursor: 'pointer' }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="more-services-wrapper">
          <a href="#services" className="btn-solid-blue">
            More Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
