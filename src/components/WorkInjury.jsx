import React from 'react'
import { useLocation } from 'react-router-dom'
import workInjuryForm from '../forms/WIBA-PROPOSAL-FORM.pdf'

const workInjuryImage = 'https://res.cloudinary.com/diozv0xm2/image/upload/q_auto/f_auto/v1776416259/workinjury-DcNIHYcW_ahaouh.png'

const WorkInjury = () => {
  const location = useLocation()
  const isWibaVariant = new URLSearchParams(location.search).get('variant') === 'wiba'
  const isWibaPlusVariant = new URLSearchParams(location.search).get('variant') === 'wiba-plus'

  const content = isWibaVariant
    ? {
        badge: 'WIBA',
        title: 'WIBA',
        subtitle:
          'Work Injury Benefits Act cover for employees on duty.',
        paragraphs: [
          "Cover the employees of the Insured whilst on duty and engaged in the execution of the Insured's business &/or any project undertaken by the Insured, against accidental bodily injury, disablement or death.",
        ],
        benefits: [
          'Medical expenses up to limits shown on policy schedule',
          'Funeral expenses up to limits shown on policy schedule',
          'Receive earnings up to 96 months in case of death or permanent total disablement',
          'Receive earnings up to 52 weeks in case of temporary total disablement',
          'Occupational Disease up to the limit indicated in the schedule',
        ],
      }
    : isWibaPlusVariant
    ? {
        badge: 'WIBA PLUS',
        title: 'WIBA PLUS',
        subtitle:
          'Combination of WIBA and Group Personal Accident for complete employee protection.',
        paragraphs: [
          'Combination of the Workmen Injury Benefit Act (WIBA) and Group Personal Accident (GPA) to give an employer a one stop solution for employee insurance.',
          'Covers workplace and off-duty risks by ensuring 24 hours coverage.',
          'The accidental injuries, disease, death which arise during working hours are covered under the WIBA while accidental injuries and death which arise outside working hours are covered under GPA.',
          'The medical expenses limit under GPA is restricted to bodily injuries only and the cover is 24 hours & worldwide.',
        ],
        benefits: [],
      }
    : {
        badge: 'Work Injury',
        title: 'Protecting Your Workforce, Powering Productivity',
        subtitle:
          'Ensuring the well-being of your team in every step of the journey',
        paragraphs: [
          "This policy provides compensation for death, injury or sickness sustained directly to an employee arising out of and in the course of employment. This policy falls under the Workmen's Compensation Legislation. It provides death benefits, lost wages to injured employees, as well as cost of medical care.",
        ],
        benefits: [],
      }

  return (
    <div className="work-injury-page">
      {/* Hero Section */}
      <section className="work-injury-hero">
        <div className="work-injury-hero-content">
          <div className="work-injury-badge">
            <span>{content.badge}</span>
          </div>
          <h1 className="work-injury-title">
            {content.title}
          </h1>
          <p className="work-injury-subtitle">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="work-injury-content-section">
        <div className="container">
          <div className="work-injury-info-card">
            <div className="work-injury-info-content">
              {content.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className="work-injury-info-description"
                  style={index > 0 ? { marginTop: '1.5rem' } : undefined}
                >
                  {paragraph}
                </p>
              ))}
              {isWibaVariant && (
                <>
                  <p className="work-injury-info-description" style={{ marginTop: '1.5rem', fontWeight: '600' }}>
                    Benefits
                  </p>
                  <ul className="work-injury-benefits-list" style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
                    {content.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {!isWibaVariant && !isWibaPlusVariant && (
            <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
              <div className="insurance-form-image">
                <img loading="lazy" src={workInjuryImage} alt="Employees protected by work injury benefits insurance in Kenya" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                    Protect Your Employees and Your Business
                  </h3>
                  <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                    Ensure your workforce is protected with comprehensive work injury insurance. Our coverage provides compensation for death, injury, or sickness sustained by employees in the course of employment, including death benefits, lost wages, and medical care costs.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Application Form Button */}
          <div className="work-injury-form-button-section">
            <a href={workInjuryForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
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

export default WorkInjury
