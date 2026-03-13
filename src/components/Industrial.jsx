import React from 'react'
import industrialForm from '../forms/INDUSTRIAL-ALL-RISKS-PROPOSAL-FORM.pdf'
import indImage from '../assets/ind.png'

const Industrial = () => {
  return (
    <div className="industrial-page">
      {/* Hero Section */}
      <section className="industrial-hero">
        <div className="industrial-hero-content">
          <div className="industrial-badge">
            <span>Industrial</span>
          </div>
          <h1 className="industrial-title">
            A Comprehensive Haven for Corporate Security
          </h1>
          <p className="industrial-subtitle">
            Your one-stop solution for comprehensive security needs
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="industrial-content-section">
        <div className="container">
          <div className="industrial-info-card">
            <div className="industrial-info-content">
              <p className="industrial-info-description">
                It mainly incorporates Fire & Allied Perils, Burglary, Accidental damage and Business Interruption. It provides indemnity to the property insured against any loss or damage, from any cause, that is not excluded by the policy.
              </p>
              <p className="industrial-info-description" style={{ marginTop: '1.5rem' }}>
                It is appropriate for corporate clients aspiring to cover all their stocks against various risks in a single policy. It is simply a one-stop package for your security needs.
              </p>
            </div>
          </div>

          {/* Industrial Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={indImage} alt="Industrial Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Comprehensive Industrial Protection
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Protect your industrial operations with our all-risks insurance package. This comprehensive policy covers Fire & Allied Perils, Burglary, Accidental Damage, and Business Interruption, providing a one-stop solution for all your corporate security needs.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="industrial-form-button-section">
            <a href={industrialForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default Industrial
