import React, { useState, useEffect } from 'react'

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    typeOfCover: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

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

      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose()
        setFormStatus({ type: '', message: '' })
      }, 2000)
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="quote-modal-overlay" onClick={handleOverlayClick}>
      <div className="quote-modal">
        <button className="quote-modal-close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        
        <div className="quote-modal-header">
          <h2>Get an insurance quote today</h2>
          <p>Get an insurance quote today for car, home, health, business and many more.</p>
        </div>

        <form className="quote-modal-form" onSubmit={handleSubmit}>
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
              <option value="personal-accident">Personal and Group Personal Accident Insurance</option>
              <option value="motor">Motor Insurance</option>
              <option value="professional-indemnity">Professional Indemnity</option>
              <option value="marine">Marine Insurance</option>
              <option value="employers-liability">Employers Liability</option>
              <option value="car">Car Insurance</option>
              <option value="home">Home Insurance</option>
              <option value="health">Health Insurance</option>
              <option value="business">Business Insurance</option>
              <option value="life">Life Insurance</option>
              <option value="property">Property Insurance</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="quote-form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {formStatus.message && (
            <div className={`quote-form-status ${formStatus.type}`}>
              {formStatus.message}
            </div>
          )}

          <button type="submit" className="quote-form-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default QuoteModal
