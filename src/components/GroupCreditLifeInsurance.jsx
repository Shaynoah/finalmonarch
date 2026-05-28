import React from 'react'

const GroupCreditLifeInsurance = () => {
  return (
    <div className="group-credit-life-page">
      {/* Hero Section */}
      <section className="group-credit-life-hero">
        <div className="group-credit-life-hero-content">
          <h1 className="group-credit-life-title">
            Protecting Lenders and Borrowers
          </h1>
          <p className="group-credit-life-subtitle">
            Credit life cover for loan protection against death and permanent disability
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="group-credit-life-content-section">
        <div className="container">
          <div className="group-credit-life-info-card">
            <div className="group-credit-life-info-content">
              <p className="group-credit-life-info-description">
                Group Credit Assurance protects creditors from financial loss when a borrower
                dies or suffers total permanent disability (TPD). The policy clears the
                outstanding loan balance and helps shield families from debt pressure.
              </p>
              <p className="group-credit-life-info-description">
                Monarch Insurance structures these policies for lenders such as banks, SACCOs,
                and microfinance institutions. Loan arrears are not covered, and premiums are
                typically paid by the policyholder.
              </p>
            </div>
          </div>

          <div className="group-credit-life-info-card" style={{ marginTop: '1.25rem' }}>
            <div className="group-credit-life-info-content">
              <h2 style={{ marginBottom: '0.75rem' }}>Group Credit Riders</h2>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.8 }}>
                <li>Permanent Total Disability (PTD)</li>
                <li>Stand Alone Last Expense (LE)</li>
                <li>Permanent Total Disability Defined</li>
                <li>
                  Total and permanent disability is disability resulting from bodily injury
                  or disease which wholly prevents the insured from engaging in any and every
                  business or occupation and performing any work for compensation or profit,
                  and which disability has continued uninterruptedly for a period of at least
                  six months.
                </li>
              </ul>
            </div>
          </div>

          <div className="group-credit-life-info-card" style={{ marginTop: '1.25rem' }}>
            <div className="group-credit-life-info-content">
              <h2 style={{ marginBottom: '0.75rem' }}>Group Credit Schemes</h2>

              <h3 style={{ marginBottom: '0.5rem' }}>Guaranteed Premium Scheme</h3>
              <p className="group-credit-life-info-description">
                Designed for medium to large creditors who prefer a one-off premium paid at
                the start of cover, regardless of loan portfolio changes during the period.
              </p>
              <ul style={{ marginTop: 0, paddingLeft: '1.1rem', lineHeight: 1.8 }}>
                <li>Reducing balance cover for loans</li>
                <li>Loan terms from 1 to 72 months</li>
                <li>Entry age: 18 to 75 years</li>
                <li>Optional Stand Alone Funeral Expenses rider</li>
              </ul>

              <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Open Scheme</h3>
              <p className="group-credit-life-info-description">
                Ideal for lenders who want premium pricing per individual loan amount and
                repayment term under one master policy start date.
              </p>
              <ul style={{ marginTop: 0, paddingLeft: '1.1rem', lineHeight: 1.8 }}>
                <li>Premium calculated per loan amount and repayment period</li>
                <li>Loan terms from 1 to 72 months</li>
                <li>One-time premium payment per loan</li>
                <li>Entry age: 18 to 75 years</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GroupCreditLifeInsurance
