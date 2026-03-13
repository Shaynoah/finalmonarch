import React from 'react'
import golfImage from '../assets/golf.png'

const GolfersInsurance = () => {
  return (
    <div className="golfers-insurance-page">
      {/* Hero Section */}
      <section className="golfers-insurance-hero">
        <div className="golfers-insurance-hero-content">
          <div className="golfers-insurance-badge">
            <span>Golfers Insurance</span>
          </div>
          <h1 className="golfers-insurance-title">
            Comprehensive Protection for Golf Enthusiasts
          </h1>
          <p className="golfers-insurance-subtitle">
            Enjoy peace of mind on and off the course with specialized golf insurance coverage
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="golfers-insurance-content-section">
        <div className="container">
          <div className="golfers-insurance-info-card">
            <div className="golfers-insurance-info-content">
              <p className="golfers-insurance-info-description">
                This specialized cover is designed for golf enthusiasts, providing protection against accidental loss or damage to golf equipment such as clubs, bags, and accessories. It also includes personal accident cover for injuries sustained while playing, third-party liability for accidental injury or damage caused to others, and reimbursement for celebratory expenses following a hole-in-one. The policy ensures that golfers enjoy peace of mind both on and off the course.
              </p>
            </div>
          </div>

          {/* Golf Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={golfImage} alt="Golfers Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Golf Investment
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Our Golfers Insurance provides comprehensive coverage for your golf equipment, personal accident protection, third-party liability, and even celebrates your achievements with hole-in-one expense reimbursement. Play with confidence knowing you're fully protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GolfersInsurance
