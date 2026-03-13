import React from 'react'
import bondForm from '../forms/BOND-APPLICATION-FORM.pdf'
import custImage from '../assets/cust.png'

const Customs = () => {
  return (
    <div className="customs-page">
      {/* Hero Section */}
      <section className="customs-hero">
        <div className="customs-hero-content">
          <div className="customs-badge">
            <span>Customs</span>
          </div>
          <h1 className="customs-title">
            Securing Borders, Protecting Markets
          </h1>
          <p className="customs-subtitle">
            We've got your duties covered, ensuring fair trade and market integrity at every border and zone.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="customs-content-section">
        <div className="container">
          <div className="customs-info-card">
            <div className="customs-info-content">
              <p className="customs-info-description">
                Customs and imports bonds ensure that goods which are pending payment of duties are not smuggled into the local market without payment. Should the untaxed goods end up in the market; the insurer will meet the duty payable by the insured. Customs bonds are given for goods in transit through the country or those produced in duty free zones targeting the export markets. Import bonds are given to cover duty for goods imported into the country.
              </p>
            </div>
          </div>

          {/* Customs Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={custImage} alt="Customs Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Secure Your Customs Operations
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Our customs and imports bonds ensure that goods pending payment of duties are not smuggled into the local market. We protect your business operations, whether goods are in transit, produced in duty-free zones, or imported into the country.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="customs-form-button-section">
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

export default Customs
