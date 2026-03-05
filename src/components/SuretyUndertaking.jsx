import React from 'react'
import bondForm from '../forms/BOND-APPLICATION-FORM.pdf'

const SuretyUndertaking = () => {
  return (
    <div className="surety-undertaking-page">
      {/* Hero Section */}
      <section className="surety-undertaking-hero">
        <div className="surety-undertaking-hero-content">
          <div className="surety-undertaking-badge">
            <span>Surety Undertaking</span>
          </div>
          <h1 className="surety-undertaking-title">
            Building Trust, Securing Commitments
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="surety-undertaking-content-section">
        <div className="container">
          <div className="surety-undertaking-info-card">
            <div className="surety-undertaking-info-content">
              <p className="surety-undertaking-info-description">
                This is an undertaking by an independent third party, the Surety, to the owner that the contractor will perform in accordance with the terms and conditions of the contract, hence a Surety Bond is a three-party contract. The contractor requests the Surety to issue the Bond in favor of the principal. The contractor pays the premium for the Surety Bond but is not the beneficiary of the Bond.
              </p>
              <p className="surety-undertaking-info-description" style={{ marginTop: '1.5rem' }}>
                A Surety Bond is irrevocable and non-cancellable by the Surety. The Surety is committed to pay should default occur by the contractor.
              </p>
              <p className="surety-undertaking-info-description" style={{ marginTop: '1.5rem' }}>
                Surety Bonds provide protection for the principal of a contract against the default of the contractor.
              </p>
              <p className="surety-undertaking-info-description" style={{ marginTop: '1.5rem' }}>
                For answers to your questions and information on solutions our network of offices aim to be convenient and local. Visit us in person at one of our offices.
              </p>
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
