import React from 'react'
import bondForm from '../forms/BOND-APPLICATION-FORM.pdf'

const SuretyUndertaking = () => {
  return (
    <div className="surety-undertaking-page">
      {/* Hero Section */}
      <section className="surety-undertaking-hero">
        <div className="surety-undertaking-hero-content">
          <div className="surety-undertaking-badge">
            <span>Fidelity Guarantee</span>
          </div>
          <h1 className="surety-undertaking-title">
            Fidelity Guarantee
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="surety-undertaking-content-section">
        <div className="container">
          <div className="surety-undertaking-info-card">
            <div className="surety-undertaking-info-content">
              <p className="surety-undertaking-info-description">
                Cover the employer against loss of money, loss of stock or property which might result from acts of dishonesty by an employee in the course of employment.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Benefits</h3>
                <p className="surety-undertaking-info-description" style={{ marginBottom: '0.75rem' }}>
                  Reimbursement for loss arising out of the following:
                </p>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.8 }}>
                  <li>Dishonesty.</li>
                  <li>Fraud.</li>
                  <li>Loss of property.</li>
                  <li>Loss from loans or trading.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="surety-undertaking-form-button-section">
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

export default SuretyUndertaking
