import React from 'react'
import domesticPackageForm from '../forms/Domestic-Package-Proposal-Form.pdf'

const DomesticPackage = () => {
  return (
    <div className="domestic-package-page">
      {/* Hero Section */}
      <section className="domestic-package-hero">
        <div className="domestic-package-hero-content">
          <div className="domestic-package-badge">
            <span>Domestic Package</span>
          </div>
          <h1 className="domestic-package-title">
            Your Comprehensive Haven of Protection
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="domestic-package-content-section">
        <div className="container">
          <div className="domestic-package-info-card">
            <div className="domestic-package-info-content">
              <p className="domestic-package-info-description">
                Our domestic policy is a package cover aimed at meeting insurance requirements of home owners and occupiers. It provides cover for the dwelling house, household contents and other personal belongings against fire, natural catastrophes and theft. It also covers personal liabilities of the insured to third parties and provides compensation to domestic servants for death or injury in the course of duty.
              </p>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="domestic-package-form-button-section">
            <a href={domesticPackageForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default DomesticPackage
