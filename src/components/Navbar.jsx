import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImage from '../assets/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null)
  const [openSubmenuColumns, setOpenSubmenuColumns] = useState({})
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const submenuTimeoutRef = useRef(null)
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
              label: 'Group cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              )
            },
            {
              id: 'personal-cover',
              label: 'Personal cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              ),
              hasNestedSubmenu: true,
              nestedSubmenuItems: [
                {
                  id: 'education',
                  label: 'Education',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  )
                }
              ]
            }
          ]
        },
        { 
          id: 'general-insurance', 
          label: 'General Insurance',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          ),
          hasNestedSubmenu: true,
          nestedSubmenuItems: [
            {
              id: 'accident-cover',
              label: 'Accident cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              ),
              hasNestedSubmenu: true,
              nestedSubmenuItems: [
                {
                  id: 'group-personal-accident',
                  label: 'Group personal accident',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )
                },
                {
                  id: 'personal-accident',
                  label: 'Personal accident',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  )
                }
              ]
            },
            {
              id: 'bond-cover',
              label: 'Bond Cover',
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
                }
              ]
            },
            {
              id: 'domestic-cover',
              label: 'Domestic Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              ),
              hasNestedSubmenu: true,
              nestedSubmenuItems: [
                {
                  id: 'domestic-package',
                  label: 'Domestic package',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  )
                }
              ]
            },
            {
              id: 'engineering-cover',
              label: 'Engineering Cover',
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
                }
              ]
            },
            {
              id: 'fire-perils-cover',
              label: 'Fire & Perils Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1.5-2.5S8 8.38 8 7.5c0 .5.5 1 1 1.5s1 1 1 1.5c0 .5-.5 1-1 1.5s-1.5 1-1.5 2.5"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              ),
              hasNestedSubmenu: true,
              nestedSubmenuItems: [
                {
                  id: 'consequential-loss',
                  label: 'Consequential Loss',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1.5-2.5S8 8.38 8 7.5c0 .5.5 1 1 1.5s1 1 1 1.5c0 .5-.5 1-1 1.5s-1.5 1-1.5 2.5"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  )
                },
                {
                  id: 'fire-and-perils',
                  label: 'Fire and Perils',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1.5-2.5S8 8.38 8 7.5c0 .5.5 1 1 1.5s1 1 1 1.5c0 .5-.5 1-1 1.5s-1.5 1-1.5 2.5"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  )
                },
                {
                  id: 'industrial',
                  label: 'Industrial',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  )
                }
              ]
            },
            {
              id: 'liability-cover',
              label: 'Liability Cover',
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
              id: 'marine-cover',
              label: 'Marine Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18h18M3 18l2-10h14l2 10M3 18l-1 3h20l-1-3M9 12h6"/>
                </svg>
              ),
              hasNestedSubmenu: true,
              nestedSubmenuItems: [
                {
                  id: 'goods-in-transit',
                  label: 'Goods in Transit',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 18h18M3 18l2-10h14l2 10M3 18l-1 3h20l-1-3M9 12h6"/>
                    </svg>
                  )
                },
                {
                  id: 'marine-hull',
                  label: 'Marine Hull',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 18h18M3 18l2-10h14l2 10M3 18l-1 3h20l-1-3M9 12h6"/>
                    </svg>
                  )
                }
              ]
            },
            {
              id: 'motor-commercial',
              label: 'Motor Commercial',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                  <path d="M12 15l-3-3 3-3 3 3z"/>
                  <path d="M12 12h7"/>
                </svg>
              ),
              hasNestedSubmenu: true,
              nestedSubmenuItems: [
                {
                  id: 'agricultural-forestry',
                  label: 'Agricultural and Forestry',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                      <path d="M12 15l-3-3 3-3 3 3z"/>
                    </svg>
                  )
                },
                {
                  id: 'driving-schools',
                  label: 'Driving Schools',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                      <path d="M12 15l-3-3 3-3 3 3z"/>
                    </svg>
                  )
                },
                {
                  id: 'general-cartage',
                  label: 'General Cartage',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                      <path d="M12 15l-3-3 3-3 3 3z"/>
                    </svg>
                  )
                }
              ]
            },
            {
              id: 'motor-private',
              label: 'Motor Private',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                  <path d="M12 15l-3-3 3-3 3 3z"/>
                </svg>
              ),
              hasNestedSubmenu: true,
              nestedSubmenuItems: [
                {
                  id: 'motor-vehicle',
                  label: 'Motor Vehicle',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                      <path d="M12 15l-3-3 3-3 3 3z"/>
                    </svg>
                  )
                },
                {
                  id: 'motor-cycle',
                  label: 'Motor Cycle',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="5" cy="17" r="3"/>
                      <circle cx="19" cy="17" r="3"/>
                      <path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-5c-1.5 0-3 1.5-3 3v2"/>
                    </svg>
                  )
                }
              ]
            },
            {
              id: 'theft-cover',
              label: 'Theft Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              ),
              hasNestedSubmenu: true,
              nestedSubmenuItems: [
                {
                  id: 'burglary',
                  label: 'Burglary',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  )
                }
              ]
            }
          ]
        }
      ]
    },
    { 
      id: 'pages', 
      label: 'Pages',
      hasSubmenu: true,
      submenuItems: [
        {
          id: 'about-us',
          label: 'About Us',
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
          
          const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
          const scrollY = window.pageYOffset

          sections.forEach(section => {
            const sectionHeight = section.offsetHeight
            const sectionTop = section.offsetTop - 100
            const sectionId = section.getAttribute('id')

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              setActiveSection(sectionId)
            }
          })
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        setOpenSubmenu(null)
        setOpenNestedSubmenu(null)
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
      if (window.innerWidth > 768 && navRef.current && !navRef.current.contains(event.target)) {
        setOpenSubmenu(null)
        setOpenNestedSubmenu(null)
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


  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' })
    
    // Handle routing for contact, branches, careers, and about pages
    if (sectionId === 'contact') {
      navigate('/contact')
      closeMobileMenu()
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
    
    if (sectionId === 'education') {
      navigate('/education')
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
    
    if (sectionId === 'agricultural-forestry') {
      navigate('/agricultural-forestry')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'driving-schools') {
      navigate('/driving-schools')
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
    
    closeMobileMenu()
  }

  const handleSubmenuToggle = (itemId, e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      e.stopPropagation()
      // Close other submenus when opening a new one
      if (openSubmenu !== itemId) {
        setOpenNestedSubmenu(null)
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
    }
  }

  const handleMouseEnterSubmenu = (itemId) => {
    if (window.innerWidth > 768) {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current)
      }
      setOpenSubmenu(itemId)
    }
  }

  const handleMouseLeaveSubmenu = () => {
    if (window.innerWidth > 768) {
      submenuTimeoutRef.current = setTimeout(() => {
        setOpenSubmenu(null)
        setOpenNestedSubmenu(null)
      }, 200)
    }
  }

  const handleNestedSubmenuToggle = (itemId, e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      e.stopPropagation()
      setOpenNestedSubmenu(openNestedSubmenu === itemId ? null : itemId)
    }
  }
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenSubmenu(null)
    setOpenNestedSubmenu(null)
    setOpenSubmenuColumns({})
  }
  
  const toggleSubmenuColumn = (columnId, e) => {
    // Only toggle on mobile
    if (window.innerWidth <= 768) {
      e.preventDefault()
      e.stopPropagation()
      setOpenSubmenuColumns(prev => ({
        ...prev,
        [columnId]: !prev[columnId]
      }))
    }
  }
  
  // Reset column states when switching between mobile and desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenSubmenuColumns({})
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMouseEnterNestedSubmenu = (itemId) => {
    if (window.innerWidth > 768) {
      if (nestedSubmenuTimeoutRef.current) {
        clearTimeout(nestedSubmenuTimeoutRef.current)
      }
      setOpenNestedSubmenu(itemId)
    }
  }

  const handleMouseLeaveNestedSubmenu = () => {
    if (window.innerWidth > 768) {
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
        className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}
      >
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
            {navItems.map((item, index) => (
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
                    closeMobileMenu()
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
                    closeMobileMenu()
                  }}
                >
                  <span className="nav-link-text">{item.label}</span>
                  <span className="nav-link-underline"></span>
                </Link>
              ) : (
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id && location.pathname === '/' ? 'active' : ''}`}
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
                  className={`nav-submenu ${openSubmenu === item.id ? 'open' : ''} ${item.id === 'pages' ? 'pages-submenu' : ''}`}
                  onMouseEnter={() => handleMouseEnterSubmenu(item.id)}
                  onMouseLeave={handleMouseLeaveSubmenu}
                >
                  <div className={`submenu-content ${item.id === 'pages' ? 'pages-submenu-content' : ''}`}>
                    <div className="submenu-columns">
                      {item.submenuItems.map((subItem, subIndex) => {
                        // For General Insurance, create a column for each nested item
                        if (subItem.id === 'general-insurance' && subItem.hasNestedSubmenu && subItem.nestedSubmenuItems) {
                          return (
                            <React.Fragment key={subItem.id}>
                              {subItem.nestedSubmenuItems.map((nestedItem, nestedIndex) => {
                                const hasItems = nestedItem.hasNestedSubmenu && nestedItem.nestedSubmenuItems
                                const isColumnOpen = openSubmenuColumns[nestedItem.id]
                                
                                return (
                                  <div key={nestedItem.id} className="submenu-column">
                                    {hasItems ? (
                                      <>
                                        <div 
                                          className="submenu-column-header"
                                          onClick={(e) => toggleSubmenuColumn(nestedItem.id, e)}
                                        >
                                          <span className={`submenu-header-arrow ${isColumnOpen ? 'open' : ''}`}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                              <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                          </span>
                                          <span className="submenu-header-title">{nestedItem.label}</span>
                                        </div>
                                        <div className={`submenu-column-items ${isColumnOpen ? 'open' : ''}`}>
                                          {nestedItem.nestedSubmenuItems.map((deepNestedItem, deepIndex) => (
                                            <a
                                              key={deepNestedItem.id}
                                              href={`#${deepNestedItem.id}`}
                                              className="submenu-column-item"
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
                                      <>
                                        <div className="submenu-column-header">
                                          <span className="submenu-header-arrow"></span>
                                          <span className="submenu-header-title">{nestedItem.label}</span>
                                        </div>
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
                                      </>
                                    )}
                                  </div>
                                )
                              })}
                            </React.Fragment>
                          )
                        }
                        // For other items (like Life Insurance), use the original structure
                        const hasItems = subItem.hasNestedSubmenu && subItem.nestedSubmenuItems
                        const isColumnOpen = openSubmenuColumns[subItem.id]
                        
                        return (
                          <div key={subItem.id} className="submenu-column">
                            {hasItems ? (
                              <>
                                <div 
                                  className="submenu-column-header"
                                  onClick={(e) => toggleSubmenuColumn(subItem.id, e)}
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
                                    const hasNestedItems = nestedItem.hasNestedSubmenu && nestedItem.nestedSubmenuItems
                                    const isNestedOpen = openSubmenuColumns[nestedItem.id]
                                    
                                    return (
                                      <div key={nestedItem.id}>
                                        {hasNestedItems ? (
                                          <>
                                            <div 
                                              className="submenu-column-item submenu-nested-header"
                                              onClick={(e) => {
                                                if (window.innerWidth <= 768) {
                                                  e.preventDefault()
                                                  e.stopPropagation()
                                                  toggleSubmenuColumn(nestedItem.id, e)
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
          ))}
        </ul>

        {/* Action Buttons - Far Right */}
        <div className="nav-actions">
          <a
            href="http://41.191.226.217:8444/"
            className="nav-claim-button"
            onClick={closeMobileMenu}
          >
            <span>Submit a Claim</span>
          </a>

          <Link
            to="/get-a-quote"
            className="nav-quote-button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'instant' })
              setIsMobileMenuOpen(false)
              setOpenSubmenu(null)
              setOpenNestedSubmenu(null)
            }}
          >
            <span>Get a Quote</span>
          </Link>

          <a
            href="https://intermediary.monarchinsurance.co.ke/login"
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
