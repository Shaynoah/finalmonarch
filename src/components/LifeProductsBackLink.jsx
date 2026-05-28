import React from 'react'
import { Link } from 'react-router-dom'

const LifeProductsBackLink = () => {
  return (
    <div className="life-products-back-nav">
      <div className="life-products-back-inner">
        <Link
          to="/life-insurance"
          className="life-products-back-link"
          onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
        >
          Back to Life Insurance Products
        </Link>
      </div>
    </div>
  )
}

export default LifeProductsBackLink
