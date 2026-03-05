import React from 'react'
import bondApplicationForm from '../forms/BOND-APPLICATION-FORM.pdf'
import burglaryForm from '../forms/Burglary-Proposal-Form.pdf'
import carriersForm from '../forms/Carriers-Legal-Liability-Proposal-Form-_Monarch.pdf'
import contractorsAllRisksForm from '../forms/CONTRACTORS-ALL-RISKS-INSURANCE-PROPOSAL-FORM.pdf'
import directorsOfficersForm from '../forms/DIRECTORS-OFFICERS-LIABILITY-INSURANCE-PROPOSAL-FORM.pdf'
import domesticPackageForm from '../forms/Domestic-Package-Proposal-Form.pdf'
import electronicEquipmentForm from '../forms/Electronic-Equipment-Proposal-Form.pdf'
import fireAndPerilsForm from '../forms/Fire-and-Perils-Proposal-form.pdf'
import groupAccidentForm from '../forms/Group-Accident-Proposal-Form.pdf'
import industrialAllRisksForm from '../forms/INDUSTRIAL-ALL-RISKS-PROPOSAL-FORM.pdf'
import machineryBreakdownForm from '../forms/MACHINERY-BREAKDOWN-PROPOSAL-FORM-1.pdf'
import personalAccidentForm from '../forms/Personal-Accident-Proposal-Form.pdf'
import plateGlassForm from '../forms/PLATE-GLASS-INSURANCE-PROPOSAL-FORM-1.pdf'
import professionalIndemnityForm from '../forms/PROFESSIONAL-INDEMNITY-PROPOSAL-FORM-.pdf'
import publicLiabilityForm from '../forms/Public-Liability-Proposal-Form-1.pdf'
import wibaForm from '../forms/WIBA-PROPOSAL-FORM.pdf'

const Forms = () => {
  const forms = [
    {
      id: 1,
      title: 'Bond Application Form',
      description: 'Application form for Bond insurance coverage.',
      file: bondApplicationForm,
      category: 'General Insurance'
    },
    {
      id: 2,
      title: 'Burglary Proposal Form',
      description: 'Application form for Burglary insurance coverage.',
      file: burglaryForm,
      category: 'General Insurance'
    },
    {
      id: 3,
      title: 'Carriers Legal Liability Proposal Form',
      description: 'Application form for Carriers Legal Liability insurance coverage.',
      file: carriersForm,
      category: 'General Insurance'
    },
    {
      id: 4,
      title: 'Contractors All Risks Insurance Proposal Form',
      description: 'Application form for Contractors All Risks insurance coverage.',
      file: contractorsAllRisksForm,
      category: 'General Insurance'
    },
    {
      id: 5,
      title: 'Directors & Officers Liability Insurance Proposal Form',
      description: 'Application form for Directors & Officers Liability insurance coverage.',
      file: directorsOfficersForm,
      category: 'General Insurance'
    },
    {
      id: 6,
      title: 'Domestic Package Proposal Form',
      description: 'Application form for Domestic Package insurance coverage.',
      file: domesticPackageForm,
      category: 'General Insurance'
    },
    {
      id: 7,
      title: 'Electronic Equipment Proposal Form',
      description: 'Application form for Electronic Equipment insurance coverage.',
      file: electronicEquipmentForm,
      category: 'General Insurance'
    },
    {
      id: 8,
      title: 'Fire and Perils Proposal Form',
      description: 'Application form for Fire and Perils insurance coverage.',
      file: fireAndPerilsForm,
      category: 'General Insurance'
    },
    {
      id: 9,
      title: 'Group Accident Proposal Form',
      description: 'Application form for Group Accident insurance coverage.',
      file: groupAccidentForm,
      category: 'Life Insurance'
    },
    {
      id: 10,
      title: 'Industrial All Risks Proposal Form',
      description: 'Application form for Industrial All Risks insurance coverage.',
      file: industrialAllRisksForm,
      category: 'General Insurance'
    },
    {
      id: 11,
      title: 'Machinery Breakdown Proposal Form',
      description: 'Application form for Machinery Breakdown insurance coverage.',
      file: machineryBreakdownForm,
      category: 'General Insurance'
    },
    {
      id: 12,
      title: 'Personal Accident Proposal Form',
      description: 'Application form for Personal Accident insurance coverage.',
      file: personalAccidentForm,
      category: 'Life Insurance'
    },
    {
      id: 13,
      title: 'Plate Glass Insurance Proposal Form',
      description: 'Application form for Plate Glass insurance coverage.',
      file: plateGlassForm,
      category: 'General Insurance'
    },
    {
      id: 14,
      title: 'Professional Indemnity Proposal Form',
      description: 'Application form for Professional Indemnity insurance coverage.',
      file: professionalIndemnityForm,
      category: 'General Insurance'
    },
    {
      id: 15,
      title: 'Public Liability Proposal Form',
      description: 'Application form for Public Liability insurance coverage.',
      file: publicLiabilityForm,
      category: 'General Insurance'
    },
    {
      id: 16,
      title: 'WIBA Proposal Form',
      description: 'Application form for Work Injury Benefits Act (WIBA) insurance coverage.',
      file: wibaForm,
      category: 'General Insurance'
    }
  ]

  return (
    <div className="forms-page">
      {/* Hero Section */}
      <section className="forms-hero">
        <div className="forms-hero-content">
          <div className="forms-badge">
            <span>Forms</span>
          </div>
          <h1 className="forms-title">
            Insurance Proposal Forms
          </h1>
          <p className="forms-subtitle">
            Download and fill out the appropriate proposal form for your insurance needs
          </p>
        </div>
      </section>

      {/* Forms Grid Section */}
      <section className="forms-content-section">
        <div className="container">
          <div className="forms-grid">
            {forms.map((form) => (
              <div 
                key={form.id} 
                className="form-card"
                onClick={() => window.open(form.file, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <div className="form-card-header">
                  <div className="form-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <span className="form-category">{form.category}</span>
                </div>
                <div className="form-card-content">
                  <h3 
                    className="form-card-title"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(form.file, '_blank')
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {form.title}
                  </h3>
                  <p className="form-card-description">{form.description}</p>
                </div>
                <div className="form-card-footer">
                  <a 
                    href={form.file} 
                    download 
                    className="form-download-button"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    <span>Download Form</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Forms
