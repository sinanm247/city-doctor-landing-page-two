import "./WhyChooseUsSection.scss";
import heroImage from "../../../assets/Images/img-5.png";
import featureIcon from "../../../assets/Icons/icon2-white.png";

const features = [
  {
    id: 1,
    title: "Licensed & Safe",
    description: "All staff are DHA/MOH licensed and strictly vetted."
  },
  {
    id: 2,
    title: "Insurance Accepted",
    description: "We provide direct billing or reimbursement forms for major insurers"
  },
  {
    id: 3,
    title: "Faster Than ER",
    description: "Average arrival time is 35 minutes. No waiting rooms full of sick"
  },
  {
    id: 4,
    title: "Multilingual",
    description: "Doctors speak English, Arabic, Hindi, Urdu & Tagalog."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="why-choose-us-section section-container">
      <div className="why-choose-us-wrapper">
        <div className="why-choose-us-content">
          <div className="hero-image-container">
            <img src={heroImage} alt="City Doctor Hero" className="hero-image" />
          </div>
          <div className="features-container">
            <h1 className="section-title">Why Uae Residents Trust Us More Than Clinics.</h1>
            <div className="features-list">
              {features.map((feature) => (
                <div key={feature.id} className="feature-item">
                  <div className="feature-icon-wrapper">
                    <img src={featureIcon} alt={feature.title} className="feature-icon" />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
