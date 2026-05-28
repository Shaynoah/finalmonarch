import React from 'react'
import { useLocation } from 'react-router-dom'
import fireAndPerilsForm from '../forms/Fire-and-Perils-Proposal-form.pdf'

const consLossImage = 'https://res.cloudinary.com/diozv0xm2/image/upload/q_auto/f_auto/v1776343489/consloss_trijtn.png'

const ConsequentialLoss = () => {
  const location = useLocation()
  const isMachineryBreakdownLossVariant =
    new URLSearchParams(location.search).get('variant') === 'machinery-breakdown-loss-of-profit'

  const content = isMachineryBreakdownLossVariant
    ? {
        badge: 'Machinery Breakdown (Loss of Profit)',
        title: 'Protecting Profit During Machinery Downtime',
        subtitle:
          'Cover for loss of profit or increased cost of working caused by machinery breakdown.',
        description:
          'Covers against loss of profit or increase in cost of working due to breakdown of machines.',
        imageTitle: 'Machinery Breakdown (Loss of Profit)',
        imageText:
          'This cover protects your business earnings and helps you maintain operations when key machinery breaks down unexpectedly.',
      }
    : {
        badge: 'Fire Loss of Profit Insurance',
        title: 'Fire Loss of Profit Insurance',
        subtitle:
          'Covers loss of profit upon business interruption due to fire or other extended perils covered under the policy schedule.',
        description:
          'Covers loss of profit upon business interruption due to fire or other extended perils covered under the policy schedule.',
        benefits:
          'Benefits include reimbursement of overhead costs and the loss of profits arising from accidental damage such as floods, fire and allied perils including earthquake, riot, strike and civil commotion.',
        imageTitle: 'Protect Your Business from Interruption Losses',
        imageText:
          'Secure your business against loss of profit and operational disruptions. Our consequential loss insurance provides compensation for lost gross profits and wages during business interruptions caused by fire damage or other covered perils.',
      }

  return (
    <div
      className={`consequential-loss-page ${
        isMachineryBreakdownLossVariant ? 'machinery-breakdown-loss-page' : ''
      }`}
    >
      {/* Hero Section */}
      <section className="consequential-loss-hero">
        <div className="consequential-loss-hero-content">
          {!isMachineryBreakdownLossVariant && (
            <div className="consequential-loss-badge">
              <span>{content.badge}</span>
            </div>
          )}
          <h1 className="consequential-loss-title">
            {content.title}
          </h1>
          <p className="consequential-loss-subtitle">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="consequential-loss-content-section">
        <div className="container">
          <div className="consequential-loss-info-card">
            <div className="consequential-loss-info-content">
              <p className="consequential-loss-info-description">
                {content.description}
              </p>
              {isMachineryBreakdownLossVariant ? (
                <div style={{ marginTop: '1.5rem' }}>
                  <h3 style={{ marginBottom: '0.75rem' }}>Benefits</h3>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.8 }}>
                    <li>The continuing business expenses (standing charges)</li>
                    <li>Protection of your net profit</li>
                    <li>Salaries and wages paid to employees is covered</li>
                    <li>Increase in cost of working due to machinery breakdown</li>
                  </ul>
                </div>
              ) : (
                <div style={{ marginTop: '1.5rem' }}>
                  <h3 style={{ marginBottom: '0.75rem' }}>Benefits</h3>
                  <p className="consequential-loss-info-description">
                    {content.benefits}
                  </p>
                </div>
              )}
            </div>
          </div>

          {!isMachineryBreakdownLossVariant && (
            <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
              <div className="insurance-form-image">
                <img loading="lazy" src={consLossImage} alt="Business continuity planning supported by consequential loss insurance in Kenya" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                    {content.imageTitle}
                  </h3>
                  <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                    {content.imageText}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Application Form Button */}
          <div className="consequential-loss-form-button-section">
            <a href={fireAndPerilsForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default ConsequentialLoss
