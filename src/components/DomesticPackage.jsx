import React from 'react'
import { useLocation } from 'react-router-dom'
import domesticPackageForm from '../forms/Domestic-Package-Proposal-Form.pdf'

const domeImage = 'https://res.cloudinary.com/diozv0xm2/image/upload/q_auto/f_auto/v1776343492/dome_iovjhn.png'

const DomesticPackage = () => {
  const location = useLocation()
  const isPlateGlassVariant = new URLSearchParams(location.search).get('variant') === 'plate-glass'

  const content = isPlateGlassVariant
    ? {
        badge: 'Plate Glass',
        title: 'Plate Glass Insurance Cover',
        description:
          'Covers accidental breakage of and damage to fixed plate glass on business premises which arise out of fire, malicious damage, riots and strikes, breakage from vehicles, animals and nature related events.'
      }
    : {
        badge: 'Domestic Package',
        title: 'Your Comprehensive Haven of Protection',
        description:
          'Our domestic policy is a package cover aimed at meeting insurance requirements of home owners and occupiers. It provides cover for the dwelling house, household contents and other personal belongings against fire, natural catastrophes and theft. It also covers personal liabilities of the insured to third parties and provides compensation to domestic servants for death or injury in the course of duty.'
      }

  return (
    <div className="domestic-package-page">
      {/* Hero Section */}
      <section className="domestic-package-hero">
        <div className="domestic-package-hero-content">
          <div className="domestic-package-badge">
            <span>{content.badge}</span>
          </div>
          <h1 className="domestic-package-title">
            {content.title}
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="domestic-package-content-section">
        <div className="container">
          <div className="domestic-package-info-card">
            <div className="domestic-package-info-content">
              <p className="domestic-package-info-description">
                {content.description}
              </p>
            </div>
          </div>

          {!isPlateGlassVariant && (
            <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
              <div className="insurance-form-image">
                <img loading="lazy" src={domeImage} alt="Residential home protected by domestic package insurance in Kenya" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                    Comprehensive Home Protection
                  </h3>
                  <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                    Our domestic package provides comprehensive coverage for your home, household contents, and personal belongings. Protect your haven against fire, natural catastrophes, theft, and personal liabilities with our tailored insurance solutions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Application Form Button */}
          <div className="domestic-package-form-button-section">
            <a href={domesticPackageForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default DomesticPackage
