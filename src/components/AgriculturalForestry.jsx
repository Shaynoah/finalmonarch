import React from 'react'
import agriImage from '../assets/agri.png'

const AgriculturalForestry = () => {
  return (
    <div className="agricultural-forestry-page">
      {/* Hero Section */}
      <section className="agricultural-forestry-hero">
        <div className="agricultural-forestry-hero-content">
          <div className="agricultural-forestry-badge">
            <span>Agricultural and Forestry</span>
          </div>
          <h1 className="agricultural-forestry-title">
            Fortifying Your Fields, Securing Your Harvest
          </h1>
          <p className="agricultural-forestry-subtitle">
            We've got your fields covered.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="agricultural-forestry-content-section">
        <div className="container">
          <div className="agricultural-forestry-info-card">
            <div className="agricultural-forestry-info-content">
              <p className="agricultural-forestry-info-description">
                The objective of this Insurance policy is to indemnify for accidental loss of or damage to agricultural vehicles (e.g. tractors, combined harvesters, etc.) while being driven by the insured or other persons carrying out related legal activity with the insured's consent, and providing financial compensation for third party bodily injury or property damage.
              </p>
            </div>
          </div>

          {/* Agricultural Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={agriImage} alt="Agricultural and Forestry Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Agricultural Operations
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Safeguard your agricultural vehicles and equipment with comprehensive insurance coverage. From tractors to harvesters, we ensure your farming operations are protected against unexpected losses and damages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AgriculturalForestry
