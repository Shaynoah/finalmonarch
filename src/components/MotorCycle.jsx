import React from 'react'
import cycleImage from '../assets/cycle.jpg'

const MotorCycle = () => {
  return (
    <div className="motor-cycle-page">
      {/* Hero Section */}
      <section className="motor-cycle-hero">
        <div className="motor-cycle-hero-content">
          <div className="motor-cycle-badge">
            <span>Motor Cycle</span>
          </div>
          <h1 className="motor-cycle-title">
            Safeguarding Every Journey, Two Wheels at a Time
          </h1>
          <p className="motor-cycle-subtitle">
            Whether for personal rides or commercial cruises, we've got your two-wheeled adventures covered
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="motor-cycle-content-section">
        <div className="container">
          <div className="motor-cycle-info-card">
            <div className="motor-cycle-info-content">
              <p className="motor-cycle-info-description">
                The Monarch Insurance offers an insurance policy for motorcycles including commercial motorcycles popularly known as Boda-boda.
              </p>
            </div>
          </div>

          {/* Cycle Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={cycleImage} alt="Motor Cycle Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Ride with Confidence
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Protect your motorcycle and your peace of mind. Our comprehensive coverage extends to both personal and commercial motorcycles, ensuring you're covered on every ride.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="motor-cycle-form-button-section">
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

export default MotorCycle
