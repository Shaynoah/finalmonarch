import React, { useEffect, useRef, useState } from 'react'

const WhyChooseUs = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
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

  const benefits = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: '24/7 Support',
      description: 'Round-the-clock assistance whenever you need us.'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="6" x2="19" y2="6"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
          <line x1="5" y1="18" x2="19" y2="18"/>
          <circle cx="9" cy="6" r="1.8"/>
          <circle cx="15" cy="12" r="1.8"/>
          <circle cx="11" cy="18" r="1.8"/>
        </svg>
      ),
      title: 'Tailored Solutions',
      description: 'Customized insurance plans for your unique needs.'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l7 3v5c0 4.6-2.9 8.5-7 10-4.1-1.5-7-5.4-7-10V6l7-3z"/>
          <path d="m9.2 12.2 2 2.1 3.7-3.7"/>
        </svg>
      ),
      title: 'Expert Advisors',
      description: 'Experienced professionals with deep industry knowledge.'
    }
  ]

  return (
    <section className="why-choose-us-section" ref={sectionRef}>
      <div className="container">
        <div className={`why-choose-us-content ${isVisible ? 'visible' : ''}`}>
          <div className="why-choose-us-header">
            <span className="why-choose-us-tag">WHY CHOOSE US</span>
            <h2 className="why-choose-us-title">
             
            </h2>
          </div>

          <div className="why-choose-us-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.id} 
                className={`why-choose-us-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-icon-wrapper">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
