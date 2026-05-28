import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import personalAccidentForm from '../forms/Personal-Accident-Proposal-Form.pdf'

const GroupPersonalAccident = () => {
  const location = useLocation()
  const isPersonalAccident = location.pathname === '/personal-accident'
  const isStudentPersonalAccident = new URLSearchParams(location.search).get('variant') === 'student'

  // Content based on type
  const content = isStudentPersonalAccident ? {
    badge: 'Student Personal Accident',
    title: 'Student Personal Accident Cover',
    subtitle: 'Special tailored accident protection for students.',
    description: 'This is a special tailor made Personal accident insurance scheme that covers students for medical expenses following an accident. In addition, it provides cover against death, loss of limbs, sight, and hearing and such other permanent total or permanent partial disablement arising out of any accident.',
    tagline: 'Special tailored accident protection for students.'
  } : isPersonalAccident ? {
    badge: 'Personal Accident',
    title: 'Keep doing the things you love',
    subtitle: 'Protect yourself and your loved ones with comprehensive Personal Accident coverage.',
    description: 'This policy provides cover for accidental death and or bodily injury. It also covers medical expenses arising from an accident as well as in the event that the insured is not able to go back to normal duties over a specified period of time. This cover eases financial burden on family members and dependents in case of accidental unforeseen circumstances. Cover can be arranged on an individual basis as above or as a group under Group Personal Accident.',
    tagline: 'Keep doing the things you love'
  } : {
    badge: 'Group Personal Accident',
    title: 'Group Personal Accident Cover',
    subtitle: 'Financial compensation for members or employees affected by accidental injury, disability, or death.',
    description: 'Is a commercial policy taken out by employers, associations, or groups to provide financial compensation to members or employees if they suffer bodily injury, disability, or death resulting solely from an accident. Provides cover to any life assured should he/she suffer bodily injury resulting solely and directly from an accident caused by violent external and visible means.',
    additionalDescription: 'The cover pays to the Insured or to his legal personal representative the sum or that part of the percentage thereof stated under the appropriate Item as being payable in respect of such bodily injury, occurring within twelve calendar months of the date on which bodily injury as described was sustained.',
    benefits: [
      {
        title: 'Death',
        detail: 'Bodily injury which within twelve calendar months from the occurrence thereof shall solely and directly cause or necessarily result in the death of the Insured.',
      },
      {
        title: 'Permanent Disablement',
        detail: 'Bodily injury which within twelve calendar months from the occurrence thereof shall solely and directly cause or necessarily result in the permanent disablement of the Insured, the appropriate percentage as specified in the Scale of permanent Disablement Benefits.',
      },
      {
        title: 'Temporary Total Disablement',
        detail: 'Bodily injury which shall solely and directly totally disable and prevent the Insured from attending to his business or occupation compensation during such total disablement at the rate per week specified in the schedule.',
      },
      {
        title: 'Medical Expenses',
        detail: 'Bodily injury which shall solely and directly be the cause of the Insured requiring medical treatment the refunding of expenses necessarily incurred and paid up to but not exceeding the sum specified in the schedule for any one accident.',
      },
    ],
    tagline: 'Comprehensive cover for accidental death, disablement, and medical expenses.'
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
              {content.additionalDescription && (
                <p className="group-personal-accident-info-description" style={{ marginTop: '1rem' }}>
                  {content.additionalDescription}
                </p>
              )}
              {content.benefits && (
                <div style={{ marginTop: '1.5rem' }}>
                  <h3 style={{ marginBottom: '0.75rem' }}>Benefits</h3>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.8 }}>
                    {content.benefits.map((benefit) => (
                      <li key={benefit.title} style={{ marginBottom: '0.5rem' }}>
                        <strong>{benefit.title}</strong>
                        <br />
                        {benefit.detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="group-personal-accident-form-wrapper">
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
