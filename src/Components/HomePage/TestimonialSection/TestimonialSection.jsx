import { useState, useRef } from "react";
import "./TestimonialSection.scss";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import googleReviewsImage from "../../../assets/Common/google-icon.png";

const testimonials = [
  {
    id: 1,
    name: "Anna John",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review: "Excellent service! The doctor arrived on time and provided professional care. Highly recommended for anyone needing medical assistance at home."
  },
  {
    id: 3,
    name: "Mohammed Ali",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    review: "City Doctor has been a lifesaver. The convenience of having medical professionals come to your home is unmatched. Great service!"
  },
  {
    id: 4,
    name: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    review: "Professional, caring, and efficient. The team handled everything perfectly and made us feel comfortable throughout the visit."
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && currentIndex < testimonials.length - 1) {
      const newIndex = currentIndex + 1;
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const goToSlide = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  return (
    <section id="testimonials" className="testimonial-section section-container">
      <div className="testimonial-wrapper">
        <h1 className="section-title">Customer Review & Ratings</h1>
        <p className="section-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

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

        <div className="testimonial-content">
          <div className="google-reviews-section">
            <div className="google-header">
              <img src={googleReviewsImage} alt="Google Reviews" className="google-logo" />
              <span className="google-text">Reviews</span>
            </div>

            <div className="stats-cards">
              <div className="stat-card stat-card-blue">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Ratings</div>
              </div>
              <div className="stat-card stat-card-yellow">
                <div className="stat-number">1200+</div>
                <div className="stat-label">Reviews</div>
              </div>
            </div>
          </div>

          <div className="testimonial-carousel-container">
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              aria-label="Previous testimonial"
            >
              <IoChevronBack />
            </button>

            <div 
              className="testimonial-carousel" 
              ref={carouselRef}
              onScroll={handleScroll}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-name">{testimonial.name}</div>
                  </div>
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.review}</p>
                </div>
              ))}
            </div>

            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={scrollRight}
              disabled={currentIndex === testimonials.length - 1}
              aria-label="Next testimonial"
            >
              <IoChevronForward />
            </button>

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

