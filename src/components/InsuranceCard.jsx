import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const InsuranceCard = ({ image, title, description, onClick, buttons }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (cardRef.current) {
      cardRef.current.classList.add('fade-in')
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div 
      className={`insurance-card ${!buttons ? 'clickable' : ''}`}
      ref={cardRef}
      onClick={!buttons ? onClick : undefined}
      role={!buttons ? 'button' : undefined}
      tabIndex={!buttons ? 0 : undefined}
      onKeyDown={!buttons ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      } : undefined}
    >
      {image && (
        <div className="card-image-wrapper">
          <img 
            src={image} 
            alt={title} 
            className="card-image"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <div className="card-image-overlay"></div>
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {buttons ? (
          <div className="card-buttons" onClick={(e) => e.stopPropagation()}>
            {buttons.map((button, index) => (
              <Link
                key={index}
                to={button.link}
                className="card-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              >
                {button.label}
              </Link>
            ))}
          </div>
        ) : (
          <span className="card-link">Learn More →</span>
        )}
      </div>
    </div>
  )
}

export default InsuranceCard
