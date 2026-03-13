import React from 'react'
import fleetImage from '../assets/fleet.png'

const InstitutionalFleet = () => {
  return (
    <div className="institutional-fleet-page">
      {/* Hero Section */}
      <section className="institutional-fleet-hero">
        <div className="institutional-fleet-hero-content">
          <div className="institutional-fleet-badge">
            <span>Institutional Fleet</span>
          </div>
          <h1 className="institutional-fleet-title">
            Comprehensive Fleet Protection for Institutions
          </h1>
          <p className="institutional-fleet-subtitle">
            Protect your institutional vehicle fleet with comprehensive coverage
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="institutional-fleet-content-section">
        <div className="container">
          <div className="institutional-fleet-info-card">
            <div className="institutional-fleet-info-content">
              <p className="institutional-fleet-info-description">
                This policy provides comprehensive coverage for institutional vehicle fleets, ensuring protection for multiple vehicles under a single policy. It covers accidental loss or damage to motor vehicles including standard accessories, and provides cover for liabilities to third parties arising out of the use of the motor vehicles.
              </p>
              <p className="institutional-fleet-info-description" style={{ marginTop: '1.5rem' }}>
                Ideal for organizations, institutions, and businesses that operate multiple vehicles, this policy offers streamlined management and comprehensive protection for your entire fleet.
              </p>
            </div>
          </div>

          {/* Vehicle Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={fleetImage} alt="Institutional Fleet Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Institutional Fleet
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Our institutional fleet insurance provides comprehensive coverage for all your vehicles under one convenient policy. Get the protection your institution needs with flexible coverage options tailored to your fleet size and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InstitutionalFleet
