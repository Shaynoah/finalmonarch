import React from 'react'
import { useLocation } from 'react-router-dom'
import publicLiabilityForm from '../forms/Public-Liability-Proposal-Form-1.pdf'

const publicLiabilityImage = 'https://res.cloudinary.com/diozv0xm2/image/upload/q_auto/f_auto/v1776416284/public_liability-DA2fR3Q9_nqizyp.png'

const PublicLiability = () => {
  const location = useLocation()
  const isProductsLiabilityVariant =
    new URLSearchParams(location.search).get('variant') === 'products-liability'

  const content = isProductsLiabilityVariant
    ? {
        badge: 'Products Liability',
        title: 'Products Liability Insurance',
        subtitle: 'Protection against third-party claims from defective products.',
        descriptionOne:
          'Covers claims by third parties alleging that a product you made or sold is defective, and caused them to sustain bodily injury or property damage or death.',
        descriptionTwo:
          'Protects against claims of personal injury or property damage caused by products sold or supplied through your business.',
        benefitsIntro:
          'Provides indemnity to the insured against all sums that they shall be legally liable to pay for compensation in respect of: (subject to the limits of liability).',
        benefits: [
          'Death or bodily injury to any person other than a person in the service of or acting in any capacity either for the insured or for any sub-contractor to the insured.',
          'Damage to property other than property belonging to or held in trust by or in the control of the insured, his employees or sub-contractors where such damage is not recoverable under any other insurance policy.',
          'Damage due or alleged to be due to the defective nature of the product or harmful nature of any product or par thereof or which fails to perform the function for which it was manufactured, designed, sold, supplied, installed, repaired, altered, treated or recommended by the insured.',
        ],
      }
    : {
        badge: 'Public Liability',
        title: 'Legal Protection Meets Business Integrity',
        subtitle: 'The pinnacle of legal protection against liabilities arising from negligence',
        descriptionOne:
          "Legal liabilities arise when negligence is established against a business following actions of employees or activities of the business. These will occur when third parties have been bodily injured or a third party's property has been damaged. The aggrieved party proceeds and sues for compensation of the loss incurred.",
        descriptionTwo:
          'Public Liability protects a participant in respect of legal liability to third parties for accidental death, bodily injury and/or illness and/or loss of or damage to property which happens in connection with the business insured under the policy.',
        descriptionThree:
          'The public Liability Cover ensures rights and obligations to third parties is met in honest and transparent manner.',
      }

  return (
    <div className="public-liability-page">
      {/* Hero Section */}
      <section className="public-liability-hero">
        <div className="public-liability-hero-content">
          <div className="public-liability-badge">
            <span>{content.badge}</span>
          </div>
          <h1 className="public-liability-title">
            {content.title}
          </h1>
          <p className="public-liability-subtitle">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="public-liability-content-section">
        <div className="container">
          <div className="public-liability-info-card">
            <div className="public-liability-info-content">
              <p className="public-liability-info-description">
                {content.descriptionOne}
              </p>
              <p className="public-liability-info-description" style={{ marginTop: '1.5rem' }}>
                {content.descriptionTwo}
              </p>
              {isProductsLiabilityVariant ? (
                <>
                  <p className="public-liability-info-description" style={{ marginTop: '1.5rem', fontWeight: '600' }}>
                    Benefits
                  </p>
                  <p className="public-liability-info-description" style={{ marginTop: '1rem' }}>
                    {content.benefitsIntro}
                  </p>
                  <ul className="public-liability-benefits-list" style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
                    {content.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="public-liability-info-description" style={{ marginTop: '1.5rem' }}>
                  {content.descriptionThree}
                </p>
              )}
            </div>
          </div>

          {!isProductsLiabilityVariant && (
            <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
              <div className="insurance-form-image">
                <img loading="lazy" src={publicLiabilityImage} alt="Business premises protected with public liability insurance in Kenya" />
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
          )}

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
