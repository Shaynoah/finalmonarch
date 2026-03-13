import React from 'react'

const EndowmentAssurance = () => {
  return (
    <div className="endowment-assurance-page">
      {/* Hero Section */}
      <section className="endowment-assurance-hero">
        <div className="endowment-assurance-hero-content">
          <div className="endowment-assurance-badge">
            <span>Endowment Assurance policy(with Profits)</span>
          </div>
          <h1 className="endowment-assurance-title">
            Savings and Protection Combined
          </h1>
          <p className="endowment-assurance-subtitle">
            A savings and protection plan that enables individuals to accumulate wealth in a structured and disciplined manner
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="endowment-assurance-content-section">
        <div className="container">
          <div className="endowment-assurance-info-card">
            <div className="endowment-assurance-info-content">
              <p className="endowment-assurance-info-description">
                The Endowment Assurance Policy (With Profits) is a savings and protection plan that enables individuals to accumulate wealth in a structured and disciplined manner, with guaranteed benefits payable either at the end of the policy term or upon the death of the life assured. It is particularly suitable for individuals not enrolled in registered retirement schemes or those on medium-term contractual employment seeking to secure their financial future.
              </p>
              <p className="endowment-assurance-info-description" style={{ marginTop: '1.5rem' }}>
                Policyholders can select flexible terms of 5, 10, 15, or 20 years, with premiums payable throughout the selected term or until earlier death. Entry is open to individuals aged 18 to 65 years, with a maximum maturity age of 70 years.
              </p>
              <p className="endowment-assurance-info-description" style={{ marginTop: '1.5rem' }}>
                Upon maturity, the policy pays the sum assured along with accrued and terminal bonuses as a lump sum or annuity over 4, 6, or 8 years. In the event of death during the policy term, the full sum assured plus bonuses is paid to the beneficiary. The policy also offers waiver of premiums in case of the death of a parent policyholder, while still guaranteeing benefit payout at maturity.
              </p>
              <p className="endowment-assurance-info-description" style={{ marginTop: '1.5rem' }}>
                After three years of continuous premium payments, the policy acquires surrender and paid-up value. Loan facilities are also available within the policy's surrender value, making it a versatile and valuable long-term financial solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EndowmentAssurance
