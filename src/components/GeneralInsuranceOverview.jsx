import React from 'react'
import { Link } from 'react-router-dom'

const CategoryIcon = ({ type }) => {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }

  switch (type) {
    case 'engineering':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M14 7l3-3 3 3-3 3-3-3z" />
          <path {...common} d="M3 21l8-8" />
          <path {...common} d="M9 19l2 2" />
        </svg>
      )
    case 'all-risks':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 3l7 3v5c0 5-3.4 8.8-7 10-3.6-1.2-7-5-7-10V6l7-3z" />
        </svg>
      )
    case 'accident-insurance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 5v14" />
          <path {...common} d="M5 12h14" />
        </svg>
      )
    case 'fire-insurance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 3c2 3 5 4.5 5 8a5 5 0 1 1-10 0c0-2.8 1.6-4.6 5-8z" />
        </svg>
      )
    case 'political-violence-terrorism':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 9v4" />
          <path {...common} d="M12 17h.01" />
          <path {...common} d="M10.3 3.5L2.9 16.2A2 2 0 0 0 4.6 19h14.8a2 2 0 0 0 1.7-2.8L13.7 3.5a2 2 0 0 0-3.4 0z" />
        </svg>
      )
    case 'misc-insurance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="4" y="4" width="16" height="16" rx="2" />
          <path {...common} d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      )
    case 'theft-insurance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect {...common} x="5" y="11" width="14" height="9" rx="2" />
          <path {...common} d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      )
    case 'motor-insurance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M4 15l2-5h12l2 5" />
          <path {...common} d="M3 15h18v4H3z" />
          <circle {...common} cx="7" cy="17" r="1.5" />
          <circle {...common} cx="17" cy="17" r="1.5" />
        </svg>
      )
    case 'workmen-compensation-insurance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M4 11l8-6 8 6" />
          <path {...common} d="M6 10v8h12v-8" />
        </svg>
      )
    case 'marine-insurance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 3v12" />
          <path {...common} d="M7 8h10" />
          <path {...common} d="M5 17c1.5 1.5 3 2 7 2s5.5-.5 7-2" />
        </svg>
      )
    case 'liability-insurance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M12 4v16" />
          <path {...common} d="M7 7h10" />
          <path {...common} d="M6 7l-2 4h4l-2-4zM18 7l-2 4h4l-2-4z" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path {...common} d="M6 4h12v16H6z" />
          <path {...common} d="M9 8h6M9 12h6M9 16h4" />
        </svg>
      )
  }
}

const generalInsuranceCategories = [
  {
    id: 'engineering',
    title: 'Engineering',
    link: '/contractors-plant-machinery',
    submenus: [
      { label: 'Contractors Plant & Machinery', link: '/contractors-plant-machinery' },
      { label: 'Machinery Breakdown', link: '/machinery-breakdown' },
      { label: 'Electronic Equipment', link: '/electronic-equipment' },
      { label: "Contractor's All Risks", link: '/contractors-all-risks' },
      { label: 'Erection All Risk', link: '/contractors-all-risks' },
      { label: 'Machinery Breakdown (Loss of Profit)', link: '/consequential-loss?variant=machinery-breakdown-loss-of-profit' },
    ],
  },
  {
    id: 'all-risks',
    title: 'All Risks',
    link: '/industrial',
    submenus: [{ label: 'All Risk', link: '/industrial' }],
  },
  {
    id: 'accident-insurance',
    title: 'Accident Insurance',
    link: '/group-personal-accident',
    submenus: [
      { label: 'Individual Personal Accident', link: '/personal-accident' },
      { label: 'Group Personal Accident', link: '/group-personal-accident' },
      { label: 'Student Personal Accident', link: '/group-personal-accident?variant=student' },
    ],
  },
  {
    id: 'fire-insurance',
    title: 'Fire Insurance',
    link: '/fire-and-perils',
    submenus: [
      { label: 'Domestic Package', link: '/domestic-package' },
      { label: 'Fire Loss of Profit', link: '/consequential-loss' },
      { label: 'Industrial All Risk (Fire)', link: '/industrial' },
      { label: 'Fire and Allied Perils', link: '/fire-and-perils' },
    ],
  },
  {
    id: 'political-violence-terrorism',
    title: 'Political Violence & Terrorism',
    link: '/fire-and-perils?variant=political-violence-terrorism',
    submenus: [
      {
        label: 'Political Violence & Terrorism Insurance',
        link: '/fire-and-perils?variant=political-violence-terrorism',
      },
    ],
  },
  {
    id: 'misc-insurance',
    title: 'Misc. Insurance',
    link: '/golfers-insurance',
    submenus: [
      { label: 'Plate Glass', link: '/domestic-package?variant=plate-glass' },
      { label: 'Golfers (Sportsman)', link: '/golfers-insurance' },
    ],
  },
  {
    id: 'theft-insurance',
    title: 'Theft Insurance',
    link: '/burglary',
    submenus: [
      { label: 'Cash In Transit (Money)', link: '/goods-in-transit?variant=cash-in-transit-money' },
      { label: 'Fidelity Guarantee', link: '/surety-undertaking' },
      { label: 'Burglary', link: '/burglary' },
    ],
  },
  {
    id: 'motor-insurance',
    title: 'Motor Insurance',
    link: '/motor-vehicle',
    submenus: [
      { label: 'Institutional Fleet', link: '/institutional-fleet' },
      { label: 'Motor Private Vehicle', link: '/motor-vehicle' },
      { label: 'Motor Cycle', link: '/motor-cycle' },
    ],
  },
  {
    id: 'workmen-compensation-insurance',
    title: 'Workmen Compensation',
    link: '/work-injury',
    submenus: [
      { label: "Employer's Liability (Common Law)", link: '/work-injury' },
      { label: 'WIBA', link: '/work-injury?variant=wiba' },
      { label: 'WIBA Plus', link: '/work-injury?variant=wiba-plus' },
    ],
  },
  {
    id: 'marine-insurance',
    title: 'Marine Insurance',
    link: '/marine-cargo',
    submenus: [
      { label: 'Marine Cargo', link: '/marine-cargo' },
      { label: 'Marine Hull', link: '/marine-hull' },
      { label: 'Goods in Transit', link: '/goods-in-transit' },
    ],
  },
  {
    id: 'liability-insurance',
    title: 'Liability Insurance',
    link: '/public-liability',
    submenus: [
      { label: 'Products Liability', link: '/public-liability?variant=products-liability' },
      { label: 'Professional Indemnity', link: '/professional-indemnity' },
      { label: 'Public Liability', link: '/public-liability' },
      { label: 'Directors & Officers Liability', link: '/professional-indemnity?variant=directors-officers-liability' },
      { label: 'Carriers Legal Liability', link: '/carriers' },
    ],
  },
  {
    id: 'bonds-insurance',
    title: 'Bonds Insurance',
    link: '/tender',
    submenus: [
      { label: 'Bid / Tender Bonds', link: '/tender' },
      { label: 'Immigration Bonds', link: '/immigration-security' },
      { label: 'NEA Bonds', link: '/immigration-security?variant=nea-bonds' },
      { label: 'Performance Bonds', link: '/performance' },
      { label: 'Custom Bonds', link: '/customs' },
    ],
  },
]

const GeneralInsuranceOverview = () => {
  return (
    <section className="general-insurance-overview-page">
      <div className="general-insurance-overview-container">
        <header className="general-insurance-overview-hero">
          <h1>General Insurance Products</h1>
          <p>
            Browse our general insurance products and quickly find the right
            cover for your motor, business, property, liability, and more.
          </p>
        </header>

        <div className="general-insurance-categories-grid">
          {generalInsuranceCategories.map((category) => (
            <article key={category.id} className="general-insurance-category-card">
              <h2 className="general-insurance-category-title">
                <span className="general-insurance-category-pill">
                  <span className="general-insurance-category-icon">
                    <CategoryIcon type={category.id} />
                  </span>
                  <span>{category.title}</span>
                </span>
              </h2>

              <div className="general-insurance-submenu-list-compact">
                {category.submenus.map((submenu) => (
                  <Link
                    key={`${category.id}-${submenu.label}`}
                    to={submenu.link}
                    className="general-insurance-submenu-row"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                  >
                    {submenu.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GeneralInsuranceOverview
