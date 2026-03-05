import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import FloatingChat from './components/FloatingChat'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import BranchesPage from './pages/BranchesPage'
import FAQsPage from './pages/FAQsPage'
import TeamPage from './pages/TeamPage'
import EducationPage from './pages/EducationPage'
import GroupLifeInsurancePage from './pages/GroupLifeInsurancePage'
import GroupPersonalAccidentPage from './pages/GroupPersonalAccidentPage'
import CustomsPage from './pages/CustomsPage'
import ImmigrationSecurityPage from './pages/ImmigrationSecurityPage'
import PerformancePage from './pages/PerformancePage'
import SuretyUndertakingPage from './pages/SuretyUndertakingPage'
import TenderPage from './pages/TenderPage'
import DomesticPackagePage from './pages/DomesticPackagePage'
import ContractorsAllRisksPage from './pages/ContractorsAllRisksPage'
import ContractorsPlantMachineryPage from './pages/ContractorsPlantMachineryPage'
import ElectronicEquipmentPage from './pages/ElectronicEquipmentPage'
import MachineryBreakdownPage from './pages/MachineryBreakdownPage'
import ConsequentialLossPage from './pages/ConsequentialLossPage'
import FireAndPerilsPage from './pages/FireAndPerilsPage'
import IndustrialPage from './pages/IndustrialPage'
import CarriersPage from './pages/CarriersPage'
import ProfessionalIndemnityPage from './pages/ProfessionalIndemnityPage'
import PublicLiabilityPage from './pages/PublicLiabilityPage'
import WorkInjuryPage from './pages/WorkInjuryPage'
import GoodsInTransitPage from './pages/GoodsInTransitPage'
import MarineHullPage from './pages/MarineHullPage'
import AgriculturalForestryPage from './pages/AgriculturalForestryPage'
import DrivingSchoolsPage from './pages/DrivingSchoolsPage'
import GeneralCartagePage from './pages/GeneralCartagePage'
import MotorVehiclePage from './pages/MotorVehiclePage'
import MotorCyclePage from './pages/MotorCyclePage'
import BurglaryPage from './pages/BurglaryPage'
import GetAQuotePage from './pages/GetAQuotePage'
import FormsPage from './pages/FormsPage'
import ReportClaimPage from './pages/ReportClaimPage'
import ServiceProvidersPage from './pages/ServiceProvidersPage'
import CareersPage from './pages/CareersPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/group-life-insurance" element={<GroupLifeInsurancePage />} />
        <Route path="/group-personal-accident" element={<GroupPersonalAccidentPage />} />
        <Route path="/personal-accident" element={<GroupPersonalAccidentPage />} />
        <Route path="/customs" element={<CustomsPage />} />
        <Route path="/immigration-security" element={<ImmigrationSecurityPage />} />
        <Route path="/performance" element={<PerformancePage />} />
        <Route path="/surety-undertaking" element={<SuretyUndertakingPage />} />
        <Route path="/tender" element={<TenderPage />} />
        <Route path="/domestic-package" element={<DomesticPackagePage />} />
        <Route path="/contractors-all-risks" element={<ContractorsAllRisksPage />} />
        <Route path="/contractors-plant-machinery" element={<ContractorsPlantMachineryPage />} />
        <Route path="/electronic-equipment" element={<ElectronicEquipmentPage />} />
        <Route path="/machinery-breakdown" element={<MachineryBreakdownPage />} />
        <Route path="/consequential-loss" element={<ConsequentialLossPage />} />
        <Route path="/fire-and-perils" element={<FireAndPerilsPage />} />
        <Route path="/industrial" element={<IndustrialPage />} />
        <Route path="/carriers" element={<CarriersPage />} />
        <Route path="/professional-indemnity" element={<ProfessionalIndemnityPage />} />
        <Route path="/public-liability" element={<PublicLiabilityPage />} />
        <Route path="/work-injury" element={<WorkInjuryPage />} />
        <Route path="/goods-in-transit" element={<GoodsInTransitPage />} />
        <Route path="/marine-hull" element={<MarineHullPage />} />
        <Route path="/agricultural-forestry" element={<AgriculturalForestryPage />} />
        <Route path="/driving-schools" element={<DrivingSchoolsPage />} />
        <Route path="/general-cartage" element={<GeneralCartagePage />} />
        <Route path="/motor-vehicle" element={<MotorVehiclePage />} />
        <Route path="/motor-cycle" element={<MotorCyclePage />} />
        <Route path="/burglary" element={<BurglaryPage />} />
        <Route path="/get-a-quote" element={<GetAQuotePage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/report-claim" element={<ReportClaimPage />} />
        <Route path="/service-providers" element={<ServiceProvidersPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      <FloatingChat />
    </Router>
  )
}

export default App
