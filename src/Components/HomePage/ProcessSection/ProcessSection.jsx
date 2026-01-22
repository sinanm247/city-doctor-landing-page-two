import "./ProcessSection.scss";
import step1Image from "../../../assets/Images/step-1.png";
import step2Image from "../../../assets/Images/step-2.png";
import step3Image from "../../../assets/Images/step-3.png";

const steps = [
  {
    id: 1,
    stepNumber: "Step 1",
    image: step1Image,
    title: "You Book",
    description: "Send a WhatsApp or Call"
  },
  {
    id: 2,
    stepNumber: "Step 2",
    image: step2Image,
    title: "We Dispatch",
    description: "Our nearest medical team heads to your location immediately"
  },
  {
    id: 3,
    stepNumber: "Step 3",
    image: step3Image,
    title: "You Recover",
    description: "Diagnosis, treatment, and medication happen on your sofa."
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="process-section section-container">
      <div className="process-wrapper">
        <h1 className="process-title">Relief Is 3 Steps Away</h1>
        <p className="section-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-card">
              <div className="step-image-wrapper">
                <div className="step-label">{step.stepNumber}</div>
                <img src={step.image} alt={step.title} className="step-image" />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
