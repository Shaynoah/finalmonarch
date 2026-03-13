import React from 'react'
import bondForm from '../forms/BOND-APPLICATION-FORM.pdf'

const ComesaYellowCard = () => {
  return (
    <div className="comesa-yellow-card-page">
      {/* Hero Section */}
      <section className="comesa-yellow-card-hero">
        <div className="comesa-yellow-card-hero-content">
          <div className="comesa-yellow-card-badge">
            <span>COMESA YELLOW CARD INSURANCE</span>
          </div>
          <h1 className="comesa-yellow-card-title">
            Seamless Cross-Border Motor Insurance
          </h1>
          <p className="comesa-yellow-card-subtitle">
            Regional third-party motor insurance for seamless travel across COMESA member states
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="comesa-yellow-card-content-section">
        <div className="container">
          <div className="comesa-yellow-card-info-card">
            <div className="comesa-yellow-card-info-content">
              <p className="comesa-yellow-card-info-description">
                This is a regional third-party motor insurance policy that provides cross-border cover within participating COMESA countries. It protects motorists against third-party liabilities such as bodily injury or property damage while traveling across member states. The policy simplifies compliance by eliminating the need for separate insurance policies in each country, ensuring seamless regional mobility for commercial and private vehicles.
              </p>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="comesa-yellow-card-form-button-section">
            <a href={bondForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default ComesaYellowCard
