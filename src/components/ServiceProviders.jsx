import React, { useEffect, useRef, useState } from 'react'

const ServiceProviders = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openSections, setOpenSections] = useState({
    garages: false,
    assessors: false,
    safetySurveyors: false,
    doctors: false,
    roadsideAssistance: false
  })

  const toggleSection = (section) => {
    setOpenSections(prev => {
      // If clicking the same section, toggle it
      // If clicking a different section, close all others and open the clicked one
      const isCurrentlyOpen = prev[section]
      const newState = {
        garages: section === 'garages' ? !isCurrentlyOpen : false,
        assessors: section === 'assessors' ? !isCurrentlyOpen : false,
        safetySurveyors: section === 'safetySurveyors' ? !isCurrentlyOpen : false,
        doctors: section === 'doctors' ? !isCurrentlyOpen : false,
        roadsideAssistance: section === 'roadsideAssistance' ? !isCurrentlyOpen : false
      }
      
      // If opening a section, scroll to its header
      if (!isCurrentlyOpen && newState[section]) {
        setTimeout(() => {
          const headerElement = document.querySelector(`[data-section="${section}"]`)
          if (headerElement) {
            const headerTop = headerElement.getBoundingClientRect().top + window.pageYOffset - 120
            window.scrollTo({
              top: Math.max(0, headerTop),
              behavior: 'smooth'
            })
          }
        }, 150)
      }
      
      return newState
    })
  }

  useEffect(() => {
    // Set visible immediately to ensure styles are applied
    setIsVisible(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const dealershipGarages = [
    'Ryce Motors',
    'General Motors',
    'Subaru Kenya',
    'TransAfrica Motors',
    'Marshalls East Africa',
    'CMC Motors Group',
    'Amazon Motors',
    'Toyota East Africa',
    'DT Dobie'
  ]

  const garages = [
    {
      name: 'De-Kelvins Garage',
      contactPerson: 'Amos',
      email: 'info@dekelvinsautoservice.com',
      phone: '0722 651618, 0716 393410',
      physicalAddress: 'Along Waiyaki Way, Opposite All Africa Conference of Churches',
      postalAddress: 'P.O. Box 14939 – 00800'
    },
    {
      name: 'Teryx Motor Services',
      contactPerson: 'John Wafula',
      email: 'teryxmotors@gmail.com',
      phone: '0720-700425/0733-700425',
      physicalAddress: 'Funzi Road Industrial Area',
      postalAddress: 'P. O. Box 2212-00202 Nairobi'
    },
    {
      name: 'Kibs Auto',
      contactPerson: 'Sisto Kibue',
      phone: '0720 – 782 309',
      physicalAddress: 'Southern Bypass, off Langata Road, Nairobi'
    },
    {
      name: 'Oserian Motor Services',
      contactPerson: 'P. Kigarde',
      phone: '0722 – 293601',
      physicalAddress: 'Outering Road – Donholm',
      postalAddress: 'P.O.Box 60541-00200 City Square'
    }
  ]

  const assessors = [
    {
      name: 'Rally Assessors',
      contactPerson: 'Mr. Wahome',
      physicalAddress: 'Mombasa'
    },
    {
      name: 'Coslid Insurance Assessors',
      contactPerson: 'Mr. Karanja',
      physicalAddress: 'KCB Building, 2nd Floor, Jogoo Road'
    },
    {
      name: 'Integrated Motor Assessors',
      contactPerson: 'Mr. Mureithi',
      physicalAddress: 'New Cannon Towers, 3rd Floor, Mombasa'
    },
    {
      name: 'Kibmat Loss Assessors',
      contactPerson: 'Mr. George H. Matta',
      physicalAddress: 'Ambalal House, 8th Floor, South Wing, Mombasa'
    },
    {
      name: 'Diplomatic Accident Assessors',
      contactPerson: 'Mr. Njenga',
      postalAddress: 'Nakuru'
    },
    {
      name: 'Primedots Assessors',
      contactPerson: 'Mr. Kamau',
      physicalAddress: 'Coffee Plaza, 2nd Floor'
    },
    {
      name: 'Nordics Assessors',
      contactPerson: 'Mr. Kamau',
      physicalAddress: 'Nacico Plaza, 3rd Floor'
    }
  ]

  const safetySurveyors = [
    {
      name: 'Safety Surveyors',
      contactPerson: 'Mr. Kigo',
      physicalAddress: 'Occidental House, Baricho Road'
    }
  ]

  const doctors = [
    {
      name: 'Dr. D.O. Olima',
      contactPerson: 'Dr. D.O. Olima',
      phone: '(Office) 057 2024268 or 0735 457039',
      fax: '057 – 2024268',
      postalAddress: 'P.O. Box 1207- 40100, Kisumu',
      region: 'Kisumu'
    },
    {
      name: 'Dr. Z. Gaya',
      contactPerson: 'Dr. Z. Gaya',
      physicalAddress: 'K.V.D.A. Plaza Eldoret',
      region: 'Eldoret'
    },
    {
      name: 'Dr. Udayan Sheth',
      contactPerson: 'Dr. Udayan Sheth',
      phone: '(Office) 2313690 or (Resident) 2227994',
      physicalAddress: 'Dr. Udayan R. Sheth Doctor\'s Plaza Aga Khan Hospital, 2nd Floor',
      postalAddress: 'P.O. Box 91027- 80100 Mombasa',
      region: 'Mombasa'
    },
    {
      name: 'Dr. Modi M. Y.',
      contactPerson: 'Dr. Modi M. Y.',
      phone: '(Office) 020-3746755 or 3662779 or 0722 – 527429 or (Residential) 4182383',
      physicalAddress: 'Aga Khan Hospital, Doctors Plaza, Room 129 Nairobi',
      region: 'Nairobi'
    },
    {
      name: 'Dr. Ashwin Madhiwala',
      contactPerson: 'Dr. Ashwin Madhiwala',
      phone: '242397',
      physicalAddress: 'Kenindia House Loita Street',
      postalAddress: 'P. O. Box 50825 Nairobi',
      region: 'Nairobi'
    }
  ]

  const roadsideAssistance = [
    {
      name: 'Roadside Assistance Service',
      contactPerson: 'Emergency Contact',
      phone: '0724635700 / 0705426931',
      email: 'info@monarchinsurance.com',
      description: '24/7 roadside assistance for breakdowns, flat tires, battery jump-starts, fuel delivery, and towing services.',
      region: 'Nationwide'
    }
  ]

  // Detail item styling constants
  const detailItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '0.75rem',
    background: 'rgba(17, 66, 46, 0.03)',
    borderRadius: '10px',
    border: '1px solid rgba(17, 66, 46, 0.08)',
    transition: 'all 0.3s ease'
  }

  const iconWrapperStyle = {
    width: '36px',
    height: '36px',
    minWidth: '36px',
    background: 'linear-gradient(135deg, rgba(17, 66, 46, 0.1), rgba(17, 66, 46, 0.15))',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    color: '#11422e'
  }

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    flex: '1',
    minWidth: '0'
  }

  const labelStyle = {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: '#666666',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '0.125rem'
  }

  const valueStyle = {
    fontSize: '0.875rem',
    color: '#1a1a1a',
    lineHeight: '1.4',
    fontWeight: '500',
    wordWrap: 'break-word'
  }

  const linkStyle = {
    ...valueStyle,
    color: '#11422e',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  }

  const ContactCard = ({ provider, icon }) => (
    <div 
      className="service-provider-card"
      style={{
        background: '#ffffff',
        borderRadius: '14px',
        padding: '1.25rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        border: '2px solid rgba(17, 66, 46, 0.08)',
        transition: 'all 0.3s ease',
        opacity: '1',
        transform: 'translateY(0)',
        display: 'block',
        marginBottom: '0'
      }}
    >
      <div 
        className="service-provider-card-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem',
          marginBottom: '0.75rem',
          paddingBottom: '0.75rem',
          borderBottom: '2px solid rgba(17, 66, 46, 0.1)'
        }}
      >
        {icon && (
          <div 
            className="service-provider-icon"
            style={{
              width: '44px',
              height: '44px',
              minWidth: '44px',
              background: 'linear-gradient(135deg, #1a5a3f, #11422e)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: '0',
              color: '#ffffff'
            }}
          >
            {icon}
          </div>
        )}
        <h3 
          className="service-provider-name"
          style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0',
            flex: '1',
            lineHeight: '1.3'
          }}
        >
          {provider.name}
        </h3>
      </div>
      <div 
        className="service-provider-details"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.625rem',
          marginTop: '0.25rem'
        }}
      >
        {provider.contactPerson && (
          <div className="service-provider-detail-item" style={detailItemStyle}>
            <div className="detail-icon-wrapper" style={iconWrapperStyle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="detail-content" style={contentStyle}>
              <span className="detail-label" style={labelStyle}>Contact Person</span>
              <span className="detail-value" style={valueStyle}>{provider.contactPerson}</span>
            </div>
          </div>
        )}
        {provider.email && (
          <div className="service-provider-detail-item" style={detailItemStyle}>
            <div className="detail-icon-wrapper" style={iconWrapperStyle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="detail-content" style={contentStyle}>
              <span className="detail-label" style={labelStyle}>Email</span>
              <a href={`mailto:${provider.email}`} className="detail-value detail-link" style={linkStyle}>{provider.email}</a>
            </div>
          </div>
        )}
        {provider.phone && (
          <div className="service-provider-detail-item" style={detailItemStyle}>
            <div className="detail-icon-wrapper" style={iconWrapperStyle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="detail-content" style={contentStyle}>
              <span className="detail-label" style={labelStyle}>Phone</span>
              <a href={`tel:${provider.phone.replace(/\s/g, '')}`} className="detail-value detail-link" style={linkStyle}>{provider.phone}</a>
            </div>
          </div>
        )}
        {provider.fax && (
          <div className="service-provider-detail-item" style={detailItemStyle}>
            <div className="detail-icon-wrapper" style={iconWrapperStyle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="detail-content" style={contentStyle}>
              <span className="detail-label" style={labelStyle}>Fax</span>
              <span className="detail-value" style={valueStyle}>{provider.fax}</span>
            </div>
          </div>
        )}
        {provider.physicalAddress && (
          <div className="service-provider-detail-item" style={detailItemStyle}>
            <div className="detail-icon-wrapper" style={iconWrapperStyle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="detail-content" style={contentStyle}>
              <span className="detail-label" style={labelStyle}>Physical Address</span>
              <span className="detail-value" style={valueStyle}>{provider.physicalAddress}</span>
            </div>
          </div>
        )}
        {provider.postalAddress && (
          <div className="service-provider-detail-item" style={detailItemStyle}>
            <div className="detail-icon-wrapper" style={iconWrapperStyle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="detail-content" style={contentStyle}>
              <span className="detail-label" style={labelStyle}>Postal Address</span>
              <span className="detail-value" style={valueStyle}>{provider.postalAddress}</span>
            </div>
          </div>
        )}
        {provider.region && (
          <div className="service-provider-detail-item" style={detailItemStyle}>
            <div className="detail-icon-wrapper" style={iconWrapperStyle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div className="detail-content" style={contentStyle}>
              <span className="detail-label" style={labelStyle}>Region</span>
              <span 
                className="detail-value region-badge"
                style={{
                  ...valueStyle,
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #1a5a3f, #11422e)',
                  color: '#ffffff',
                  padding: '0.375rem 1rem',
                  borderRadius: '20px',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  width: 'fit-content',
                  boxShadow: '0 2px 8px rgba(17, 66, 46, 0.2)',
                  letterSpacing: '0.3px'
                }}
              >
                {provider.region}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <section 
      ref={sectionRef} 
      className={`service-providers-section ${isVisible ? 'visible' : ''}`}
      style={{
        padding: '120px 0 40px',
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
        position: 'relative',
        width: '100%',
        display: 'block',
        visibility: 'visible',
        opacity: '1'
      }}
    >
      <div className="container">
        {/* Hero Section */}
        <div 
          className="service-providers-hero"
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            opacity: '1',
            transform: 'translateY(0)'
          }}
        >
          <h1 
            className="service-providers-title"
            style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              color: '#1a1a1a',
              margin: '0 0 0.5rem 0',
              lineHeight: '1.2',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem'
            }}
          >
            <span className="title-line-1" style={{ color: '#1a1a1a' }}>Crafting a Paradigm Shift for</span>
            <span 
              className="title-line-2"
              style={{
                background: 'linear-gradient(135deg, #11422e 0%, #1a5a3f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Unmatched Service Standards
            </span>
          </h1>
          <p 
            className="service-providers-subtitle"
            style={{
              fontSize: '1.1rem',
              color: '#666666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.5'
            }}
          >
            Our trusted network of service providers ensures you receive the highest quality care and support across all regions.
          </p>
        </div>

        {/* Dealership Garages */}
        <div className="service-providers-category" style={{ marginBottom: '1.5rem' }}>
          <div className="category-header">
            <h2 
              className="category-title"
              style={{
                fontSize: '1.875rem',
                fontWeight: '800',
                color: '#11422e',
                margin: '0 0 0.5rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'block'
              }}
            >
              Dealership Garages
            </h2>
            <div 
              className="category-underline"
              style={{
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, #11422e 0%, #1a5a3f 100%)',
                borderRadius: '2px',
                marginBottom: '1rem'
              }}
            ></div>
          </div>
          <div 
            className="dealership-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1rem',
              width: '100%'
            }}
          >
            {dealershipGarages.map((garage, index) => (
              <div 
                key={index} 
                className="dealership-item" 
                style={{ 
                  '--delay': `${index * 0.05}s`,
                  background: '#ffffff',
                  padding: '1rem 1.25rem',
                  borderRadius: '10px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  border: '2px solid rgba(17, 66, 46, 0.08)',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  opacity: '1',
                  transform: 'translateY(0)',
                  display: 'block'
                }}
              >
                {garage}
              </div>
            ))}
          </div>
        </div>

        {/* Garages */}
        <div className="service-providers-category" style={{ marginBottom: '1.25rem' }}>
          <div 
            className="category-header"
            data-section="garages"
            onClick={() => toggleSection('garages')}
            style={{
              cursor: 'pointer',
              padding: '1.25rem 1.5rem',
              background: openSections.garages ? 'rgba(17, 66, 46, 0.05)' : '#ffffff',
              borderRadius: '12px',
              border: '2px solid rgba(17, 66, 46, 0.1)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: openSections.garages ? '1.5rem' : '0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #1a5a3f, #11422e)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                  <polyline points="12 15 17 21 7 21 12 15"/>
                </svg>
              </div>
              <h2 
                className="category-title"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#11422e',
                  margin: '0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Garages
              </h2>
            </div>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{
                width: '24px',
                height: '24px',
                color: '#11422e',
                transform: openSections.garages ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          {openSections.garages && (
            <div 
              className="service-providers-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.25rem',
                width: '100%',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              {garages.map((garage, index) => (
                <ContactCard
                  key={index}
                  provider={garage}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                      <polyline points="12 15 17 21 7 21 12 15"/>
                    </svg>
                  }
                />
              ))}
            </div>
          )}
        </div>

        {/* Assessors */}
        <div className="service-providers-category" style={{ marginBottom: '1.25rem' }}>
          <div 
            className="category-header"
            data-section="assessors"
            onClick={() => toggleSection('assessors')}
            style={{
              cursor: 'pointer',
              padding: '1.25rem 1.5rem',
              background: openSections.assessors ? 'rgba(17, 66, 46, 0.05)' : '#ffffff',
              borderRadius: '12px',
              border: '2px solid rgba(17, 66, 46, 0.1)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: openSections.assessors ? '1rem' : '0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #1a5a3f, #11422e)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h2 
                className="category-title"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#11422e',
                  margin: '0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Assessors
              </h2>
            </div>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{
                width: '24px',
                height: '24px',
                color: '#11422e',
                transform: openSections.assessors ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          {openSections.assessors && (
            <div 
              className="service-providers-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.25rem',
                width: '100%',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              {assessors.map((assessor, index) => (
                <ContactCard
                  key={index}
                  provider={assessor}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  }
                />
              ))}
            </div>
          )}
        </div>

        {/* Safety Surveyors */}
        <div className="service-providers-category" style={{ marginBottom: '1.25rem' }}>
          <div 
            className="category-header"
            data-section="safetySurveyors"
            onClick={() => toggleSection('safetySurveyors')}
            style={{
              cursor: 'pointer',
              padding: '1.25rem 1.5rem',
              background: openSections.safetySurveyors ? 'rgba(17, 66, 46, 0.05)' : '#ffffff',
              borderRadius: '12px',
              border: '2px solid rgba(17, 66, 46, 0.1)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: openSections.safetySurveyors ? '1rem' : '0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #1a5a3f, #11422e)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h2 
                className="category-title"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#11422e',
                  margin: '0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Safety Surveyors
              </h2>
            </div>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{
                width: '24px',
                height: '24px',
                color: '#11422e',
                transform: openSections.safetySurveyors ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          {openSections.safetySurveyors && (
            <div 
              className="service-providers-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.25rem',
                width: '100%',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              {safetySurveyors.map((surveyor, index) => (
                <ContactCard
                  key={index}
                  provider={surveyor}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  }
                />
              ))}
            </div>
          )}
        </div>

        {/* Doctors */}
        <div className="service-providers-category" style={{ marginBottom: '1.25rem' }}>
          <div 
            className="category-header"
            data-section="doctors"
            onClick={() => toggleSection('doctors')}
            style={{
              cursor: 'pointer',
              padding: '1.25rem 1.5rem',
              background: openSections.doctors ? 'rgba(17, 66, 46, 0.05)' : '#ffffff',
              borderRadius: '12px',
              border: '2px solid rgba(17, 66, 46, 0.1)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: openSections.doctors ? '1rem' : '0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #1a5a3f, #11422e)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M12 11v6M9 14h6"/>
                </svg>
              </div>
              <h2 
                className="category-title"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#11422e',
                  margin: '0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Doctors
              </h2>
            </div>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{
                width: '24px',
                height: '24px',
                color: '#11422e',
                transform: openSections.doctors ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          {openSections.doctors && (
            <div 
              className="service-providers-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.25rem',
                width: '100%',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              {doctors.map((doctor, index) => (
                <ContactCard
                  key={index}
                  provider={doctor}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                      <path d="M12 11v6M9 14h6"/>
                    </svg>
                  }
                />
              ))}
            </div>
          )}
        </div>

        {/* Roadside Assistance */}
        <div className="service-providers-category" style={{ marginBottom: '1.25rem' }}>
          <div 
            className="category-header"
            data-section="roadsideAssistance"
            onClick={() => toggleSection('roadsideAssistance')}
            style={{
              cursor: 'pointer',
              padding: '1.25rem 1.5rem',
              background: openSections.roadsideAssistance ? 'rgba(17, 66, 46, 0.05)' : '#ffffff',
              borderRadius: '12px',
              border: '2px solid rgba(17, 66, 46, 0.1)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: openSections.roadsideAssistance ? '1rem' : '0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #1a5a3f, #11422e)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                  <path d="M12 15l-3-3 3-3 3 3z"/>
                  <circle cx="12" cy="12" r="1"/>
                </svg>
              </div>
              <h2 
                className="category-title"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#11422e',
                  margin: '0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Roadside Assistance
              </h2>
            </div>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{
                width: '24px',
                height: '24px',
                color: '#11422e',
                transform: openSections.roadsideAssistance ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          {openSections.roadsideAssistance && (
            <div 
              className="service-providers-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.25rem',
                width: '100%',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              {roadsideAssistance.map((service, index) => (
                <ContactCard
                  key={index}
                  provider={service}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                      <path d="M12 15l-3-3 3-3 3 3z"/>
                      <circle cx="12" cy="12" r="1"/>
                    </svg>
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServiceProviders
