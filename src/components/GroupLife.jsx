import React from 'react'
import lifeImage from '../assets/life.png'

const GroupLife = () => {
  return (
    <div className="group-life-page">
      {/* Hero Section */}
      <section className="group-life-hero">
        <div className="group-life-hero-content">
          <div className="group-life-badge">
            <span>Group Life</span>
          </div>
          <h1 className="group-life-title">
            Comprehensive Employee Protection
          </h1>
          <p className="group-life-subtitle">
            Group Life Assurance providing financial security for your workforce and their families
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="group-life-content-section">
        <div className="container">
          <div className="group-life-info-card">
            <div className="group-life-info-content">
              <p className="group-life-info-description">
                We provides Group Life Assurance as a core employee benefit solution for institutions and organizations seeking to offer meaningful financial protection to their workforce. This policy ensures that in the unfortunate event of an employee's death, permanent disability, or diagnosis of a critical illness, the employee's nominated dependents receive financial support in the form of a lump sum or structured income.
              </p>
              <p className="group-life-info-description" style={{ marginTop: '1.5rem' }}>
                The cover operates on a 24-hour basis and is valid worldwide, offering continuous protection both within and outside the workplace. Benefit structures are flexible and can be aligned to organizational policies, either as a flat benefit amount or as a multiple of the employee's annual salary—commonly up to five times the gross salary.
              </p>
              <p className="group-life-info-description" style={{ marginTop: '1.5rem' }}>
                To further enhance employee protection, the policy can be extended to include additional benefits such as accidental death, critical illness, permanent disability, funeral cash benefit, and cover for spouses. Eligibility for this cover extends to employees up to 65 years of age, making it a valuable component of any organization's staff welfare and retention strategy.
              </p>
            </div>
          </div>

          {/* Life Insurance Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={lifeImage} alt="Group Life Assurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Protect Your Most Valuable Asset: Your People
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Our Group Life Assurance provides comprehensive financial protection for your employees and their families. With 24-hour worldwide coverage, flexible benefit structures, and optional extensions, it's an essential component of any organization's employee benefits package, ensuring peace of mind and demonstrating your commitment to your workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GroupLife
