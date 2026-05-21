import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ToastProvider } from './context/ToastContext'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import FloatingChat from './components/FloatingChat'
import SEO from './components/SEO'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import BranchesPage from './pages/BranchesPage'
import FAQsPage from './pages/FAQsPage'
import TeamPage from './pages/TeamPage'
import GroupLifeInsurancePage from './pages/GroupLifeInsurancePage'
import GroupRetirementBenefitSchemesPage from './pages/GroupRetirementBenefitSchemesPage'
import GroupCreditLifeInsurancePage from './pages/GroupCreditLifeInsurancePage'
import GroupLifePage from './pages/GroupLifePage'
import GroupPersonalAccidentPage from './pages/GroupPersonalAccidentPage'
import CustomsPage from './pages/CustomsPage'
import ImmigrationSecurityPage from './pages/ImmigrationSecurityPage'
import PerformancePage from './pages/PerformancePage'
import SuretyUndertakingPage from './pages/SuretyUndertakingPage'
import TenderPage from './pages/TenderPage'
import ComesaYellowCardPage from './pages/ComesaYellowCardPage'
import DomesticPackagePage from './pages/DomesticPackagePage'
import ContractorsAllRisksPage from './pages/ContractorsAllRisksPage'
import ContractorsPlantMachineryPage from './pages/ContractorsPlantMachineryPage'
import ElectronicEquipmentPage from './pages/ElectronicEquipmentPage'
import MachineryBreakdownPage from './pages/MachineryBreakdownPage'
import GolfersInsurancePage from './pages/GolfersInsurancePage'
import ConsequentialLossPage from './pages/ConsequentialLossPage'
import FireAndPerilsPage from './pages/FireAndPerilsPage'
import IndustrialPage from './pages/IndustrialPage'
import CarriersPage from './pages/CarriersPage'
import ProfessionalIndemnityPage from './pages/ProfessionalIndemnityPage'
import PublicLiabilityPage from './pages/PublicLiabilityPage'
import WorkInjuryPage from './pages/WorkInjuryPage'
import GoodsInTransitPage from './pages/GoodsInTransitPage'
import MarineHullPage from './pages/MarineHullPage'
import MarineCargoPage from './pages/MarineCargoPage'
import InstitutionalFleetPage from './pages/InstitutionalFleetPage'
import ChauffeurDrivenPSVPage from './pages/ChauffeurDrivenPSVPage'
import GeneralCartagePage from './pages/GeneralCartagePage'
import MotorVehiclePage from './pages/MotorVehiclePage'
import MotorCyclePage from './pages/MotorCyclePage'
import BurglaryPage from './pages/BurglaryPage'
import GetAQuotePage from './pages/GetAQuotePage'
import FormsPage from './pages/FormsPage'
import ReportClaimPage from './pages/ReportClaimPage'
import ServiceProvidersPage from './pages/ServiceProvidersPage'
import CareersPage from './pages/CareersPage'
import NotFoundPage from './pages/NotFoundPage'

const seoByPath = {
  '/': {
    title: 'Monarch Insurance Kenya | Trusted Cover',
    description:
      'Protect your family, business, and assets with trusted insurance solutions in Kenya with expert advice and responsive claims support.',
    keywords:
      'insurance Kenya, Monarch Insurance, motor insurance Kenya, life insurance Kenya, business insurance Kenya',
  },
  '/contact': {
    title: 'Contact Monarch Insurance Kenya',
    description:
      'Contact Monarch Insurance in Kenya for policy support, quotes, and claims guidance via phone, email, or our Nairobi office.',
    keywords:
      'contact Monarch Insurance, insurance contacts Kenya, Nairobi insurance office',
  },
  '/about': {
    title: 'About Monarch Insurance Kenya',
    description:
      'Learn about Monarch Insurance, our history, and our commitment to dependable insurance protection for people and businesses in Kenya.',
    keywords:
      'about Monarch Insurance, insurance company Kenya, trusted insurer Kenya',
  },
  '/branches': {
    title: 'Monarch Insurance Branches in Kenya',
    description:
      'Find Monarch Insurance branches across Kenya and connect with local teams for policy advice, renewals, and claims support.',
    keywords: 'insurance branches Kenya, Monarch branches, local insurance offices',
  },
  '/faqs': {
    title: 'Insurance FAQs | Monarch Kenya',
    description:
      'Get quick answers to common insurance questions about cover, claims, renewals, and policy management with Monarch Insurance Kenya.',
    keywords: 'insurance FAQs Kenya, policy questions, claims questions',
  },
  '/team': {
    title: 'Monarch Insurance Leadership Team',
    description:
      'Meet the Monarch Insurance team driving quality service, risk expertise, and customer-focused insurance solutions in Kenya.',
    keywords: 'Monarch Insurance team, insurance leadership Kenya, insurance experts',
  },
  '/group-life-insurance': {
    title: 'Group Last Expense Cover Kenya',
    description:
      'Secure your team with Group Last Expense cover in Kenya, designed to support families and employers during difficult times.',
    keywords: 'group last expense Kenya, employee life cover, corporate life insurance',
  },
  '/group-retirement-benefit-schemes': {
    title: 'Group Retirement Benefits Kenya',
    description:
      'Offer dependable group retirement benefit schemes in Kenya to help employees build long-term financial security.',
    keywords: 'group retirement benefits Kenya, pension schemes Kenya, employee benefits',
  },
  '/group-credit-life': {
    title: 'Group Credit Life Insurance Kenya',
    description:
      'Protect lenders and borrowers with Group Credit Life insurance in Kenya that secures outstanding loan balances.',
    keywords: 'group credit life Kenya, loan protection insurance, lender risk cover',
  },
  '/group-life': {
    title: 'Group Life Insurance for Employers',
    description:
      'Support your workforce with Group Life insurance in Kenya for death and disability protection aligned to employer needs.',
    keywords: 'group life insurance Kenya, employer life cover, staff benefits',
  },
  '/group-personal-accident': {
    title: 'Group Personal Accident Insurance',
    description:
      'Protect staff against accidental injury or death with Group Personal Accident insurance solutions tailored for Kenyan employers.',
    keywords: 'group personal accident Kenya, employee accident cover, workplace insurance',
  },
  '/customs': {
    title: 'Customs Bond Insurance Kenya',
    description:
      'Meet customs obligations with reliable Customs Bond insurance in Kenya for importers, exporters, and clearing agents.',
    keywords: 'customs bond Kenya, import bond insurance, trade insurance Kenya',
  },
  '/immigration-security': {
    title: 'Immigration Security Bond Kenya',
    description:
      'Comply with immigration requirements using Immigration Security Bond insurance solutions from Monarch Insurance Kenya.',
    keywords: 'immigration security bond Kenya, immigration bond insurance',
  },
  '/performance': {
    title: 'Performance Bond Insurance Kenya',
    description:
      'Win contracts confidently with Performance Bond insurance in Kenya to guarantee delivery obligations for project owners.',
    keywords: 'performance bond Kenya, contract bond insurance, tender security',
  },
  '/surety-undertaking': {
    title: 'Surety Undertaking Bond Kenya',
    description:
      'Access surety undertaking bonds in Kenya for contractual and regulatory obligations with trusted underwriting support.',
    keywords: 'surety undertaking Kenya, surety bond insurance, contract guarantees',
  },
  '/tender': {
    title: 'Tender Bond Insurance Kenya',
    description:
      'Submit bids with confidence using Tender Bond insurance in Kenya that demonstrates financial credibility to procuring entities.',
    keywords: 'tender bond Kenya, bid bond insurance, procurement insurance',
  },
  '/comesa-yellow-card': {
    title: 'COMESA Yellow Card Insurance',
    description:
      'Get COMESA Yellow Card insurance cover for cross-border road travel and legal compliance across participating countries.',
    keywords: 'COMESA yellow card insurance, cross border motor insurance',
  },
  '/domestic-package': {
    title: 'Domestic Package Insurance Kenya',
    description:
      'Protect your home, valuables, and household liabilities with Domestic Package insurance designed for homes in Kenya.',
    keywords: 'domestic package insurance Kenya, home insurance Kenya',
  },
  '/contractors-all-risks': {
    title: 'Contractors All Risks Insurance',
    description:
      'Safeguard construction projects with Contractors All Risks insurance in Kenya covering works, materials, and site liabilities.',
    keywords: 'contractors all risks Kenya, construction insurance Kenya',
  },
  '/contractors-plant-machinery': {
    title: 'Plant & Machinery Insurance Kenya',
    description:
      'Protect construction equipment with Contractors Plant and Machinery insurance in Kenya for owned and hired assets.',
    keywords: 'plant machinery insurance Kenya, contractor equipment cover',
  },
  '/electronic-equipment': {
    title: 'Electronic Equipment Insurance',
    description:
      'Secure computers, servers, and critical electronics with Electronic Equipment insurance in Kenya for business continuity.',
    keywords: 'electronic equipment insurance Kenya, IT equipment cover',
  },
  '/machinery-breakdown': {
    title: 'Machinery Breakdown Insurance',
    description:
      'Reduce downtime costs with Machinery Breakdown insurance in Kenya covering sudden mechanical or electrical failure.',
    keywords: 'machinery breakdown insurance Kenya, equipment failure cover',
  },
  '/golfers-insurance': {
    title: 'Golfers Insurance Kenya',
    description:
      'Get golfers insurance in Kenya for personal liability, accidental damage, and sports-related risks on and off the course.',
    keywords: 'golfers insurance Kenya, sports liability insurance Kenya',
  },
  '/consequential-loss': {
    title: 'Consequential Loss Insurance Kenya',
    description:
      'Protect revenue after insured events with Consequential Loss insurance in Kenya to support business income continuity.',
    keywords: 'consequential loss insurance Kenya, business interruption cover',
  },
  '/fire-and-perils': {
    title: 'Fire and Perils Insurance Kenya',
    description:
      'Cover property against fire and named perils in Kenya with dependable insurance for buildings, stock, and contents.',
    keywords: 'fire and perils insurance Kenya, property insurance Kenya',
  },
  '/industrial': {
    title: 'Industrial All Risks Insurance',
    description:
      'Protect industrial operations with all-risks insurance in Kenya covering property damage and accidental loss exposures.',
    keywords: 'industrial all risks Kenya, industrial property insurance',
  },
  '/carriers': {
    title: 'Carriers Liability Insurance Kenya',
    description:
      'Protect transport operators with Carriers Liability insurance in Kenya for goods in custody and transit-related liabilities.',
    keywords: 'carriers liability insurance Kenya, transporter insurance',
  },
  '/professional-indemnity': {
    title: 'Professional Indemnity Insurance',
    description:
      'Protect professionals in Kenya against claims of negligence, errors, and omissions with specialist indemnity insurance.',
    keywords: 'professional indemnity insurance Kenya, E&O insurance Kenya',
  },
  '/public-liability': {
    title: 'Public Liability Insurance Kenya',
    description:
      'Protect your business from third-party injury and property damage claims with Public Liability insurance in Kenya.',
    keywords: 'public liability insurance Kenya, business liability cover',
  },
  '/work-injury': {
    title: 'Work Injury Benefits Insurance Kenya',
    description:
      'Comply with WIBA requirements and protect employees with Work Injury insurance cover for workplace accidents in Kenya.',
    keywords: 'work injury insurance Kenya, WIBA cover Kenya, employer liability',
  },
  '/goods-in-transit': {
    title: 'Goods in Transit Insurance Kenya',
    description:
      'Protect cargo and stock in movement with Goods in Transit insurance in Kenya for theft, damage, and accident risks.',
    keywords: 'goods in transit insurance Kenya, cargo transit cover',
  },
  '/marine-hull': {
    title: 'Marine Hull Insurance Kenya',
    description:
      'Cover vessel damage and maritime risks with Marine Hull insurance in Kenya for commercial and private operators.',
    keywords: 'marine hull insurance Kenya, vessel insurance Kenya',
  },
  '/marine-cargo': {
    title: 'Marine Cargo Insurance Kenya',
    description:
      'Protect imports and exports with Marine Cargo insurance in Kenya against loss or damage during local and global transit.',
    keywords: 'marine cargo insurance Kenya, import export insurance',
  },
  '/institutional-fleet': {
    title: 'Institutional Fleet Insurance Kenya',
    description:
      'Insure multiple vehicles under one policy with Institutional Fleet insurance in Kenya for better control and savings.',
    keywords: 'fleet insurance Kenya, institutional motor insurance',
  },
  '/chauffeur-driven-psv': {
    title: 'Chauffeur Driven PSV Insurance',
    description:
      'Cover chauffeur-driven PSV vehicles in Kenya with motor insurance tailored for passenger transport and liability exposure.',
    keywords: 'PSV insurance Kenya, chauffeur driven cover, passenger vehicle insurance',
  },
  '/general-cartage': {
    title: 'General Cartage Insurance Kenya',
    description:
      'Protect haulage and delivery operations with General Cartage insurance in Kenya for vehicle and cargo risk exposures.',
    keywords: 'general cartage insurance Kenya, haulage insurance Kenya',
  },
  '/motor-vehicle': {
    title: 'Private Motor Insurance Kenya',
    description:
      'Get comprehensive and third-party private motor insurance in Kenya with responsive claims support and expert guidance.',
    keywords: 'private motor insurance Kenya, car insurance Kenya',
  },
  '/motor-cycle': {
    title: 'Motor Cycle Insurance Kenya',
    description:
      'Protect your bike with motor cycle insurance in Kenya including third-party and comprehensive cover options.',
    keywords: 'motor cycle insurance Kenya, motorcycle cover Kenya',
  },
  '/burglary': {
    title: 'Burglary Insurance Kenya',
    description:
      'Protect business and home property against theft and break-ins with burglary insurance cover tailored for Kenya.',
    keywords: 'burglary insurance Kenya, theft insurance Kenya',
  },
  '/get-a-quote': {
    title: 'Get Insurance Quote | Monarch Kenya',
    description:
      'Request an insurance quote from Monarch Insurance Kenya for personal and business covers with fast expert follow-up.',
    keywords: 'insurance quote Kenya, get insurance quote online Kenya',
  },
  '/forms': {
    title: 'Insurance Forms | Monarch Kenya',
    description:
      'Download and access Monarch Insurance forms for policy applications, claims processing, and customer service requests.',
    keywords: 'insurance forms Kenya, claim forms Kenya, policy documents',
  },
  '/report-claim': {
    title: 'Report Insurance Claim | Monarch Kenya',
    description:
      'Report your insurance claim quickly with Monarch Insurance Kenya and get guided support for faster resolution.',
    keywords: 'report insurance claim Kenya, claim support Monarch Insurance',
  },
  '/service-providers': {
    title: 'Service Providers | Monarch Kenya',
    description:
      'Find approved service providers and roadside assistance partners in Kenya through Monarch Insurance service networks.',
    keywords: 'insurance service providers Kenya, roadside assistance Kenya',
  },
  '/careers': {
    title: 'Insurance Careers | Monarch Kenya',
    description:
      'Explore insurance career opportunities at Monarch Insurance Kenya and join a team focused on growth and service excellence.',
    keywords: 'insurance jobs Kenya, Monarch careers, underwriting jobs Kenya',
  },
}

const withSEO = (path, element) => (
  <>
    <SEO {...(seoByPath[path] || {})} />
    <main>{element}</main>
  </>
)

function App() {
  return (
    <ToastProvider>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={withSEO('/', <Home />)} />
        <Route path="/contact" element={withSEO('/contact', <ContactPage />)} />
        <Route path="/about" element={withSEO('/about', <AboutPage />)} />
        <Route path="/branches" element={withSEO('/branches', <BranchesPage />)} />
        <Route path="/faqs" element={withSEO('/faqs', <FAQsPage />)} />
        <Route path="/team" element={withSEO('/team', <TeamPage />)} />
        <Route path="/group-life-insurance" element={withSEO('/group-life-insurance', <GroupLifeInsurancePage />)} />
        <Route path="/group-retirement-benefit-schemes" element={withSEO('/group-retirement-benefit-schemes', <GroupRetirementBenefitSchemesPage />)} />
        <Route path="/group-credit-life" element={withSEO('/group-credit-life', <GroupCreditLifeInsurancePage />)} />
        <Route path="/group-life" element={withSEO('/group-life', <GroupLifePage />)} />
        <Route path="/group-personal-accident" element={withSEO('/group-personal-accident', <GroupPersonalAccidentPage />)} />
        <Route path="/personal-accident" element={<Navigate to="/group-personal-accident" replace />} />
        <Route path="/customs" element={withSEO('/customs', <CustomsPage />)} />
        <Route path="/immigration-security" element={withSEO('/immigration-security', <ImmigrationSecurityPage />)} />
        <Route path="/performance" element={withSEO('/performance', <PerformancePage />)} />
        <Route path="/surety-undertaking" element={withSEO('/surety-undertaking', <SuretyUndertakingPage />)} />
        <Route path="/tender" element={withSEO('/tender', <TenderPage />)} />
        <Route path="/comesa-yellow-card" element={withSEO('/comesa-yellow-card', <ComesaYellowCardPage />)} />
        <Route path="/domestic-package" element={withSEO('/domestic-package', <DomesticPackagePage />)} />
        <Route path="/contractors-all-risks" element={withSEO('/contractors-all-risks', <ContractorsAllRisksPage />)} />
        <Route path="/contractors-plant-machinery" element={withSEO('/contractors-plant-machinery', <ContractorsPlantMachineryPage />)} />
        <Route path="/electronic-equipment" element={withSEO('/electronic-equipment', <ElectronicEquipmentPage />)} />
        <Route path="/machinery-breakdown" element={withSEO('/machinery-breakdown', <MachineryBreakdownPage />)} />
        <Route path="/golfers-insurance" element={withSEO('/golfers-insurance', <GolfersInsurancePage />)} />
        <Route path="/consequential-loss" element={withSEO('/consequential-loss', <ConsequentialLossPage />)} />
        <Route path="/fire-and-perils" element={withSEO('/fire-and-perils', <FireAndPerilsPage />)} />
        <Route path="/industrial" element={withSEO('/industrial', <IndustrialPage />)} />
        <Route path="/carriers" element={withSEO('/carriers', <CarriersPage />)} />
        <Route path="/professional-indemnity" element={withSEO('/professional-indemnity', <ProfessionalIndemnityPage />)} />
        <Route path="/public-liability" element={withSEO('/public-liability', <PublicLiabilityPage />)} />
        <Route path="/work-injury" element={withSEO('/work-injury', <WorkInjuryPage />)} />
        <Route path="/goods-in-transit" element={withSEO('/goods-in-transit', <GoodsInTransitPage />)} />
        <Route path="/marine-hull" element={withSEO('/marine-hull', <MarineHullPage />)} />
        <Route path="/marine-cargo" element={withSEO('/marine-cargo', <MarineCargoPage />)} />
        <Route path="/institutional-fleet" element={withSEO('/institutional-fleet', <InstitutionalFleetPage />)} />
        <Route path="/chauffeur-driven-psv" element={withSEO('/chauffeur-driven-psv', <ChauffeurDrivenPSVPage />)} />
        <Route path="/general-cartage" element={withSEO('/general-cartage', <GeneralCartagePage />)} />
        <Route path="/motor-vehicle" element={withSEO('/motor-vehicle', <MotorVehiclePage />)} />
        <Route path="/motor-cycle" element={withSEO('/motor-cycle', <MotorCyclePage />)} />
        <Route path="/burglary" element={withSEO('/burglary', <BurglaryPage />)} />
        <Route path="/get-a-quote" element={withSEO('/get-a-quote', <GetAQuotePage />)} />
        <Route path="/forms" element={withSEO('/forms', <FormsPage />)} />
        <Route path="/report-claim" element={withSEO('/report-claim', <ReportClaimPage />)} />
        <Route path="/service-providers" element={withSEO('/service-providers', <ServiceProvidersPage />)} />
        <Route path="/careers" element={withSEO('/careers', <CareersPage />)} />
        <Route
          path="*"
          element={
            <>
              <SEO
                title="Page Not Found | Monarch Insurance Kenya"
                description="The page you requested could not be found. Explore Monarch Insurance products, claims, and support resources."
                noindex
              />
              <main>
                <NotFoundPage />
              </main>
            </>
          }
        />
      </Routes>
      <FloatingChat />
    </Router>
    </ToastProvider>
  )
}

export default App
