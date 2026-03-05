import React, { useEffect, useRef, useState } from 'react'

const Reviews = () => {
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      name: 'Sarah Mwangi',
      role: 'Business Owner',
      rating: 5,
      text: "Monarch Insurance has been our trusted partner for over 10 years. Excellent service and peace of mind.",
      image: '👩‍💼'
    },
    {
      id: 2,
      name: 'James Ochieng',
      role: 'Family Man',
      rating: 5,
      text: "The life insurance policy has been a blessing. Smooth claims process and they truly care about customers.",
      image: '👨‍👩‍👧‍👦'
    },
    {
      id: 3,
      name: 'Mary Wanjiku',
      role: 'Professional',
      rating: 5,
      text: "Competitive rates and outstanding service. They make insurance simple and stress-free.",
      image: '👩‍💻'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Auto-play carousel
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000) // Change slide every 5 seconds

      return () => clearInterval(interval)
    }
  }, [isVisible, reviews.length])

  return (
    <section className="reviews-section" ref={sectionRef}>
      <div className="container">
        <div className={`reviews-header ${isVisible ? 'visible' : ''}`}>
          <span className="reviews-tag">TESTIMONIALS</span>
          <h2 className="reviews-title">What Our Customers Say</h2>
        </div>

        <div className="reviews-carousel-wrapper">
          <div className="reviews-carousel" ref={carouselRef}>
            <div 
              className="reviews-carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={review.id} 
                  className={`review-card ${isVisible ? 'visible' : ''} ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="review-footer">
                    <div className="review-avatar">
                      <span className="avatar-icon">{review.image}</span>
                    </div>
                    <div className="review-info">
                      <h3 className="review-name">{review.name}</h3>
                      <p className="review-role">{review.role}</p>
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="carousel-controls">
            <div className="carousel-dots">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
