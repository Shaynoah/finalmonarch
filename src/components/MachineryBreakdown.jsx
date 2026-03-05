import React from 'react'
import machineryBreakdownForm from '../forms/MACHINERY-BREAKDOWN-PROPOSAL-FORM-1.pdf'
import machineryBreakdownImage from '../assets/machinery breakdown.jpg'

const MachineryBreakdown = () => {
  return (
    <div className="machinery-breakdown-page">
      {/* Hero Section */}
      <section className="machinery-breakdown-hero">
        <div className="machinery-breakdown-hero-content">
          <div className="machinery-breakdown-badge">
            <span>Machinery Breakdown</span>
          </div>
          <h1 className="machinery-breakdown-title">
            Your go-to accident insurance for machinery
          </h1>
          <p className="machinery-breakdown-subtitle">
            Whether it's sudden or unforeseen, we've got your machinery covered, making financial risks more manageable
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="machinery-breakdown-content-section">
        <div className="container">
          <div className="machinery-breakdown-info-card">
            <div className="machinery-breakdown-info-content">
              <p className="machinery-breakdown-info-description">
                Machinery Breakdown insurance is an accident Insurance cover for Machinery, which provides cover against unforeseen and sudden physical loss or damage to the Insured machinery.
              </p>
              <p className="machinery-breakdown-info-description" style={{ marginTop: '1.5rem' }}>
                Majority of losses in machines are usually very costly and cover for machinery makes the financial risks involved to become more manageable.
              </p>
            </div>
          </div>

          {/* Machinery Breakdown Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={machineryBreakdownImage} alt="Machinery Breakdown Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Machinery
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Safeguard your machinery against unforeseen and sudden physical loss or damage with comprehensive breakdown insurance. Our coverage makes costly machinery losses more manageable, providing you with financial protection and peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="machinery-breakdown-form-button-section">
            <a href={machineryBreakdownForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default MachineryBreakdown
