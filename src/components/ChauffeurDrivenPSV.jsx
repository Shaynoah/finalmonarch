import React from 'react'
import psvImage from '../assets/psv.png'

const ChauffeurDrivenPSV = () => {
  return (
    <div className="chauffeur-driven-psv-page">
      {/* Hero Section */}
      <section className="chauffeur-driven-psv-hero">
        <div className="chauffeur-driven-psv-hero-content">
          <div className="chauffeur-driven-psv-badge">
            <span>CHAUFFEUR-DRIVEN (PSV)</span>
          </div>
          <h1 className="chauffeur-driven-psv-title">
            Professional Passenger Service Vehicle Protection
          </h1>
          <p className="chauffeur-driven-psv-subtitle">
            Comprehensive coverage for chauffeur-driven passenger service vehicles
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="chauffeur-driven-psv-content-section">
        <div className="container">
          <div className="chauffeur-driven-psv-info-card">
            <div className="chauffeur-driven-psv-info-content">
              <p className="chauffeur-driven-psv-info-description">
                This policy is specifically designed for chauffeur-driven Passenger Service Vehicles (PSV) used for hire and reward. It provides comprehensive coverage for accidental loss or damage to the vehicle, including standard accessories, and covers liabilities to third parties and passengers arising out of the use of the vehicle.
              </p>
              <p className="chauffeur-driven-psv-info-description" style={{ marginTop: '1.5rem' }}>
                This coverage is essential for businesses operating passenger service vehicles with professional drivers, ensuring protection for both the vehicle and passengers while maintaining compliance with regulatory requirements.
              </p>
            </div>
          </div>

          {/* Vehicle Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={psvImage} alt="Chauffeur-Driven PSV Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Secure Your Passenger Service Operations
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Our chauffeur-driven PSV insurance provides comprehensive protection for your passenger service vehicles and passengers. Get the coverage you need to operate with confidence and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChauffeurDrivenPSV
