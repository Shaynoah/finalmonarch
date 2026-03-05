import React from 'react'
import burglaryForm from '../forms/Burglary-Proposal-Form.pdf'

const Burglary = () => {
  return (
    <div className="burglary-page">
      {/* Hero Section */}
      <section className="burglary-hero">
        <div className="burglary-hero-content">
          <div className="burglary-badge">
            <span>Burglary</span>
          </div>
          <h1 className="burglary-title">
            Safeguarding Your Business, Shielding Assets
          </h1>
          <p className="burglary-subtitle">
            we've got your assets covered
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="burglary-content-section">
        <div className="container">
          <div className="burglary-info-card">
            <div className="burglary-info-content">
              <p className="burglary-info-description">
                This policy provides protection against loss of or damage to property through entry into or exit from business premises gained forcibly or violently. Assets such as office equipment, furniture fixtures and fittings, stock in trade can be covered under this policy.
              </p>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="burglary-form-button-section">
            <a href={burglaryForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default Burglary
