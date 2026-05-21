import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const logoImage = 'https://res.cloudinary.com/diozv0xm2/image/upload/q_auto/f_auto/v1776416275/logo_brgjho.jpg'
const MOBILE_NAV_BREAKPOINT = 1100

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null)
  const [openSubmenuColumns, setOpenSubmenuColumns] = useState({})
  const [suppressDesktopSubmenuHover, setSuppressDesktopSubmenuHover] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const submenuTimeoutRef = useRef(null)
  const submenuOpenDelayRef = useRef(null)
  const nestedSubmenuTimeoutRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { id: 'home', label: 'Home' },
    { 
      id: 'insurance', 
      label: 'Insurance',
      hasSubmenu: true,
      submenuItems: [
        {
          id: 'life-insurance',
          label: 'Life Insurance',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          ),
          hasNestedSubmenu: true,
          nestedSubmenuItems: [
            {
              id: 'group-cover',
              label: 'Group Last Expense',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              )
            },
            {
              id: 'group-life',
              label: 'Group Life',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              )
            },
            {
              id: 'group-retirement-benefit-schemes',
              label: 'Group Retirement Benefit Schemes',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              )
            },
            {
              id: 'group-credit-life',
              label: 'Group Credit',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="8" width="18" height="4" rx="1"/>
                  <path d="M12 8v13"/>
                  <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
                  <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
                </svg>
              )
            }
          ]
        },
        {
          id: 'personal-solutions',
          label: 'Personal Solutions',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          ),
          hasNestedSubmenu: true,
          nestedSubmenuItems: [
            {
              id: 'domestic-package',
              label: 'Domestic Package',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              )
            },
            {
              id: 'personal-accident',
              label: 'Personal Accident',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              )
            },
            {
              id: 'group-personal-accident',
              label: 'Group Personal Accident',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              )
            }
          ]
        },
        {
          id: 'corporate-solutions',
          label: 'Corporate Solutions',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
              <path d="M9 22v-4h6v4"/>
              <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01"/>
            </svg>
          ),
          hasNestedSubmenu: true,
          nestedSubmenuItems: [
            {
              id: 'fire-and-perils',
              label: 'Fire and Perils',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3c-2 5-6 6-6 11a6 6 0 0 0 12 0c0-4-3-8-6-11z"/>
                </svg>
              )
            },
            {
              id: 'consequential-loss',
              label: 'Consequential Loss',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              )
            },
            {
              id: 'industrial',
              label: 'Industrial All Risks',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              )
            },
            {
              id: 'marine-hull',
              label: 'Marine Hull',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 3.5-2 5-2s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/>
                  <path d="M7 3v11M17 3v11M3.5 9h17M5 21V9M19 21V9"/>
                </svg>
              )
            },
            {
              id: 'marine-cargo',
              label: 'Marine Cargo',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              )
            },
            {
              id: 'goods-in-transit',
              label: 'Goods in Transit',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              )
            },
            {
              id: 'burglary',
              label: 'Theft & Burglary',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              )
            },
          ]
        },
        {
          id: 'corporate-liability',
          label: 'Corporate Liability',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          ),
          hasNestedSubmenu: true,
          nestedSubmenuItems: [
            {
              id: 'carriers',
              label: 'Carriers',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18h18M3 18l2-10h14l2 10M3 18l-1 3h20l-1-3M9 12h6"/>
                </svg>
              )
            },
            {
              id: 'professional-indemnity',
              label: 'Professional Indemnity',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              )
            },
            {
              id: 'public-liability',
              label: 'Public Liability',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              )
            },
            {
              id: 'work-injury',
              label: 'Work Injury',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              )
            }
          ]
        },
        {
          id: 'construction-engineering',
          label: 'Construction & Engineering',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          ),
          hasNestedSubmenu: true,
          nestedSubmenuItems: [
            {
              id: 'contractors-all-risks',
              label: 'Contractors All Risks',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              )
            },
            {
              id: 'contractors-plant-machinery',
              label: 'Contractors Plant & Machinery',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              )
            },
            {
              id: 'electronic-equipment',
              label: 'Electronic Equipment',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              )
            },
            {
              id: 'machinery-breakdown',
              label: 'Machinery Breakdown',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              )
            },
            {
              id: 'golfers-insurance',
              label: 'Golfers Insurance',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              )
            }
          ]
        },
        {
          id: 'bonds',
          label: 'Bonds',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="8" width="18" height="4" rx="1"/>
              <path d="M12 8v13"/>
              <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
              <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
            </svg>
          ),
          hasNestedSubmenu: true,
          nestedSubmenuItems: [
            {
              id: 'customs',
              label: 'Customs',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="8" width="18" height="4" rx="1"/>
                  <path d="M12 8v13"/>
                </svg>
              )
            },
            {
              id: 'immigration-security',
              label: 'Immigration Security',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              )
            },
            {
              id: 'performance',
              label: 'Performance',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              )
            },
            {
              id: 'surety-undertaking',
              label: 'Surety Undertaking',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              )
            },
            {
              id: 'tender',
              label: 'Tender',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                </svg>
              )
            },
            {
              id: 'comesa-yellow-card',
              label: 'comesa yellow card insurance',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="8" width="18" height="4" rx="1"/>
                  <path d="M12 8v13"/>
                </svg>
              )
            }
          ]
        },
        {
          id: 'motor-insurance',
          label: 'Motor Insurance',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.5-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
              <circle cx="7" cy="17" r="2"/>
              <path d="M9 17h6"/>
              <circle cx="17" cy="17" r="2"/>
            </svg>
          ),
          hasNestedSubmenu: true,
          nestedSubmenuItems: [
            {
              id: 'motor-vehicle',
              label: 'Private Motor Insurance',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.5-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                  <circle cx="7" cy="17" r="2"/>
                  <path d="M9 17h6"/>
                  <circle cx="17" cy="17" r="2"/>
                </svg>
              )
            },
            {
              id: 'motor-cycle',
              label: 'Motor Cycle',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="5.5" cy="17.5" r="3.5"/>
                  <circle cx="18.5" cy="17.5" r="3.5"/>
                  <path d="M15 6a1 1 0 1 0 0-5 1 1 0 0 0 0 5z"/>
                  <path d="M12 17.5V14l-3-3 4-3 2 3h3"/>
                </svg>
              )
            },
            {
              id: 'institutional-fleet',
              label: 'Institutional Fleet',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18h18M5 18V8h14v10"/>
                  <path d="M7 12h10M7 15h6"/>
                </svg>
              )
            },
            {
              id: 'chauffeur-driven-psv',
              label: 'Chauffeur Driven PSV',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 17h14v-5H5v5zM5 12V7h14v5"/>
                  <circle cx="7.5" cy="17.5" r="1.5"/>
                  <circle cx="16.5" cy="17.5" r="1.5"/>
                </svg>
              )
            },
            {
              id: 'general-cartage',
              label: 'General Cartage',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="6" width="14" height="10" rx="1"/>
                  <path d="M15 10h3l4 4v2h-7"/>
                  <circle cx="6" cy="18" r="2"/>
                  <circle cx="18" cy="18" r="2"/>
                </svg>
              )
            },
            {
              id: 'goods-in-transit',
              label: 'Goods in Transit',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              )
            }
          ]
        }
      ]
    },
    { 
      id: 'pages', 
      label: 'About Us',
      hasSubmenu: true,
      submenuItems: [
        {
          id: 'about-us',
          label: 'About Monarch',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          )
        },
        {
          id: 'team',
          label: 'Team',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          )
        },
        {
          id: 'faqs',
          label: 'FAQs',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          )
        }
      ]
    },
    { id: 'contact', label: 'Contact' },
    { id: 'branches', label: 'Branches' },
    { id: 'careers', label: 'Careers' }
  ]

  // Handle scroll
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          
          // Only set active section if we're on the home page
          if (location.pathname === '/') {
            const sections = navItems
              .filter(item => !item.hasSubmenu) // Exclude items with submenus
              .map(item => document.getElementById(item.id))
              .filter(Boolean)
            const scrollY = window.pageYOffset

            sections.forEach(section => {
              const sectionHeight = section.offsetHeight
              const sectionTop = section.offsetTop - 100
              const sectionId = section.getAttribute('id')

              if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                setActiveSection(sectionId)
              }
            })
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isMobileMenuOpen])

  // Reset activeSection when not on home page
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('home')
    }
  }, [location.pathname])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        setOpenSubmenu(null)
        setOpenNestedSubmenu(null)
        setSuppressDesktopSubmenuHover(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target) && !navRef.current?.contains(event.target)) {
        setIsMobileMenuOpen(false)
        setOpenSubmenu(null)
        setOpenNestedSubmenu(null)
      }
      
      // Close desktop submenus when clicking outside
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT && navRef.current && !navRef.current.contains(event.target)) {
        if (submenuOpenDelayRef.current) {
          clearTimeout(submenuOpenDelayRef.current)
          submenuOpenDelayRef.current = null
        }
        if (submenuTimeoutRef.current) {
          clearTimeout(submenuTimeoutRef.current)
          submenuTimeoutRef.current = null
        }
        setOpenSubmenu(null)
        setOpenNestedSubmenu(null)
        setOpenSubmenuColumns({})
        setSuppressDesktopSubmenuHover(false)
      }
    }

    if (isMobileMenuOpen || openSubmenu) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMobileMenuOpen, openSubmenu])

  useEffect(() => {
    setSuppressDesktopSubmenuHover(false)
  }, [location.pathname, location.hash])

  // Reset column states when switching between mobile and desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
        setOpenSubmenuColumns({})
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenSubmenu(null)
    setOpenNestedSubmenu(null)
    setOpenSubmenuColumns({})
    if (submenuOpenDelayRef.current) {
      clearTimeout(submenuOpenDelayRef.current)
      submenuOpenDelayRef.current = null
    }
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current)
      submenuTimeoutRef.current = null
    }
    if (nestedSubmenuTimeoutRef.current) {
      clearTimeout(nestedSubmenuTimeoutRef.current)
      nestedSubmenuTimeoutRef.current = null
    }
  }

  /** Close mobile + submenu state; on desktop, hide hover flyouts until pointer leaves the nav bar. */
  const resetMenusAfterSubmenuChoice = () => {
    closeMobileMenu()
    if (typeof window !== 'undefined' && window.innerWidth > MOBILE_NAV_BREAKPOINT) {
      setSuppressDesktopSubmenuHover(true)
    }
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    resetMenusAfterSubmenuChoice()

    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' })
    
    // Handle routing for contact, branches, careers, and about pages
    if (sectionId === 'contact') {
      navigate('/contact')
      return
    }
    
    if (sectionId === 'branches') {
      navigate('/branches')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'about-us') {
      navigate('/about')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'faqs') {
      navigate('/faqs')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'team') {
      navigate('/team')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'careers') {
      navigate('/careers')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'group-cover') {
      navigate('/group-life-insurance')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'group-life') {
      navigate('/group-life')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'group-retirement-benefit-schemes') {
      navigate('/group-retirement-benefit-schemes')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'group-credit-life') {
      navigate('/group-credit-life')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'group-personal-accident') {
      navigate('/group-personal-accident')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'personal-accident') {
      navigate('/personal-accident')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'customs') {
      navigate('/customs')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'immigration-security') {
      navigate('/immigration-security')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'performance') {
      navigate('/performance')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'surety-undertaking') {
      navigate('/surety-undertaking')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'tender') {
      navigate('/tender')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'comesa-yellow-card') {
      navigate('/comesa-yellow-card')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'domestic-package') {
      navigate('/domestic-package')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'contractors-all-risks') {
      navigate('/contractors-all-risks')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'contractors-plant-machinery') {
      navigate('/contractors-plant-machinery')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'electronic-equipment') {
      navigate('/electronic-equipment')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'machinery-breakdown') {
      navigate('/machinery-breakdown')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'golfers-insurance') {
      navigate('/golfers-insurance')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'consequential-loss') {
      navigate('/consequential-loss')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'fire-and-perils') {
      navigate('/fire-and-perils')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'industrial') {
      navigate('/industrial')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'carriers') {
      navigate('/carriers')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'professional-indemnity') {
      navigate('/professional-indemnity')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'public-liability') {
      navigate('/public-liability')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'work-injury') {
      navigate('/work-injury')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'goods-in-transit') {
      navigate('/goods-in-transit')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'marine-hull') {
      navigate('/marine-hull')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'marine-cargo') {
      navigate('/marine-cargo')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'institutional-fleet') {
      navigate('/institutional-fleet')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'chauffeur-driven-psv') {
      navigate('/chauffeur-driven-psv')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'general-cartage') {
      navigate('/general-cartage')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'motor-vehicle') {
      navigate('/motor-vehicle')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'motor-cycle') {
      navigate('/motor-cycle')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'burglary') {
      navigate('/burglary')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    // Handle section scrolling for home page sections
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation, then scroll
      setTimeout(() => {
        const target = document.getElementById(sectionId)
        if (target) {
          const navbarHeight = navRef.current ? navRef.current.offsetHeight : 80
          const offsetTop = target.offsetTop - navbarHeight
          window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: 'smooth'
          })
          setActiveSection(sectionId)
        }
      }, 100)
    } else {
      const target = document.getElementById(sectionId)
      if (target) {
        const navbarHeight = navRef.current ? navRef.current.offsetHeight : 80
        const offsetTop = target.offsetTop - navbarHeight
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: 'smooth'
        })
        setActiveSection(sectionId)
      }
    }
  }

  /** Insurance mega menu: column headers that should accordion (only one open on mobile). */
  const insuranceTopLevelColumnIds = new Set([
    'life-insurance',
    'personal-solutions',
    'corporate-solutions',
    'corporate-liability',
    'construction-engineering',
    'bonds',
    'motor-insurance',
  ])

  const handleSubmenuToggle = (itemId, e) => {
    if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) {
      e.preventDefault()
      e.stopPropagation()
      // Close other submenus when opening a new one
      if (openSubmenu !== itemId) {
        setOpenNestedSubmenu(null)
        setOpenSubmenuColumns({})
      }
      setOpenSubmenu(openSubmenu === itemId ? null : itemId)
    }
  }
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Close all submenus when toggling main menu
    if (!isMobileMenuOpen) {
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      setOpenSubmenuColumns({})
    }
  }

  const handleMouseEnterSubmenu = (itemId) => {
    if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current)
        submenuTimeoutRef.current = null
      }
      if (submenuOpenDelayRef.current) {
        clearTimeout(submenuOpenDelayRef.current)
        submenuOpenDelayRef.current = null
      }
      submenuOpenDelayRef.current = setTimeout(() => {
        submenuOpenDelayRef.current = null
        setOpenSubmenu(itemId)
      }, 140)
    }
  }

  const handleMouseLeaveSubmenu = () => {
    if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
      if (submenuOpenDelayRef.current) {
        clearTimeout(submenuOpenDelayRef.current)
        submenuOpenDelayRef.current = null
      }
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current)
      }
      submenuTimeoutRef.current = setTimeout(() => {
        setOpenSubmenu(null)
        setOpenNestedSubmenu(null)
        setOpenSubmenuColumns({})
        submenuTimeoutRef.current = null
      }, 520)
    }
  }

  const handleNestedSubmenuToggle = (itemId, e) => {
    if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) {
      e.preventDefault()
      e.stopPropagation()
      setOpenNestedSubmenu(openNestedSubmenu === itemId ? null : itemId)
    }
  }
  
  const toggleSubmenuColumn = (columnId, e, rootNavId) => {
    if (typeof window === 'undefined' || window.innerWidth > MOBILE_NAV_BREAKPOINT) {
      return
    }
    e.preventDefault()
    e.stopPropagation()

    if (rootNavId !== 'insurance') {
      setOpenSubmenuColumns((prev) => ({
        ...prev,
        [columnId]: !prev[columnId],
      }))
      return
    }

    setOpenSubmenuColumns((prev) => {
      const wasOpen = !!prev[columnId]

      if (wasOpen) {
        const next = { ...prev }
        delete next[columnId]
        if (insuranceTopLevelColumnIds.has(columnId)) {
          for (const k of Object.keys(next)) {
            if (!insuranceTopLevelColumnIds.has(k)) delete next[k]
          }
        }
        return next
      }

      if (insuranceTopLevelColumnIds.has(columnId)) {
        return { [columnId]: true }
      }

      const next = { ...prev }
      for (const k of Object.keys(next)) {
        if (!insuranceTopLevelColumnIds.has(k)) delete next[k]
      }
      next[columnId] = true
      return next
    })
  }

  const handleMouseEnterNestedSubmenu = (itemId) => {
    if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
      if (nestedSubmenuTimeoutRef.current) {
        clearTimeout(nestedSubmenuTimeoutRef.current)
      }
      setOpenNestedSubmenu(itemId)
    }
  }

  const handleMouseLeaveNestedSubmenu = () => {
    if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
      nestedSubmenuTimeoutRef.current = setTimeout(() => {
        setOpenNestedSubmenu(null)
      }, 200)
    }
  }

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
      <nav 
        ref={navRef}
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''} ${suppressDesktopSubmenuHover ? 'suppress-desktop-submenu-hover' : ''}`}
        onMouseLeave={() => setSuppressDesktopSubmenuHover(false)}
      >
      <div className="nav-container">
        {/* Logo */}
        <Link 
          to="/" 
          className="nav-logo" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            closeMobileMenu()
          }}
        >
          <div className="logo-wrapper">
            <img 
              src={logoImage} 
              alt="Monarch Insurance Logo" 
              className="logo-image"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
            <div className="logo-glow"></div>
            <div className="logo-shine"></div>
          </div>
        </Link>

        {/* Desktop Menu - Centered */}
        <ul className="nav-menu" ref={menuRef}>
            {navItems.map((item, index) => {
            const useMegaFlyoutLayout = item.id === 'insurance'
            return (
            <li 
              key={item.id} 
              className={`nav-item ${item.hasSubmenu ? 'has-submenu' : ''}`}
              onMouseEnter={() => item.hasSubmenu && handleMouseEnterSubmenu(item.id)}
              onMouseLeave={() => item.hasSubmenu && handleMouseLeaveSubmenu()}
            >
              {item.id === 'contact' ? (
                <Link
                  to="/contact"
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'instant' })
                    resetMenusAfterSubmenuChoice()
                  }}
                >
                  <span className="nav-link-text">{item.label}</span>
                  <span className="nav-link-underline"></span>
                </Link>
              ) : item.id === 'branches' ? (
                <Link
                  to="/branches"
                  className={`nav-link ${location.pathname === '/branches' ? 'active' : ''}`}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'instant' })
                    resetMenusAfterSubmenuChoice()
                  }}
                >
                  <span className="nav-link-text">{item.label}</span>
                  <span className="nav-link-underline"></span>
                </Link>
              ) : (
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id && location.pathname === '/' && !item.hasSubmenu ? 'active' : ''}`}
                  onClick={(e) => {
                    if (item.hasSubmenu) {
                      handleSubmenuToggle(item.id, e)
                    } else {
                      handleNavClick(e, item.id)
                    }
                  }}
                >
                  <span className="nav-link-text">{item.label}</span>
                  {item.hasSubmenu && (
                    <span className={`nav-arrow ${openSubmenu === item.id ? 'open' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  )}
                  <span className="nav-link-underline"></span>
                </a>
              )}

              {/* Submenu */}
              {item.hasSubmenu && (
                <div 
                  className={`nav-submenu ${openSubmenu === item.id ? 'open' : ''} ${item.id === 'pages' ? 'pages-submenu' : ''} ${item.id === 'insurance' ? 'insurance-submenu' : ''} ${useMegaFlyoutLayout ? 'submenu-mega-flyout' : ''}`}
                >
                  <div className={`submenu-content ${item.id === 'pages' ? 'pages-submenu-content' : ''} ${item.id === 'insurance' ? 'insurance-submenu-content' : ''}`}>
                    <div className={`submenu-columns ${useMegaFlyoutLayout ? 'insurance-submenu-columns' : ''}`}>
                      {item.submenuItems.map((subItem, subIndex) => {
                        const hasNestedChildren = !!(subItem.hasNestedSubmenu && subItem.nestedSubmenuItems?.length)
                        const isColumnOpen = openSubmenuColumns[subItem.id]
                        
                        return (
                          <div key={subItem.id} className="submenu-column">
                            {hasNestedChildren ? (
                              <>
                                <div 
                                  className="submenu-column-header"
                                  onClick={(e) => toggleSubmenuColumn(subItem.id, e, item.id)}
                                >
                                  <span className={`submenu-header-arrow ${isColumnOpen ? 'open' : ''}`}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                  </span>
                                  <span className="submenu-header-title">{subItem.label}</span>
                                </div>
                                <div className={`submenu-column-items ${isColumnOpen ? 'open' : ''}`}>
                                  {subItem.nestedSubmenuItems.map((nestedItem, nestedIndex) => {
                                    const hasNestedItems = !!(nestedItem.hasNestedSubmenu && nestedItem.nestedSubmenuItems?.length)
                                    const isNestedOpen = openSubmenuColumns[nestedItem.id]
                                    
                                    return (
                                      <div key={nestedItem.id}>
                                        {hasNestedItems ? (
                                          <>
                                            <div 
                                              className="submenu-column-item submenu-nested-header"
                                              onClick={(e) => {
                                                if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) {
                                                  e.preventDefault()
                                                  e.stopPropagation()
                                                  toggleSubmenuColumn(nestedItem.id, e, item.id)
                                                }
                                              }}
                                            >
                                              <span className={`submenu-header-arrow ${isNestedOpen ? 'open' : ''}`}>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                  <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                              </span>
                                              <span>{nestedItem.label}</span>
                                            </div>
                                            <div className={`submenu-nested-items ${isNestedOpen ? 'open' : ''}`}>
                                              {nestedItem.nestedSubmenuItems.map((deepNestedItem, deepIndex) => (
                                                <a
                                                  key={deepNestedItem.id}
                                                  href={`#${deepNestedItem.id}`}
                                                  className="submenu-column-item submenu-nested-item"
                                                  onClick={(e) => {
                                                    e.preventDefault()
                                                    handleNavClick(e, deepNestedItem.id)
                                                  }}
                                                >
                                                  {deepNestedItem.label}
                                                </a>
                                              ))}
                                            </div>
                                          </>
                                        ) : (
                                          <a
                                            href={`#${nestedItem.id}`}
                                            className="submenu-column-item"
                                            onClick={(e) => {
                                              e.preventDefault()
                                              handleNavClick(e, nestedItem.id)
                                            }}
                                          >
                                            {nestedItem.label}
                                          </a>
                                        )}
                                      </div>
                                    )
                                  })}
                                </div>
                              </>
                            ) : subItem.hasNestedSubmenu && (!subItem.nestedSubmenuItems || subItem.nestedSubmenuItems.length === 0) ? (
                              <>
                                <div
                                  className="submenu-column-header"
                                  onClick={(e) => toggleSubmenuColumn(subItem.id, e, item.id)}
                                >
                                  <span className={`submenu-header-arrow ${isColumnOpen ? 'open' : ''}`}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                      <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                  </span>
                                  <span className="submenu-header-title">{subItem.label}</span>
                                </div>
                                <div className={`submenu-column-items ${isColumnOpen ? 'open' : ''}`}>
                                  <span className="submenu-column-item submenu-column-placeholder" role="note">
                                    Products coming soon
                                  </span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="submenu-column-header">
                                  <span className="submenu-header-arrow"></span>
                                  <span className="submenu-header-title">{subItem.label}</span>
                                </div>
                                <a
                                  href={`#${subItem.id}`}
                                  className="submenu-column-item"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    handleNavClick(e, subItem.id)
                                  }}
                                >
                                  {subItem.label}
                                </a>
                              </>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </li>
          )})}
        </ul>

        {/* Action Buttons - Far Right */}
        <div className="nav-actions">
          <a
            href="http://41.191.226.217:8444/"
            className="nav-claim-button"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            <span>Submit a Claim</span>
          </a>

          <a
            href="http://41.191.226.217:8443/landing"
            className="nav-quote-button"
            rel="noopener noreferrer"
            onClick={() => {
              setIsMobileMenuOpen(false)
              setOpenSubmenu(null)
              setOpenNestedSubmenu(null)
            }}
          >
            <span>Generate a Quote</span>
          </a>

          <a
            href="https://agent.monarchinsurance.co.ke/"
            className="nav-intermediary-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            <span>Intermediary portal</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar
