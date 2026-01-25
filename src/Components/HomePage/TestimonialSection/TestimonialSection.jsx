import { useState } from "react";
import "./TestimonialSection.scss";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import googleReviewsImage from "../../../assets/Common/google-icon.png";
import icon9 from "../../../assets/Icons/icon-9.png";
import icon10 from "../../../assets/Icons/icon-10.png";

const testimonials = [
  {
    id: 1,
    name: "Elzbieta Cylwik",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review: "My husband was very polly with nearly 40 degres of fever. Dr Shoyab and nurse Rabab provided exceptional care during his visit. He was attentive, thorough, and made sure we understood his treatment options. The results and invoice paper were ready in 24h. Highly"
  },
  {
    id: 2,
    name: "Elzbieta Cylwik",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review: "My husband was very polly with nearly 40 degres of fever. Dr Shoyab and nurse Rabab provided exceptional care during his visit. He was attentive, thorough, and made sure we understood his treatment options. The results and invoice paper were ready in 24h. Highly"
  },
  {
    id: 3,
    name: "Elzbieta Cylwik",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review: "My husband was very polly with nearly 40 degres of fever. Dr Shoyab and nurse Rabab provided exceptional care during his visit. He was attentive, thorough, and made sure we understood his treatment options. The results and invoice paper were ready in 24h. Highly"
  }
];

const userAvatars = [
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=33",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=68"
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="testimonial-section section-container">
      <div className="testimonial-wrapper">
        <h1 className="section-title">Served 50,000+ Across Uae's Top Hotels & Communities</h1>

        <div className="testimonial-header-section">
          <div className="google-reviews-section">
            <div className="google-header">
              <img src={googleReviewsImage} alt="Google Reviews" className="google-logo" />
            </div>

            <div className="rating-section">
              <img src={icon10} alt="Rating icon" className="rating-icon-left" />
              <div className="rating-number">4.9</div>
              <img src={icon9} alt="Rating icon" className="rating-icon-right" />
            </div>

            <a 
              href="https://www.google.com/search?q=city+doctor+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="reviews-button"
            >
              +1200 Reviews
            </a>

            <div className="avatars-row">
              {userAvatars.map((avatar, index) => (
                <img 
                  key={index} 
                  src={avatar} 
                  alt={`Customer ${index + 1}`} 
                  className="user-avatar"
                  style={{ marginLeft: index > 0 ? '-10px' : '0' }}
                />
              ))}
            </div>
          </div>

          <div className="testimonial-cards-container">
            <div className="testimonial-carousel">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-card ${currentIndex === index ? 'active' : ''}`}
                >
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <IoIosStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.review}</p>
                </div>
              ))}
            </div>

            <div className="pagination-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

