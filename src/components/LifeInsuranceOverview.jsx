import React from 'react'
import { Link } from 'react-router-dom'

const lifeInsuranceProducts = [
  {
    id: 'group-life-insurance',
    title: 'Group Last Expense',
    description:
      'Provides financial support to families for final expense needs and immediate obligations.',
    link: '/group-life-insurance',
  },
  {
    id: 'group-life',
    title: 'Group Life Assurance',
    description:
      'Covers employees and members with life protection designed for organizations and groups.',
    link: '/group-life',
  },
  {
    id: 'group-mortgage-protection',
    title: 'Group Mortgage Protection',
    description:
      'Protects outstanding mortgage balances in covered life events, helping families keep their homes secure.',
    link: '/group-mortgage-protection',
  },
  {
    id: 'group-credit-life',
    title: 'Group Credit Assurance',
    description:
      'Protects lenders and borrowers by settling outstanding balances in covered life events.',
    link: '/group-credit-life',
  },
]

const LifeInsuranceOverview = () => {
  return (
    <section className="life-insurance-overview-page">
      <div className="life-insurance-overview-container">
        <header className="life-insurance-overview-hero">
          <h1>Life Insurance Products</h1>
          <p>
            Monarch Insurance Company offers a comprehensive range of life
            assurance products designed to meet diverse customer needs. Our
            portfolio includes Group Life Products, Ordinary Life Products, and
            Deposit Administration Products, each tailored to specific market
            segments and financial objectives.
          </p>
        </header>

        <div className="life-insurance-products-grid">
          {lifeInsuranceProducts.map((product) => (
            <article key={product.id} className="life-insurance-product-card">
              <h2 className="life-insurance-product-title">
                <span className="life-insurance-product-pill">{product.title}</span>
              </h2>
              <p>{product.description}</p>
              <Link to={product.link} className="life-insurance-product-link">
                View Product
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LifeInsuranceOverview
