import React, { useEffect, useRef, useState } from 'react'
import InsuranceCard from './InsuranceCard'
import lifeInsuranceImage from '../assets/life-insurance-protection-beneficiary-safeguard-concept.jpg'
import generalInsuranceImage from '../assets/closeup-unrecognizable-couple-signing-contract-with-financial-advisor.jpg'

const Insurance = () => {

  const insuranceTypes = [
    {
      id: 'life',
      image: lifeInsuranceImage,
      title: 'Life Insurance',
      description: "Secure your family's future with comprehensive life insurance coverage tailored to your needs. Protect your loved ones with reliable life insurance policies.",
      link: '/life-insurance',
      buttons: [
        { label: 'Group Cover', link: '/group-life-insurance' },
        { label: 'Education Insurance', link: '/education' }
      ]
    },
    {
      id: 'general',
      image: generalInsuranceImage,
      title: 'General Insurance',
      description: 'Comprehensive coverage for your assets including motor, property, health, and business insurance. Tailored solutions to meet all your insurance needs.',
      link: '/general-insurance',
      buttons: [
        { label: 'Motor Vehicle', link: '/motor-vehicle' },
        { label: 'Motor Cycle', link: '/motor-cycle' },
        { label: 'Personal Accident', link: '/personal-accident' }
      ]
    }
  ]

  // Preload insurance images immediately
  useEffect(() => {
    const images = [lifeInsuranceImage, generalInsuranceImage]
    images.forEach((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
    })
  }, [])

  const handleCardClick = (link) => {
    // You can navigate to a specific page or scroll to a section
    // For now, we'll just scroll to contact section
    const target = document.getElementById('contact')
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="insurance" className="insurance-section">
      <div className="container">
        <div className="services-header-layout">
          <div className="services-header-left">
            <span className="services-tag">OUR SERVICES</span>
            <h2 className="services-title">
              <span className="title-line-1">We offer a wide range of</span>
              <span className="title-line-2">insurance products.</span>
            </h2>
          </div>
          <div className="services-header-right">
            <p className="services-description">
              We provide a diverse range of insurance products, from comprehensive medical coverage to PSV, private, and commercial insurances, tailored to meet every customer's unique needs.
            </p>
          </div>
        </div>
        <div className="insurance-grid">
          {insuranceTypes.map((insurance) => (
            <InsuranceCard 
              key={insurance.id} 
              image={insurance.image}
              title={insurance.title}
              description={insurance.description}
              buttons={insurance.buttons}
              onClick={() => handleCardClick(insurance.link)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insurance
