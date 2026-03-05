import React, { useState } from 'react'

const GetAQuote = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    typeOfCover: '',
    description: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.typeOfCover) {
      newErrors.typeOfCover = 'Type of cover is required'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        alert('Thank you! Your quote request has been submitted successfully.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          typeOfCover: '',
          description: ''
        })
      }, 1000)
    }
  }

  return (
    <div className="get-a-quote-page">
      {/* Hero Section */}
      <section className="get-a-quote-hero">
        <div className="get-a-quote-hero-content">
          <h1 className="get-a-quote-title">Get a Quote</h1>
          <p className="get-a-quote-subtitle">
            Fill out the form below and we'll get back to you with a personalized quote
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="get-a-quote-form-section">
        <div className="container">
          <div className="quote-form-wrapper">
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name here"
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && (
                    <span className="error-message">{errors.firstName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name here"
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && (
                    <span className="error-message">{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Add email"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="typeOfCover">
                  Type Of Cover <span className="required">*</span>
                </label>
                <select
                  id="typeOfCover"
                  name="typeOfCover"
                  value={formData.typeOfCover}
                  onChange={handleChange}
                  className={errors.typeOfCover ? 'error' : ''}
                >
                  <option value="">Select</option>
                  <option value="fire-and-perils">Fire and Perils</option>
                  <option value="consequential-loss">Consequential Loss</option>
                  <option value="domestic-package-insurance">Domestic Package Insurance</option>
                  <option value="all-risks-insurance">All Risks Insurance</option>
                  <option value="theft-insurance">Theft Insurance</option>
                  <option value="money-insurance">Money Insurance</option>
                  <option value="goods-in-transit-insurance">Goods In Transit Insurance</option>
                  <option value="fidelity-guarantee-insurance">Fidelity Guarantee Insurance</option>
                  <option value="public-liability-insurance">Public Liability Insurance</option>
                  <option value="contractors-all-risks-insurance">Contractors All Risks Insurance</option>
                  <option value="machinery-breakdown-insurance">Machinery Breakdown Insurance</option>
                  <option value="work-injury-breakdown-insurance">Work Injury Breakdown Insurance</option>
                  <option value="personal-and-group-personal-accident-insurance">Personal and Group Personal Accident Insurance</option>
                  <option value="motor-insurance">Motor Insurance</option>
                  <option value="employers-liability">Employers Liability</option>
                  <option value="group-life-insurance">Group Life Insurance</option>
                  <option value="other">Other</option>
                </select>
                {errors.typeOfCover && (
                  <span className="error-message">{errors.typeOfCover}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="description">
                  Description <span className="required">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  rows="5"
                  className={errors.description ? 'error' : ''}
                ></textarea>
                {errors.description && (
                  <span className="error-message">{errors.description}</span>
                )}
              </div>

              <div className="form-submit">
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetAQuote
