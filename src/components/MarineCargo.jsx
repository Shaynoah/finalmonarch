import React from 'react'
import marineCargoImage from '../assets/marinecargo.png'

const MarineCargo = () => {
  return (
    <div className="marine-cargo-page">
      {/* Hero Section */}
      <section className="marine-cargo-hero">
        <div className="marine-cargo-hero-content">
          <div className="marine-cargo-badge">
            <span>Marine Cargo</span>
          </div>
          <h1 className="marine-cargo-title">
            Protecting Your Cargo Across Seas and Skies
          </h1>
          <p className="marine-cargo-subtitle">
            Comprehensive cargo insurance for importers, exporters, and freight forwarders
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="marine-cargo-content-section">
        <div className="container">
          <div className="marine-cargo-info-card">
            <div className="marine-cargo-info-content">
              <p className="marine-cargo-info-description">
                This cover protects the value of goods imported or exported by sea or air against a wide range of risks including damage, loss, theft, or delay during transit. It is ideal for importers, exporters, and freight forwarders. Marine Cargo Insurance can be structured on a single shipment or annual basis and extended to include warehouse-to-warehouse protection.
              </p>
            </div>
          </div>

          {/* Marine Image Section */}
          <div className="insurance-form-wrapper" style={{ marginTop: '3rem' }}>
            <div className="insurance-form-image">
              <img src={marineCargoImage} alt="Marine Cargo Insurance" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--black)', marginBottom: '1rem' }}>
                  Secure Your Cargo Shipments
                </h3>
                <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                  Our Marine Cargo Insurance provides comprehensive protection for your goods during transit by sea or air. Whether you're an importer, exporter, or freight forwarder, our flexible coverage options can be tailored to single shipments or annual policies, with optional warehouse-to-warehouse protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarineCargo
