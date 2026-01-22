import { useState } from "react";
import "./FAQSection.scss";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqs = [
  {
    id: 1,
    question: "Do you accept insurance?",
    answer: "Yes, we provide direct billing or reimbursement forms for major insurers. Our team can help you with the insurance process and documentation needed for claims."
  },
  {
    id: 2,
    question: "How much does it cost?",
    answer: "We offer transparent pricing with visit fees clearly communicated before payment. Costs vary based on the service type (doctor visit, nurse visit, lab tests, or IV therapy). Contact us for specific pricing details."
  },
  {
    id: 3,
    question: "Do you come to hotels?",
    answer: "Yes, we provide medical services at hotels, offices, and homes across Dubai, Abu Dhabi, and Sharjah. Our medical team can visit you wherever you are comfortable."
  },
  {
    id: 4,
    question: "Can you give Sick Leave?",
    answer: "Yes, our DHA-licensed doctors can provide sick notes and medical certificates as part of their consultation. These are official documents recognized by employers and authorities in the UAE."
  },
  {
    id: 5,
    question: "Do you come to Home?",
    answer: "Absolutely! City Doctor specializes in home visits. Our medical team comes directly to your home, hotel, or office. Average arrival time is 30-45 minutes, and you receive full medical examination, prescriptions, and sick notes in the comfort of your location."
  },
  {
    id: 6,
    question: "How Long is Each Session?",
    answer: "A typical doctor home visit lasts 30-45 minutes, including full examination, diagnosis, prescription, and documentation. Lab test collections take 15-20 minutes, while IV therapy sessions can range from 30 minutes to 2 hours depending on the treatment."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-container">
      <div className="faq-wrapper">
        <h1 className="section-title">Got Questions? We've Got Answers!</h1>
        <p className="faq-description">
          Find answers to common questions about City Doctor's home medical services. 
          If you have additional questions, feel free to contact us directly.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? (
                    <IoChevronUp className="chevron-icon" />
                  ) : (
                    <IoChevronDown className="chevron-icon" />
                  )}
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

