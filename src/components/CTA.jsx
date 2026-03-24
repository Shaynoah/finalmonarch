import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="container">
        <div className={`cta-content ${isVisible ? 'visible' : ''}`}>
          <div className="cta-background-pattern"></div>
          <div className="cta-text-content">
            <h2 className="cta-title">GET COVERED IN MINUTES</h2>
            <p className="cta-description">
              Instant policy issuance with no document uploads.
            </p>
            <div className="cta-benefits">
              <div className="cta-benefit-item">
                <span className="cta-bullet-icon">✓</span>
                <span className="cta-benefit-text">ID &amp; vehicle details verified in real time</span>
              </div>
              <div className="cta-benefit-item">
                <span className="cta-bullet-icon">✓</span>
                <span className="cta-benefit-text">Secure mobile payment</span>
              </div>
              <div className="cta-benefit-item">
                <span className="cta-bullet-icon">✓</span>
                <span className="cta-benefit-text">Certificate issued immediately</span>
              </div>
            </div>
            <p className="cta-description">
              Need help? Call <strong>0738 669 931</strong>
            </p>
            <div className="cta-buttons">
              <a
                href="https://bima.monarchinsurance.co.ke/"
                className="btn btn-primary cta-primary-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>BUY INSURANCE NOW</span>
              </a>
              <a
                href="https://agent.monarchinsurance.co.ke/"
                className="btn btn-secondary cta-secondary-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>NEW AGENT PORTAL</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
