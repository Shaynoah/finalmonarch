import React from 'react'
import contractorsAllRisksForm from '../forms/CONTRACTORS-ALL-RISKS-INSURANCE-PROPOSAL-FORM.pdf'
import machineryImage from '../assets/machinery.jpg'

const ContractorsPlantMachinery = () => {
  return (
    <div className="contractors-plant-machinery-page">
      {/* Hero Section */}
      <section className="contractors-plant-machinery-hero">
        <div className="contractors-plant-machinery-hero-content">
          <div className="contractors-plant-machinery-badge">
            <span>Contractors Plant & Machinery</span>
          </div>
          <h1 className="contractors-plant-machinery-title">
            Elevate your construction journey
          </h1>
          <p className="contractors-plant-machinery-subtitle">
            Safeguard your assets with us - where resilience meets reliability
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contractors-plant-machinery-content-section">
        <div className="container">
          <div className="contractors-plant-machinery-info-card">
            <div className="contractors-plant-machinery-info-content">
              <p className="contractors-plant-machinery-info-description">
                This insurance provides comprehensive and adequate protection against unforeseen loss or damage in respect to the contract works, construction plant and equipment and or construction machinery as well as against third party liability in respect to property damage or bodily injury arising in connection with the execution of the contract.
              </p>
            </div>
          </div>

          {/* Machinery Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={machineryImage} alt="Contractors Plant & Machinery Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Construction Equipment
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Safeguard your construction plant, equipment, and machinery with comprehensive insurance coverage. Our policy provides protection against unforeseen loss or damage, ensuring your construction operations remain resilient and reliable.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="contractors-plant-machinery-form-button-section">
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

export default ContractorsPlantMachinery
