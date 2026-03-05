import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import personalAccidentForm from '../forms/Personal-Accident-Proposal-Form.pdf'

const GroupPersonalAccident = () => {
  const location = useLocation()
  const isPersonalAccident = location.pathname === '/personal-accident'
  const [activeTab, setActiveTab] = useState(isPersonalAccident ? 'personal-accident' : 'group-personal-accident')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    insuranceType: ''
  })

  useEffect(() => {
    setActiveTab(isPersonalAccident ? 'personal-accident' : 'group-personal-accident')
  }, [isPersonalAccident])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, tab: activeTab })
    alert('Thank you for your inquiry! We will send you a quote soon.')
    setFormData({ name: '', email: '', insuranceType: '' })
  }

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
              <a href="#" className="form-button claim-form-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>CLAIM FORM</span>
              </a>
            </div>
          </div>

          {/* Insurance Quote Form */}
          <div className="group-personal-accident-form-wrapper">
            <div className="group-personal-accident-quote-form-card">
              <div className="group-personal-accident-tabs">
                <button
                  className={`group-personal-accident-tab ${activeTab === 'group-personal-accident' ? 'active' : ''}`}
                  onClick={() => setActiveTab('group-personal-accident')}
                >
                  GROUP PERSONAL ACCIDENT
                </button>
                <button
                  className={`group-personal-accident-tab ${activeTab === 'personal-accident' ? 'active' : ''}`}
                  onClick={() => setActiveTab('personal-accident')}
                >
                  PERSONAL ACCIDENT
                </button>
              </div>

              <div className="group-personal-accident-form-content">
                <p className="group-personal-accident-form-intro">
                  Complete the form below, and we'll send you a quote on the insurance you're interested in. It's that simple.
                </p>

                <form className="group-personal-accident-quote-form" onSubmit={handleSubmit}>
                  <div className="form-field">
                    <input
                      type="text"
                      placeholder="YOUR NAME"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <input
                      type="email"
                      placeholder="MAIL"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <select
                      value={formData.insuranceType}
                      onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                      required
                      className="insurance-type-select"
                    >
                      <option value="">INSURANCE TYPE</option>
                      <option value="group-personal-accident">GROUP PERSONAL ACCIDENT</option>
                      <option value="personal-accident">PERSONAL ACCIDENT</option>
                    </select>
                  </div>

                  <button type="submit" className="get-cover-btn">
                    GET COVER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GroupPersonalAccident
