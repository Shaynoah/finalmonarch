import React from 'react'
import goodsInTransitForm from '../forms/Goods-In-Transit-Proposal-Form.pdf'
import transit2Image from '../assets/transit2.png'

const GoodsInTransit = () => {
  return (
    <div className="goods-in-transit-page">
      {/* Hero Section */}
      <section className="goods-in-transit-hero">
        <div className="goods-in-transit-hero-content">
          <div className="goods-in-transit-badge">
            <span>Goods in Transit</span>
          </div>
          <h1 className="goods-in-transit-title">
            Secure Your Shipments, Every Mile of the Journey
          </h1>
          <p className="goods-in-transit-subtitle">
            Comprehensive protection for your goods while in transit, ensuring peace of mind from origin to destination.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="goods-in-transit-content-section">
        <div className="container">
          <div className="goods-in-transit-info-card">
            <div className="goods-in-transit-info-content">
              <p className="goods-in-transit-info-description">
                Goods in Transit insurance provides coverage for loss or damage to goods while they are being transported from one location to another. This policy protects against various risks including accidents, theft, fire, and natural disasters during transit by road, rail, air, or sea.
              </p>
              <p className="goods-in-transit-info-description" style={{ marginTop: '1.5rem' }}>
                For answers to your questions and information on solutions our network of offices aim to be convenient and local. Visit us in person at one of our offices.
              </p>
            </div>
          </div>

          {/* Transit Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={transit2Image} alt="Goods in Transit Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Shipments
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Ensure your goods are protected throughout their journey with comprehensive transit insurance. Whether by road, rail, air, or sea, we provide coverage against accidents, theft, fire, and natural disasters.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="goods-in-transit-form-button-section">
            <a href={goodsInTransitForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default GoodsInTransit
