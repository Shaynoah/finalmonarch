import React from 'react'
import bondForm from '../forms/BOND-APPLICATION-FORM.pdf'

const ImmigrationSecurity = () => {
  return (
    <div className="immigration-security-page">
      {/* Hero Section */}
      <section className="immigration-security-hero">
        <div className="immigration-security-hero-content">
          <div className="immigration-security-badge">
            <span>Immigration Security</span>
          </div>
          <h1 className="immigration-security-title">
            Your Partner in Responsible Immigration
          </h1>
          <p className="immigration-security-subtitle">
            From seamless travel to local solutions, our worldwide network of offices brings convenience and trust to your doorstep.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="immigration-security-content-section">
        <div className="container">
          <div className="immigration-security-info-card">
            <div className="immigration-security-info-content">
              <p className="immigration-security-info-description">
                Immigration or security bonds are issued to non-Kenyans whose conduct the insurer guarantees. In case the insured displays poor conduct, the insurance company is obligated to pay the costs of deportation or the consequences of her or his bad conduct. Kenyans living in foreign countries are also required to secure such bonds upon travel.
              </p>
              <p className="immigration-security-info-description" style={{ marginTop: '1.5rem' }}>
                For answers to your questions and information on solutions our network of offices aim to be convenient and local. Visit us in person at one of our offices.
              </p>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="immigration-security-form-button-section">
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

export default ImmigrationSecurity
