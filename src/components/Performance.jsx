import React from 'react'
import bondForm from '../forms/BOND-APPLICATION-FORM.pdf'

const Performance = () => {
  return (
    <div className="performance-page">
      {/* Hero Section */}
      <section className="performance-hero">
        <div className="performance-hero-content">
          <div className="performance-badge">
            <span>Performance</span>
          </div>
          <h1 className="performance-title">
            Building Confidence, Delivering Promises
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="performance-content-section">
        <div className="container">
          <div className="performance-info-card">
            <div className="performance-info-content">
              <p className="performance-info-description">
                Performance bonds are used when a contractor needs assurance of financial capability to complete contracted work as per agreed terms.
              </p>
              <p className="performance-info-description" style={{ marginTop: '1.5rem' }}>
                For answers to your questions and information on solutions our network of offices aim to be convenient and local. Visit us in person at one of our offices.
              </p>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="performance-form-button-section">
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

export default Performance
