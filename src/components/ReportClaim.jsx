import React, { useState } from 'react'

const ReportClaim = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    typeOfCover: '',
    policyNumber: '',
    claimDescription: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setFormStatus({
        type: 'success',
        message: 'Your claim has been submitted successfully! We will process your report and get back to you soon.'
      })
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        typeOfCover: '',
        policyNumber: '',
        claimDescription: ''
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="report-claim-section">
      <div className="container">
        {/* Hero Section */}
        <div className="report-claim-hero">
          <h1 className="report-claim-title">Streamline Your Claims</h1>
          <p className="report-claim-description">
            Do you need to use your insurance and want to apply for compensation? By registering your case directly on our website, you can get your report processed quickly.
          </p>
        </div>

        {/* Form Section */}
        <div className="report-claim-form-wrapper">
          <form className="report-claim-form" onSubmit={handleSubmit}>
            <div className="form-row-claim">
              <div className="form-group-claim">
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
                  required
                />
              </div>

              <div className="form-group-claim">
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
                  required
                />
              </div>
            </div>

            <div className="form-group-claim">
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
                required
              />
            </div>

            <div className="form-group-claim">
              <label htmlFor="typeOfCover">
                Type Of Cover <span className="required">*</span>
              </label>
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

            <div className="form-group-claim">
              <label htmlFor="policyNumber">
                Policy Number/Registration Number <span className="required">*</span>
              </label>
              <input
                type="text"
                id="policyNumber"
                name="policyNumber"
                value={formData.policyNumber}
                onChange={handleChange}
                placeholder="Policy Number/Registration Number"
                required
              />
            </div>

            <div className="form-group-claim">
              <label htmlFor="claimDescription">
                Claim Description <span className="required">*</span>
              </label>
              <textarea
                id="claimDescription"
                name="claimDescription"
                value={formData.claimDescription}
                onChange={handleChange}
                placeholder="Description"
                rows="6"
                required
              ></textarea>
            </div>

            {formStatus.message && (
              <div className={`report-claim-form-status ${formStatus.type}`}>
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

            <button type="submit" className="submit-claim-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ReportClaim
