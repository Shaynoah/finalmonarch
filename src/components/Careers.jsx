import React, { useEffect, useRef } from 'react'
import careersImage from '../assets/careers.png'

const Careers = () => {
  const jobPositions = [
    { 
      title: 'Senior Insurance Advisor', 
      department: 'Sales & Business Development',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      image: careersImage
    },
    { 
      title: 'Claims Specialist', 
      department: 'Claims Department',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      image: careersImage
    }
  ]

  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.add('fade-in')
        observer.observe(card)
      }
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card)
        }
      })
    }
  }, [])

  return (
    <section id="careers" className="careers-page-section">
      {/* Hero Section */}
      <div className="careers-hero">
        <div className="container">
          <div className="careers-hero-content">
            <span className="careers-badge">Join Our Team</span>
            <h1 className="careers-hero-title">Build Your Career With Us</h1>
            <p className="careers-hero-description">
              We're always looking for talented individuals to join our growing team. 
              Explore exciting opportunities and grow your career with Monarch Insurance.
            </p>
          </div>
        </div>
      </div>

      {/* Job Positions Section */}
      <div className="careers-positions-section">
        <div className="container">
          <h2 className="careers-section-title">Current Open Positions</h2>
          <div className="positions-grid">
            {jobPositions.map((position, index) => (
              <div
                key={index}
                className="position-card"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="position-card-image">
                  <img src={position.image} alt={position.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers
