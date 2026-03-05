import React from 'react'
import marineImage from '../assets/marine.jpg'

const MarineHull = () => {
  return (
    <div className="marine-hull-page">
      {/* Hero Section */}
      <section className="marine-hull-hero">
        <div className="marine-hull-hero-content">
          <div className="marine-hull-badge">
            <span>Marine Hull</span>
          </div>
          <h1 className="marine-hull-title">
            Protecting Your Vessels, Securing Your Operations
          </h1>
          <p className="marine-hull-subtitle">
            Comprehensive marine insurance coverage for your vessels, ensuring protection against physical damage and liability risks.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="marine-hull-content-section">
        <div className="container">
          <div className="marine-hull-info-card">
            <div className="marine-hull-info-content">
              <p className="marine-hull-info-description">
                Marine Hull insurance provides coverage for physical loss or damage to vessels, boats, and watercraft. This policy protects against various marine perils including collision, grounding, fire, theft, and natural disasters. It also covers third-party liability arising from the operation of the insured vessel.
              </p>
              <p className="marine-hull-info-description" style={{ marginTop: '1.5rem' }}>
                For answers to your questions and information on solutions our network of offices aim to be convenient and local. Visit us in person at one of our offices.
              </p>
            </div>
          </div>

          {/* Marine Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={marineImage} alt="Marine Hull Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Secure Your Vessels
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Protect your vessels and watercraft with comprehensive marine hull insurance. Our coverage safeguards against physical damage, collision, grounding, fire, theft, and natural disasters, ensuring your maritime operations remain secure.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="marine-hull-form-button-section">
            <a href="#" className="form-button application-form-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="9"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
                <line x1="9" y1="12" x2="15" y2="12"></line>
              </svg>
              <span>APPLICATION FORM</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarineHull
