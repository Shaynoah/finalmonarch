import React from 'react'

const DrivingSchools = () => {
  return (
    <div className="driving-schools-page">
      {/* Hero Section */}
      <section className="driving-schools-hero">
        <div className="driving-schools-hero-content">
          <div className="driving-schools-badge">
            <span>Driving Schools</span>
          </div>
          <h1 className="driving-schools-title">
            Navigating Success, One Lesson at a Time
          </h1>
          <p className="driving-schools-subtitle">
            We've got your business in the driver's seat of protection
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="driving-schools-content-section">
        <div className="container">
          <div className="driving-schools-info-card">
            <div className="driving-schools-info-content">
              <p className="driving-schools-info-description">
                If you have a driving school, this insurance cover is designed especially to cover your fleet of vehicles from all the eventualities that can affect your business.
              </p>
            </div>
          </div>

          {/* Application Form Button */}
          <div className="driving-schools-form-button-section">
            <a href="#" className="form-button application-form-btn">
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

export default DrivingSchools
