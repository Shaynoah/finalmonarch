import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const logoImage = 'https://res.cloudinary.com/diozv0xm2/image/upload/q_auto/f_auto/v1776416275/logo_brgjho.jpg'
const MOBILE_NAV_BREAKPOINT = 1280

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

  // Organized insurance categories for mega menu
  const insuranceCategories = [
    {
      id: 'life-pension',
      name: 'LIFE & PENSION',
      individual: [
        { id: 'endowment-assurance', label: 'Endowment Assurance', link: '/endowment-assurance' },
        { id: 'group-mortgage-protection', label: 'Group Mortgage Protection', link: '/group-mortgage-protection' },
      ],
      corporate: [
        { id: 'group-credit-life', label: 'Group Credit Life', link: '/group-credit-life' },
        { id: 'group-life-insurance', label: 'Group Life Insurance', link: '/group-life-insurance' },
        { id: 'group-mortgage-protection', label: 'Group Mortgage Protection', link: '/group-mortgage-protection' },
      ]
    },
    {
      id: 'motor',
      name: 'MOTOR',
      individual: [
        { id: 'motor-vehicle', label: 'Motor Vehicle', link: '/motor-vehicle' },
        { id: 'motor-cycle', label: 'Motor Cycle', link: '/motor-cycle' },
      ],
      corporate: [
        { id: 'institutional-fleet', label: 'Institutional Fleet', link: '/institutional-fleet' },
        { id: 'chauffeur-driven-psv', label: 'Chauffeur Driven PSV', link: '/chauffeur-driven-psv' },
        { id: 'general-cartage', label: 'General Cartage', link: '/general-cartage' },
      ]
    },
    {
      id: 'property',
      name: 'PROPERTY',
      individual: [
        { id: 'domestic-package', label: 'Domestic Package', link: '/domestic-package' },
      ],
      corporate: [
        { id: 'fire-and-perils', label: 'Fire & Allied Perils', link: '/fire-and-perils' },
        { id: 'industrial', label: 'Industrial All Risk', link: '/industrial' },
        { id: 'contractors-all-risks', label: "Contractor's All Risks", link: '/contractors-all-risks' },
      ]
    },
    {
      id: 'engineering',
      name: 'ENGINEERING',
      individual: [],
      corporate: [
        { id: 'contractors-plant-machinery', label: 'Contractors Plant & Machinery', link: '/contractors-plant-machinery' },
        { id: 'electronic-equipment', label: 'Electronic Equipment', link: '/electronic-equipment' },
        { id: 'machinery-breakdown', label: 'Machinery Breakdown', link: '/machinery-breakdown' },
      ]
    },
    {
      id: 'liability',
      name: 'LIABILITY',
      individual: [
        { id: 'personal-accident', label: 'Personal Accident', link: '/personal-accident' },
      ],
      corporate: [
        { id: 'public-liability', label: 'Public Liability', link: '/public-liability' },
        { id: 'professional-indemnity', label: 'Professional Indemnity', link: '/professional-indemnity' },
        { id: 'group-personal-accident', label: 'Group Personal Accident', link: '/group-personal-accident' },
        { id: 'carriers', label: 'Carriers Legal Liability', link: '/carriers' },
      ]
    },
    {
      id: 'marine',
      name: 'MARINE',
      individual: [],
      corporate: [
        { id: 'marine-cargo', label: 'Marine Cargo', link: '/marine-cargo' },
        { id: 'marine-hull', label: 'Marine Hull', link: '/marine-hull' },
        { id: 'goods-in-transit', label: 'Goods in Transit', link: '/goods-in-transit' },
      ]
    },
    {
      id: 'bonds-security',
      name: 'BONDS & SECURITY',
      individual: [],
      corporate: [
        { id: 'tender', label: 'Bid/Tender Bonds', link: '/tender' },
        { id: 'performance', label: 'Performance Bonds', link: '/performance' },
        { id: 'customs', label: 'Custom Bonds', link: '/customs' },
        { id: 'immigration-security', label: 'Immigration Bonds', link: '/immigration-security' },
        { id: 'surety-undertaking', label: 'Fidelity Guarantee', link: '/surety-undertaking' },
      ]
    },
    {
      id: 'special-risks',
      name: 'SPECIAL RISKS',
      individual: [
        { id: 'golfers-insurance', label: 'Golfers Insurance', link: '/golfers-insurance' },
      ],
      corporate: [
        { id: 'burglary', label: 'Burglary', link: '/burglary' },
        { id: 'comesa-yellow-card', label: 'Comesa Yellow Card', link: '/comesa-yellow-card' },
        { id: 'consequential-loss', label: 'Consequential Loss', link: '/consequential-loss' },
        { id: 'work-injury', label: 'Work Injury', link: '/work-injury' },
      ]
    },
  ]

  const navItems = [
    { id: 'home', label: 'Home' },
    { 
      id: 'insurance', 
      label: 'Insurance Products',
      hasSubmenu: true,
      isInsuranceCategory: false,
      submenuItems: [
        {
          id: 'life-insurance',
          label: 'Life Insurance',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          ),
          hasNestedSubmenu: false
        },
        {
          id: 'general-insurance',
          label: 'General Insurance',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          ),
          hasNestedSubmenu: false
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

    if (sectionId === 'life-insurance') {
      navigate('/life-insurance')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }

    if (sectionId === 'general-insurance') {
      navigate('/general-insurance')
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
    
    if (sectionId === 'group-mortgage-protection') {
      navigate('/group-mortgage-protection')
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

    if (sectionId === 'student-personal-accident') {
      navigate('/group-personal-accident?variant=student')
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

    if (sectionId === 'nea-bonds') {
      navigate('/immigration-security?variant=nea-bonds')
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

    if (sectionId === 'plate-glass') {
      navigate('/domestic-package?variant=plate-glass')
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

    if (sectionId === 'political-violence-terrorism-item') {
      navigate('/fire-and-perils?variant=political-violence-terrorism')
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

    if (sectionId === 'directors-officers-liability') {
      navigate('/professional-indemnity?variant=directors-officers-liability')
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

    if (sectionId === 'products-liability') {
      navigate('/public-liability?variant=products-liability')
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

    if (sectionId === 'wiba') {
      navigate('/work-injury?variant=wiba')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }

    if (sectionId === 'wiba-plus') {
      navigate('/work-injury?variant=wiba-plus')
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

    if (sectionId === 'cash-in-transit-money') {
      navigate('/goods-in-transit?variant=cash-in-transit-money')
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
    'general-insurance',
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
                    {item.isInsuranceCategory ? (
                      // Organized Insurance Categories Layout
                      <div className="insurance-categories-grid">
                        {insuranceCategories.map((category) => (
                          <div key={category.id} className="insurance-category-card">
                            <h3 className="category-title">{category.name}</h3>
                            <div className="category-content">
                              {category.individual.length > 0 && (
                                <div className="category-section">
                                  <h4 className="section-title">Individual</h4>
                                  <ul className="product-list">
                                    {category.individual.map((product) => (
                                      <li key={product.id}>
                                        <a
                                          href={product.link}
                                          onClick={(e) => {
                                            e.preventDefault()
                                            navigate(product.link)
                                            resetMenusAfterSubmenuChoice()
                                            window.scrollTo({ top: 0, behavior: 'instant' })
                                          }}
                                        >
                                          {product.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {category.corporate.length > 0 && (
                                <div className="category-section">
                                  <h4 className="section-title">Corporate</h4>
                                  <ul className="product-list">
                                    {category.corporate.map((product) => (
                                      <li key={product.id}>
                                        <a
                                          href={product.link}
                                          onClick={(e) => {
                                            e.preventDefault()
                                            navigate(product.link)
                                            resetMenusAfterSubmenuChoice()
                                            window.scrollTo({ top: 0, behavior: 'instant' })
                                          }}
                                        >
                                          {product.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Original Pages Menu Layout
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
                                  onClick={(e) => {
                                    if (subItem.id === 'life-insurance') {
                                      handleNavClick(e, 'life-insurance')
                                      return
                                    }
                                    if (subItem.id === 'general-insurance') {
                                      handleNavClick(e, 'general-insurance')
                                      return
                                    }
                                    toggleSubmenuColumn(subItem.id, e, item.id)
                                  }}
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
                                      <div key={`${nestedItem.id}-${nestedIndex}`}>
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
                                  onClick={(e) => {
                                    if (subItem.id === 'general-insurance') {
                                      handleNavClick(e, 'general-insurance')
                                      return
                                    }
                                    toggleSubmenuColumn(subItem.id, e, item.id)
                                  }}
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
                                {item.id === 'insurance' ? (
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
                              </>
                            )}
                          </div>
                        )
                      })}
                    </div>
                    )}
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
