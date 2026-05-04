import React, { useState } from 'react'
import { useToast } from '../context/ToastContext'
import OptionalTurnstile from './OptionalTurnstile'

const captchaRequired = Boolean(import.meta.env.VITE_TURNSTILE_SITE_KEY)

const ReportClaim = () => {
  const { showToast } = useToast()
  const [captchaToken, setCaptchaToken] = useState(null)
  const [turnstileKey, setTurnstileKey] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    typeOfCover: '',
    policyNumber: '',
    claimDescription: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (captchaRequired && !captchaToken) {
      showToast({
        type: 'error',
        message: 'Please complete the security verification below.',
      })
      return
    }

    setIsSubmitting(true)

    const claimUrl = import.meta.env.VITE_CLAIM_API_URL || '/api/claim'

    try {
      const res = await fetch(claimUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...(captchaToken ? { captchaToken } : {}),
        }),
      })
      const payload = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(payload.error || `Request failed (${res.status})`)
      }

      showToast({
        type: 'success',
        message: 'Your claim has been submitted. We will process your report and get back to you soon.',
      })

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        typeOfCover: '',
        policyNumber: '',
        claimDescription: '',
      })
      setCaptchaToken(null)
      setTurnstileKey((k) => k + 1)
    } catch (error) {
      showToast({
        type: 'error',
        message:
          error?.message ||
          'Something went wrong. If you are running locally, start the claim email server (see README).',
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
                rows="8"
                required
              ></textarea>
            </div>

            <OptionalTurnstile key={turnstileKey} onTokenChange={setCaptchaToken} />

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
