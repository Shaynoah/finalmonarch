import React from 'react'
import electronicEquipmentForm from '../forms/Electronic-Equipment-Proposal-Form.pdf'
import electronicImage from '../assets/electronic.jpg'

const ElectronicEquipment = () => {
  return (
    <div className="electronic-equipment-page">
      {/* Hero Section */}
      <section className="electronic-equipment-hero">
        <div className="electronic-equipment-hero-content">
          <div className="electronic-equipment-badge">
            <span>Electronic Equipment</span>
          </div>
          <h1 className="electronic-equipment-title">
            All-Risk Resilience for Your Electronics
          </h1>
          <p className="electronic-equipment-subtitle">
            We've got your back against sudden and unforeseen losses, ensuring your electronic equipment stays resilient and ready for the future
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="electronic-equipment-content-section">
        <div className="container">
          <div className="electronic-equipment-info-card">
            <div className="electronic-equipment-info-content">
              <p className="electronic-equipment-info-description">
                Electronic equipment insurance is "accident" on an all risk basis, covering sudden and unforeseen losses which physically affect the equipment insured.
              </p>
            </div>
          </div>

          {/* Electronic Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={electronicImage} alt="Electronic Equipment Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Electronic Assets
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Ensure your electronic equipment is protected against sudden and unforeseen losses with comprehensive all-risk coverage. Our insurance provides resilience for your valuable electronics, keeping them ready for the future.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="electronic-equipment-form-button-section">
            <a href={electronicEquipmentForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default ElectronicEquipment
