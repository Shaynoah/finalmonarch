import React, { useState } from 'react'
import Footer from '../components/Footer'

const QuotePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    typeOfCover: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setFormStatus({
        type: 'success',
        message: 'Thank you for your quote request! We will get back to you within 24 hours.'
      })
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        typeOfCover: '',
        description: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' })
      }, 5000)
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="quote-page-section">
        <div className="container">
          <div className="quote-page-header">
            <h1>Request a quote</h1>
            <p>Get an insurance quote today for car, home, health, business and many more.</p>
          </div>

          <div className="quote-page-form-wrapper">
            <form className="quote-page-form" onSubmit={handleSubmit}>
              <div className="quote-form-row">
                <div className="quote-form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name here"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="quote-form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name here"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="quote-form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Add email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="quote-form-group">
                <label htmlFor="typeOfCover">Type Of Cover *</label>
                <select
                  id="typeOfCover"
                  name="typeOfCover"
                  value={formData.typeOfCover}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="fire-and-perils">Fire and Perils</option>
                  <option value="consequential-loss">Consequential Loss</option>
                  <option value="domestic-package">Domestic Package Insurance</option>
                  <option value="all-risks">All Risks Insurance</option>
                  <option value="theft">Theft Insurance</option>
                  <option value="money">Money Insurance</option>
                  <option value="goods-in-transit">Goods In Transit Insurance</option>
                  <option value="fidelity-guarantee">Fidelity Guarantee Insurance</option>
                  <option value="public-liability">Public Liability Insurance</option>
                  <option value="contractors-all-risks">Contractors All Risks Insurance</option>
                  <option value="machinery-breakdown">Machinery Breakdown Insurance</option>
                  <option value="work-injury-breakdown">Work Injury Breakdown Insurance</option>
                  <option value="personal-group-accident">Personal and Group Personal Accident Insurance</option>
                  <option value="motor">Motor Insurance</option>
                  <option value="professional-indemnity">Professional Indemnity</option>
                  <option value="marine">Marine Insurance</option>
                  <option value="employers-liability">Employers Liability</option>
                </select>
              </div>

              <div className="quote-form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Description"
                  rows="6"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {formStatus.message && (
                <div className={`quote-form-status ${formStatus.type}`}>
                  {formStatus.type === 'success' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  )}
                  {formStatus.type === 'error' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <button type="submit" className="quote-form-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default QuotePage
