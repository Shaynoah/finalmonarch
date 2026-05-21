import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const quickLinks = [
  { to: '/', label: 'Back to Home' },
  { to: '/get-a-quote', label: 'Get a Quote' },
  { to: '/report-claim', label: 'Report a Claim' },
  { to: '/motor-vehicle', label: 'Motor Vehicle Insurance' },
  { to: '/group-life-insurance', label: 'Group Life Insurance' },
  { to: '/contact', label: 'Contact Monarch Insurance' },
]

const NotFoundPage = () => {
  return (
    <>
      <section className="section" style={{ paddingTop: '9rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <p style={{ color: '#11422e', fontWeight: 700, letterSpacing: '0.06em' }}>404 ERROR</p>
            <h1 style={{ marginBottom: '0.75rem' }}>Page Not Found</h1>
            <p style={{ color: '#444', maxWidth: '680px', margin: '0 auto' }}>
              The page may have moved or no longer exists. Use the links below to find helpful
              insurance resources quickly.
            </p>
          </header>

          <nav aria-label="Helpful page links">
            <ul
              style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '0.75rem',
                padding: 0,
                margin: 0,
              }}
            >
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    style={{
                      display: 'block',
                      border: '1px solid #dcdcdc',
                      borderRadius: '10px',
                      padding: '0.9rem 1rem',
                      textDecoration: 'none',
                      color: '#11422e',
                      fontWeight: 600,
                      backgroundColor: '#fff',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default NotFoundPage
