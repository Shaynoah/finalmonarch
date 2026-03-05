import React from 'react'
import carriersForm from '../forms/Carriers-Legal-Liability-Proposal-Form-_Monarch.pdf'
import carriersImage from '../assets/carriers.jpg'

const Carriers = () => {
  return (
    <div className="carriers-page">
      {/* Hero Section */}
      <section className="carriers-hero">
        <div className="carriers-hero-content">
          <div className="carriers-badge">
            <span>Carriers</span>
          </div>
          <h1 className="carriers-title">
            Safeguarding Your Shipments Every Mile of the Way
          </h1>
          <p className="carriers-subtitle">
            This policy covers the insured for legal liability for accidental loss of or damage to goods in the custody or control of the insured whilst in transit by road, rail or any other specified means, occurring during the period of insurance and within the territorial limits specified in the schedule.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="carriers-content-section">
        <div className="container">
          <div className="carriers-info-card">
            <div className="carriers-info-content">
              <p className="carriers-info-description">
                For answers to your questions and information on solutions our network of offices aim to be convenient and local. Visit us in person at one of our offices.
              </p>
            </div>
          </div>

          {/* Carriers Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={carriersImage} alt="Carriers Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Cargo Operations
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Secure your transportation business with comprehensive carriers insurance. Our policy covers legal liability for accidental loss or damage to goods in your custody during transit by road, rail, or other specified means.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="carriers-form-button-section">
            <a href={carriersForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default Carriers
