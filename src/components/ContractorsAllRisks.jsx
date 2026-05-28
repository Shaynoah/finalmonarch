import React from 'react'
import contractorsAllRisksForm from '../forms/CONTRACTORS-ALL-RISKS-INSURANCE-PROPOSAL-FORM.pdf'

const ContractorsAllRisks = () => {
  return (
    <div className="contractors-all-risks-page">
      {/* Hero Section */}
      <section className="contractors-all-risks-hero">
        <div className="contractors-all-risks-hero-content">
          <h1 className="contractors-all-risks-title">
            Elevate your construction journey
          </h1>
          <p className="contractors-all-risks-subtitle">
            From contract works to construction machinery, we shield your project comprehensively.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contractors-all-risks-content-section">
        <div className="container">
          <div className="contractors-all-risks-info-card">
            <div className="contractors-all-risks-info-content">
              <p className="contractors-all-risks-info-description">
                Provides cover against loss arising out of the erection and installation of machinery plant and steel structures, including physical damage to the contract works, equipment and machinery, and liability for third party bodily injury or property damage arising out of these operations.
              </p>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="contractors-all-risks-form-button-section">
            <a href={contractorsAllRisksForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default ContractorsAllRisks
