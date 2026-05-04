import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import personalAccidentForm from '../forms/Personal-Accident-Proposal-Form.pdf'

const GroupPersonalAccident = () => {
  const location = useLocation()
  const isPersonalAccident = location.pathname === '/personal-accident'

  // Content based on type
  const content = isPersonalAccident ? {
    badge: 'Personal Accident',
    title: 'Keep doing the things you love',
    subtitle: 'Protect yourself and your loved ones with comprehensive Personal Accident coverage.',
    description: 'This policy provides cover for accidental death and or bodily injury. It also covers medical expenses arising from an accident as well as in the event that the insured is not able to go back to normal duties over a specified period of time. This cover eases financial burden on family members and dependents in case of accidental unforeseen circumstances. Cover can be arranged on an individual basis as above or as a group under Group Personal Accident.',
    tagline: 'Keep doing the things you love'
  } : {
    badge: 'Group Personal Accident',
    title: 'Guardian at Work',
    subtitle: 'Secure Your Team\'s Tomorrow with Group Personal Accident: 24/7 Protection for Life\'s Unseen Challenges!',
    description: 'This insurance is normally taken by employers for own employees against death, permanent disability, temporary disability and medical expenses following an accident usually on 24 hour basis. The benefit is usually 36 months to 60 months/salary for death/ permanent disability.',
    tagline: 'Secure Your Team\'s Tomorrow with Group Personal Accident: 24/7 Protection for Life\'s Unseen Challenges!'
  }

  return (
    <div className="group-personal-accident-page">
      {/* Hero Section */}
      <section className="group-personal-accident-hero">
        <div className="group-personal-accident-hero-content">
          <div className="group-personal-accident-badge">
            <span>{content.badge}</span>
          </div>
          <h1 className="group-personal-accident-title">
            {content.title}
          </h1>
          <p className="group-personal-accident-subtitle">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="group-personal-accident-content-section">
        <div className="container">
          <div className="group-personal-accident-info-card">
            <div className="group-personal-accident-info-content">
              <p className="group-personal-accident-info-description">
                {content.description}
              </p>
            </div>
          </div>

          <div>
            {/* Form Buttons Section */}
            <div className="form-buttons-section">
              <a href={personalAccidentForm} target="_blank" rel="noopener noreferrer" className="form-button application-form-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>APPLICATION FORM</span>
              </a>
              <Link to="/report-claim" className="form-button claim-form-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>CLAIM FORM</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GroupPersonalAccident
