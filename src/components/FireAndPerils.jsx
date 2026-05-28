import React from 'react'
import { useLocation } from 'react-router-dom'
import fireAndPerilsForm from '../forms/Fire-and-Perils-Proposal-form.pdf'

const perilsImage =
  'https://res.cloudinary.com/diozv0xm2/image/upload/q_auto/f_auto/v1776404782/ChatGPT_Image_Mar_9_2026_01_22_55_PM_vyeoyt.png'

const FireAndPerils = () => {
  const location = useLocation()
  const isPoliticalViolenceVariant =
    new URLSearchParams(location.search).get('variant') === 'political-violence-terrorism'

  const content = isPoliticalViolenceVariant
    ? {
        badge: 'Political Violence & Terrorism Insurance',
        title: 'Protect Your Property Against Political Violence Risks',
        subtitle:
          'Coverage for terrorism, sabotage, riots, strikes, civil commotion, and related events.',
        descriptionOne:
          'Covers physical loss or damage to building and contents which belong to the insured.',
        descriptionTwo:
          'Protects insured against act of terrorism, sabotage, riots, strikes, and/or civil commotion, looting, malicious damage, mutiny and/or coup deter and war and/or civil war.'
      }
    : {
        badge: 'Fire and Perils',
        title: 'Elevate your protection',
        subtitle:
          "From explosions to floods, we've got you covered against every element that threatens your property",
        descriptionOne:
          'This provides security for our clients against loss of profit which would otherwise have been earned had the fire damage not occurred.',
        descriptionTwo:
          'This cover provides peace mind to our participants against such effects of fire. The compensation is for the Gross profits lost and for wages paid out during the period when the business is interrupted.'
      }

  return (
    <div className="fire-and-perils-page">
      {/* Hero Section */}
      <section className="fire-and-perils-hero">
        <div className="fire-and-perils-hero-content">
          <div className="fire-and-perils-badge">
            <span>{content.badge}</span>
          </div>
          <h1 className="fire-and-perils-title">
            {content.title}
          </h1>
          <p className="fire-and-perils-subtitle">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="fire-and-perils-content-section">
        <div className="container">
          <div className="fire-and-perils-info-card">
            <div className="fire-and-perils-info-content">
              <p className="fire-and-perils-info-description">
                {content.descriptionOne}
              </p>
              <p className="fire-and-perils-info-description" style={{ marginTop: '1.5rem' }}>
                {content.descriptionTwo}
              </p>
            </div>
          </div>

          {!isPoliticalViolenceVariant && (
            <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
              <div className="insurance-form-image">
                <img loading="lazy" src={perilsImage} alt="Commercial building protected by fire and perils insurance in Kenya" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                    Comprehensive Property Protection
                  </h3>
                  <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                    Protect your property against fire, explosions, floods, and other perils with our comprehensive insurance coverage. We provide security against loss of profit and ensure your business remains protected from unexpected disasters.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Application Form Button */}
          <div className="fire-and-perils-form-button-section">
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

export default FireAndPerils
