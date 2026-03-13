import React from 'react'
import publicLiabilityForm from '../forms/Public-Liability-Proposal-Form-1.pdf'
import publicLiabilityImage from '../assets/public liability.png'

const PublicLiability = () => {
  return (
    <div className="public-liability-page">
      {/* Hero Section */}
      <section className="public-liability-hero">
        <div className="public-liability-hero-content">
          <div className="public-liability-badge">
            <span>Public Liability</span>
          </div>
          <h1 className="public-liability-title">
            Legal Protection Meets Business Integrity
          </h1>
          <p className="public-liability-subtitle">
            The pinnacle of legal protection against liabilities arising from negligence
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="public-liability-content-section">
        <div className="container">
          <div className="public-liability-info-card">
            <div className="public-liability-info-content">
              <p className="public-liability-info-description">
                Legal liabilities arise when negligence is established against a business following actions of employees or activities of the business. These will occur when third parties have been bodily injured or a third party's property has been damaged. The aggrieved party proceeds and sues for compensation of the loss incurred.
              </p>
              <p className="public-liability-info-description" style={{ marginTop: '1.5rem' }}>
                Public Liability protects a participant in respect of legal liability to third parties for accidental death, bodily injury and/or illness and/or loss of or damage to property which happens in connection with the business insured under the policy.
              </p>
              <p className="public-liability-info-description" style={{ marginTop: '1.5rem' }}>
                The public Liability Cover ensures rights and obligations to third parties is met in honest and transparent manner.
              </p>
            </div>
          </div>

          {/* Public Liability Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={publicLiabilityImage} alt="Public Liability Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Business from Third-Party Claims
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Secure your business with comprehensive public liability insurance. Our coverage protects you against legal liability for accidental death, bodily injury, illness, or property damage to third parties arising from your business operations.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="public-liability-form-button-section">
            <a href={publicLiabilityForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default PublicLiability
