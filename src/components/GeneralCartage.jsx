import React from 'react'
import cartageImage from '../assets/cartage.jpg'

const GeneralCartage = () => {
  return (
    <div className="general-cartage-page">
      {/* Hero Section */}
      <section className="general-cartage-hero">
        <div className="general-cartage-hero-content">
          <div className="general-cartage-badge">
            <span>General Cartage</span>
          </div>
          <h1 className="general-cartage-title">
            Every haul is a promise of protection
          </h1>
          <p className="general-cartage-subtitle">
            We've got your general cartage covered
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="general-cartage-content-section">
        <div className="container">
          <div className="general-cartage-info-card">
            <div className="general-cartage-info-content">
              <p className="general-cartage-info-description">
                This policy applies to a type of vehicle that is used for the carriage of goods for others on hire and/or reward.
              </p>
            </div>
          </div>

          {/* Cartage Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={cartageImage} alt="General Cartage Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Secure Your Haulage Operations
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Protect your commercial vehicle operations with comprehensive general cartage insurance. We ensure your goods transportation business is covered against risks, giving you peace of mind on every journey.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="general-cartage-form-button-section">
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

export default GeneralCartage
