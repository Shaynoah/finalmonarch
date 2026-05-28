import React from 'react'
import GroupLifeInsurance from '../components/GroupLifeInsurance'
import LifeProductsBackLink from '../components/LifeProductsBackLink'
import Footer from '../components/Footer'

const GroupLifeInsurancePage = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <GroupLifeInsurance />
      <LifeProductsBackLink />
      <Footer />
    </div>
  )
}

export default GroupLifeInsurancePage
