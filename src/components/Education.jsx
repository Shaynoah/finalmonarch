import React, { useState } from 'react'
import education1Image from '../assets/image 11.jpg'
import education2Image from '../assets/education2.png'

const Education = () => {
  const [activeTab, setActiveTab] = useState('burglary')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    insuranceType: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, tab: activeTab })
    alert('Thank you for your inquiry! We will send you a quote soon.')
    setFormData({ name: '', email: '', insuranceType: '' })
  }

  return (
    <div className="education-page">
      {/* Hero Section */}
      <section className="education-hero" style={{ backgroundImage: `url(${education2Image})` }}>
        <div className="education-hero-overlay"></div>
        <div className="education-hero-content">
          <div className="education-badge">
            <span>Education Insurance</span>
          </div>
          <h1 className="education-title">
            Nurturing Dreams, Ensuring Education
          </h1>
          <p className="education-subtitle">
            It is every parent's desire to have their child access quality education. However, rising costs of education makes it increasingly challenging for parents to fund their children's education. This is the reason why The Monarch has designed this special education policy to enable parents' plan well for their children's future education.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="education-content-section">
        <div className="container">
          <div className="education-info-card">
            <div className="education-info-content">
              <p className="education-info-description">
                This policy is taken out on the life of the parent as the life assured for the benefit of the named child. Premiums for the policy are paid for terms 5, 6, 7, 13, 14, 15 years as selected by the policy holder.
              </p>
              <p className="education-info-description" style={{ marginTop: '1.5rem' }}>
                For answers to your questions and information on solutions our network of offices aim to be convenient and local. Visit us in person at one of our offices.
              </p>
            </div>
          </div>

          {/* Insurance Quote Form with Image */}
          <div className="insurance-form-wrapper">
            <div className="insurance-form-image">
              <img src={education1Image} alt="Education Insurance" />
            </div>
            
            <div className="insurance-quote-form-card">
              <div className="insurance-tabs">
                <button
                  className={`insurance-tab ${activeTab === 'burglary' ? 'active' : ''}`}
                  onClick={() => setActiveTab('burglary')}
                >
                  BURGLARY
                </button>
                <button
                  className={`insurance-tab ${activeTab === 'all-risk' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all-risk')}
                >
                  ALL RISK
                </button>
                <button
                  className={`insurance-tab ${activeTab === 'money' ? 'active' : ''}`}
                  onClick={() => setActiveTab('money')}
                >
                  MONEY
                </button>
              </div>

              <div className="insurance-form-content">
                <p className="insurance-form-intro">
                  Complete the form below, and we'll send you a quote on the insurance you're interested in. It's that simple.
                </p>

                <form className="insurance-quote-form" onSubmit={handleSubmit}>
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
                      <option value="burglary">BURGLARY</option>
                      <option value="commercial-all-risks">COMMERCIAL ALL RISKS</option>
                      <option value="fidelity-guarantee">FIDELITY GUARANTEE</option>
                      <option value="industrial-all-risks">INDUSTRIAL ALL RISKS</option>
                      <option value="money">MONEY</option>
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

export default Education
