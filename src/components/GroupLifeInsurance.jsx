import React from 'react'

const GroupLifeInsurance = () => {

  const plans = [
    {
      id: 'last-expense-plan',
      name: 'Family Last Expense Plan',
      description: 'Updated premium rate plan',
      options: [
        {
          member: 'PRINCIPAL',
          values: ['KES 50,000', 'KES 100,000', 'KES 200,000', 'KES 300,000', 'KES 400,000', 'KES 500,000'],
        },
        {
          member: 'SPOUSE',
          values: ['KES 50,000', 'KES 100,000', 'KES 200,000', 'KES 300,000', 'KES 400,000', 'KES 500,000'],
        },
        {
          member: 'PARENT & PARENT (MAX 4 PER MEMBER)',
          values: ['KES 25,000', 'KES 50,000', 'KES 100,000', 'KES 150,000', 'KES 200,000', 'KES 200,000'],
        },
        {
          member: 'CHILDREN (MAX 4 PER MEMBER)',
          values: ['KES 25,000', 'KES 50,000', 'KES 100,000', 'KES 100,000', 'KES 100,000', 'KES 100,000'],
        },
      ],
      premiums: ['KES 2,250.00', 'KES 4,500.00', 'KES 9,000.00', 'KES 12,750.00', 'KES 16,500.00', 'KES 19,500.00'],
    },
  ]

  const scopeOfCover = [
    '100% accidental death cover available immediately',
    'No medical tests required',
    'Eligibility: Any persons aged 18 to 75 yrs. Children aged 3 months to 23 years',
    'Extended Family/Siblings below age 50yrs',
    'Parents covered up to age 85yrs with cover expiring at age 85',
    'Children are covered from 3 months to age 18',
    'Those between ages 18 to 23 years are covered subject to confirmation of being in fulltime education',
    'The maximum payout for children who are below age of 10 years is KES 100,000.00',
    'Maximum of Two (2) deaths covered per family',
    'Maximum benefit for parents (and parents-in-law) to KES 100,000',
    'COVID-19 death covered @ 50% of Sum Assured'
  ]

  const requirements = [
    'Duly filled Proposal Form',
    'Full names of the members indicating the dates of birth',
    'ID No.',
    'KRA PIN',
    'KRA PIN No.\'s for the organization/principal',
    'Principal Number Assured',
    'No. of Dependants and relationship'
  ]

  const claimDocuments = [
    'Duly filled claim form',
    'Burial permit and Police abstract in case of accidental death',
    'Copy of ID/Birth Certificate of the deceased',
    'Copy of ID of registered beneficiary',
    'Completed claim form'
  ]

  return (
    <div className="group-life-insurance-page">
      {/* Hero Section */}
      <section className="group-life-hero">
        <div className="group-life-hero-overlay"></div>
        <div className="group-life-hero-content">
          <h1 className="group-life-title">
            Family Last Expense Rates
          </h1>
          <p className="group-life-subtitle">
            Affordable and simple cover for your company's employees, providing peace of mind that in the event of death, members' families or loved ones are protected against unexpected funeral costs.
          </p>
        </div>
      </section>

      {/* Premium Plans Section */}
      <section className="premium-plans-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Premium Rate Plans</h2>
            <p className="section-description">Choose the plan that best fits your needs</p>
          </div>

          <div className="plans-grid">
            {plans.map((plan, planIndex) => (
              <div key={plan.id} className="plan-card">
                <div className="plan-card-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                </div>
                
                <div className="plan-table-wrapper">
                  <table className="premium-table">
                    <thead>
                      <tr>
                        <th>MEMBER</th>
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <th key={num}>Opt {num}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {plan.options.map((option, idx) => (
                        <tr key={idx}>
                          <td className="member-cell">{option.member}</td>
                          {option.values.map((value, valIdx) => (
                            <td key={valIdx}>{value}</td>
                          ))}
                        </tr>
                      ))}
                      <tr className="premium-row">
                        <td className="premium-label">PREMIUM (Kshs)</td>
                        {plan.premiums.map((premium, idx) => (
                          <td key={idx} className="premium-value">{premium}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Cover Section */}
      <section className="scope-section">
        <div className="container">
          <div className="info-card scope-info-card">
            <h2 className="info-card-title">Scope of Cover</h2>
            <ul className="info-list">
              {scopeOfCover.map((item, index) => (
                <li key={index} className="info-item">
                  <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section">
        <div className="container">
          <div className="requirements-grid">
            <div className="info-card requirements-info-card">
              <h2 className="info-card-title">Requirements</h2>
              <p className="info-card-subtitle">We will require the following information to enable implementation of the scheme:</p>
              <ul className="info-list">
                {requirements.map((item, index) => (
                  <li key={index} className="info-item">
                    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-card requirements-info-card">
              <h2 className="info-card-title">Claim Documents Required</h2>
              <p className="info-card-subtitle">For benefit payment, please provide:</p>
              <ul className="info-list">
                {claimDocuments.map((item, index) => (
                  <li key={index} className="info-item">
                    <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default GroupLifeInsurance
