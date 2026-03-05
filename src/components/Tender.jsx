import React from 'react'
import bondForm from '../forms/BOND-APPLICATION-FORM.pdf'
import tenderImage from '../assets/tender.jpg'

const Tender = () => {
  return (
    <div className="tender-page">
      {/* Hero Section */}
      <section className="tender-hero">
        <div className="tender-hero-content">
          <div className="tender-badge">
            <span>Tender</span>
          </div>
          <h1 className="tender-title">
            Paving the Way for Bids, Securing Tomorrow's Success
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="tender-content-section">
        <div className="container">
          <div className="tender-info-card">
            <div className="tender-info-content">
              <p className="tender-info-description">
                Bid or tender bonds are used when the cost of new tendering has to be incurred in case a successful bidder does not take up an offer.
              </p>
              <p className="tender-info-description" style={{ marginTop: '1.5rem' }}>
                For answers to your questions and information on solutions our network of offices aim to be convenient and local. Visit us in person at one of our offices.
              </p>
            </div>
          </div>

          {/* Tender Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={tenderImage} alt="Tender Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Secure Your Tender Bids
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Protect your business with comprehensive tender bonds. Our bid or tender bonds cover the costs of new tendering when a successful bidder fails to take up an offer, ensuring your bidding process remains secure and protected.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="tender-form-button-section">
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

export default Tender
