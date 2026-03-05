import React from 'react'
import fireAndPerilsForm from '../forms/Fire-and-Perils-Proposal-form.pdf'

const ConsequentialLoss = () => {
  return (
    <div className="consequential-loss-page">
      {/* Hero Section */}
      <section className="consequential-loss-hero">
        <div className="consequential-loss-hero-content">
          <div className="consequential-loss-badge">
            <span>Consequential Loss</span>
          </div>
          <h1 className="consequential-loss-title">
            Safeguarding Your Gains, Ensuring Business Fortitude
          </h1>
          <p className="consequential-loss-subtitle">
            We provide peace of mind by compensating for lost gross profits and wages during business interruptions.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="consequential-loss-content-section">
        <div className="container">
          <div className="consequential-loss-info-card">
            <div className="consequential-loss-info-content">
              <p className="consequential-loss-info-description">
                This provides security for our clients against loss of profit which would otherwise have been earned had the fire damage not occurred.
              </p>
              <p className="consequential-loss-info-description" style={{ marginTop: '1.5rem' }}>
                This cover provides peace mind to our participants against such effects of fire. The compensation is for the Gross profits lost and for wages paid out during the period when the business is interrupted.
              </p>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="consequential-loss-form-button-section">
            <a href={fireAndPerilsForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default ConsequentialLoss
