import React from 'react'
import professionalIndemnityForm from '../forms/PROFESSIONAL-INDEMNITY-PROPOSAL-FORM-.pdf'
import indemnityImage from '../assets/indemnity.png'

const ProfessionalIndemnity = () => {
  return (
    <div className="professional-indemnity-page">
      {/* Hero Section */}
      <section className="professional-indemnity-hero">
        <div className="professional-indemnity-hero-content">
          <div className="professional-indemnity-badge">
            <span>Professional Indemnity</span>
          </div>
          <h1 className="professional-indemnity-title">
            Safeguarding Professional Legacies with Precision
          </h1>
          <p className="professional-indemnity-subtitle">
            Whether you're a lawyer, trustee, or medical professional, secure your legacy with precision and confidence
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="professional-indemnity-content-section">
        <div className="container">
          <div className="professional-indemnity-info-card">
            <div className="professional-indemnity-info-content">
              <p className="professional-indemnity-info-description">
                This policy protects professionals from legal liability that may arise due to acts of negligence, error or omission in the rendering of or failure to render professional services for others in the insured's capacity as a professional.
              </p>
              
              <p className="professional-indemnity-info-description" style={{ marginTop: '1.5rem', fontWeight: '600' }}>
                Cover is available for, among others:
              </p>
              
              <ul className="professional-indemnity-list" style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
                <li>Lawyers</li>
                <li>Trustees (Liability)</li>
                <li>Medical (general practitioners, nurses, dentists, physiotherapists)</li>
              </ul>
            </div>
          </div>

          {/* Indemnity Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={indemnityImage} alt="Professional Indemnity Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Professional Practice
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Secure your professional reputation and financial security with comprehensive indemnity insurance. Our coverage protects you from legal liability arising from negligence, errors, or omissions in your professional services.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="professional-indemnity-form-button-section">
            <a href={professionalIndemnityForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default ProfessionalIndemnity
