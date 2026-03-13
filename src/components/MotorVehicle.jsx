import React from 'react'
import motorVehicle2Image from '../assets/motorvehicle2.png'

const MotorVehicle = () => {
  return (
    <div className="motor-vehicle-page">
      {/* Hero Section */}
      <section className="motor-vehicle-hero">
        <div className="motor-vehicle-hero-content">
          <div className="motor-vehicle-badge">
            <span>Motor Vehicle</span>
          </div>
          <h1 className="motor-vehicle-title">
            Your Comprehensive Road Protection
          </h1>
          <p className="motor-vehicle-subtitle">
            Your road, your protection – because every journey deserves assurance
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="motor-vehicle-content-section">
        <div className="container">
          <div className="motor-vehicle-info-card">
            <div className="motor-vehicle-info-content">
              <p className="motor-vehicle-info-description">
                This policy covers accidental loss or damage to motor vehicles including the standard accessories. It also provides cover for liabilities to third parties arising out of the use of the motor vehicle.
              </p>
              <p className="motor-vehicle-info-description" style={{ marginTop: '1.5rem' }}>
                Cover is taken depending on whether the vehicle is used and legally registered for private use, commercial purposes or use for hire.
              </p>
              <p className="motor-vehicle-info-description" style={{ marginTop: '1.5rem', fontWeight: '600' }}>
                There are different types of covers as follows:
              </p>
              <ol className="motor-vehicle-list" style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
                <li><strong>Third Party Only</strong> – covers liability to third parties only.</li>
                <li><strong>Third Party, Fire and Theft</strong> – covers liability to third parties as well as cover to the motor vehicle in case of fire and or theft.</li>
                <li><strong>Comprehensive</strong> – covers liability to third parties as well as cover to the motor vehicle in case of fire, theft and or accidental damage</li>
              </ol>
            </div>
          </div>

          {/* Vehicle Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={motorVehicle2Image} alt="Motor Vehicle Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Get Protected Today
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Our comprehensive motor vehicle insurance provides you with peace of mind on every journey. Choose the coverage that best fits your needs and protect what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MotorVehicle
