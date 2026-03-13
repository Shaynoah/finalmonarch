import React from 'react'

const GroupRetirementBenefitSchemes = () => {
  return (
    <div className="group-retirement-benefit-schemes-page">
      {/* Hero Section */}
      <section className="group-retirement-benefit-schemes-hero">
        <div className="group-retirement-benefit-schemes-hero-content">
          <div className="group-retirement-benefit-schemes-badge">
            <span>Group Retirement Benefit Schemes</span>
          </div>
          <h1 className="group-retirement-benefit-schemes-title">
            Building Financial Security for Retirement
          </h1>
          <p className="group-retirement-benefit-schemes-subtitle">
            Structured savings solutions designed to help employees build financial security for retirement
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="group-retirement-benefit-schemes-content-section">
        <div className="container">
          <div className="group-retirement-benefit-schemes-info-card">
            <div className="group-retirement-benefit-schemes-info-content">
              <p className="group-retirement-benefit-schemes-info-description">
                Monarch Insurance offers Group Retirement Benefit Schemes as a structured savings solution designed to help employees build financial security for retirement. Under this arrangement, members contribute regularly to a pooled fund, which is prudently invested to generate sustainable returns over time.
              </p>
              <p className="group-retirement-benefit-schemes-info-description" style={{ marginTop: '1.5rem' }}>
                Benefits are payable upon retirement or withdrawal from the scheme, with two flexible options available: the Provident Fund, which provides a lump sum payout, and the Pension Scheme, which offers a combination of a lump sum and periodic pension payments upon retirement.
              </p>
              <p className="group-retirement-benefit-schemes-info-description" style={{ marginTop: '1.5rem' }}>
                These schemes are suitable for both corporate institutions and organized groups seeking to support the long-term welfare of their members. The funds are professionally managed to ensure capital growth, delivering competitive returns and long-term value to members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GroupRetirementBenefitSchemes
