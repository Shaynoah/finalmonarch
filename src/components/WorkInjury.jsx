import React from 'react'
import workInjuryForm from '../forms/WIBA-PROPOSAL-FORM.pdf'
import workInjuryImage from '../assets/workinjury.png'

const WorkInjury = () => {
  return (
    <div className="work-injury-page">
      {/* Hero Section */}
      <section className="work-injury-hero">
        <div className="work-injury-hero-content">
          <div className="work-injury-badge">
            <span>Work Injury</span>
          </div>
          <h1 className="work-injury-title">
            Protecting Your Workforce, Powering Productivity
          </h1>
          <p className="work-injury-subtitle">
            Ensuring the well-being of your team in every step of the journey
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="work-injury-content-section">
        <div className="container">
          <div className="work-injury-info-card">
            <div className="work-injury-info-content">
              <p className="work-injury-info-description">
                This policy provides compensation for death, injury or sickness sustained directly to an employee arising out of and in the course of employment. This policy falls under the Workmen's Compensation Legislation. It provides death benefits, lost wages to injured employees, as well as cost of medical care.
              </p>
            </div>
          </div>

          {/* Work Injury Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={workInjuryImage} alt="Work Injury Insurance" />
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
