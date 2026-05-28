import React from 'react'

const sectionCardStyle = {
  background: '#ffffff',
  border: '1px solid #dfe7e2',
  borderRadius: '12px',
  padding: '1.1rem 1.2rem',
  marginBottom: '1rem',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
}

const paragraphStyle = {
  margin: '0 0 0.75rem',
  color: '#1f2937',
  lineHeight: '1.75',
  fontSize: '0.98rem',
}

const listStyle = {
  margin: '0.3rem 0 0.75rem 1.2rem',
  color: '#1f2937',
  lineHeight: '1.75',
  fontSize: '0.98rem',
}

const DataPrivacy = () => {
  return (
    <section
      style={{
        padding: '112px 0 48px',
        background: 'linear-gradient(180deg, #f6fbf8 0%, #ffffff 45%)',
      }}
    >
      <div className="container" style={{ maxWidth: '980px' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #11422e 0%, #0f5f43 100%)',
            color: '#ffffff',
            borderRadius: '14px',
            padding: '1.5rem 1.3rem',
            marginBottom: '1rem',
          }}
        >
          <h1 style={{ margin: '0 0 0.35rem', fontSize: '2rem', fontWeight: 800 }}>
            Data Protection &amp; Privacy Policy
          </h1>
          <p style={{ margin: 0, opacity: 0.95, lineHeight: 1.6 }}>
            THE MONARCH INSURANCE COMPANY LIMITED is committed to protecting the privacy and
            security of our customers&apos; personal data.
          </p>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>Introduction</h2>
          <p style={paragraphStyle}>
            This Data Protection Policy outlines how we collect, store, use, and protect
            personal data during the process of selling and advertising our insurance packages.
            In accordance with the Data Protection Act, 2019 (Kenya), the Insurance Act
            (Cap 487), and other relevant Kenyan legislation, we ensure that all personal data
            is processed in compliance with applicable laws and regulations.
          </p>
          <h2 style={{ color: '#11422e' }}>Scope</h2>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            This policy applies to all personal data collected, processed, and stored by
            The Monarch Insurance Company Limited in the course of advertising and selling
            insurance products. It covers all employees, contractors, and third-party vendors
            who have access to customer data through our communication channels.
          </p>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>1. Data Collection</h2>
          <p style={paragraphStyle}>
            We collect personal data only as necessary for the purposes of advertising and
            selling insurance products. The types of personal data we may collect include:
          </p>
          <ul style={listStyle}>
            <li>
              Contact Information: full names, identification card or passport details, phone
              number, email address, physical address, place of residence, citizenship, taxpayer
              identification number, and related details.
            </li>
            <li>
              Demographic Information: sex, age, date of birth, place of birth, marital status.
            </li>
            <li>
              Insurance Needs: information about the type of insurance products the customer is
              interested in.
            </li>
            <li>
              Transactional Data: including but not limited to bank details and information about
              previous purchases or communications with our company, if applicable.
            </li>
          </ul>
          <h3 style={{ color: '#11422e', marginBottom: '0.45rem' }}>Cookies and Usage Data</h3>
          <ul style={listStyle}>
            <li>
              Information stored on your device, including contact lists, call logs, SMS logs,
              contact lists from social media accounts, photos, videos, or other digital content
              (on a need basis as technology evolves and the company adopts more AI and
              machine-learning capabilities).
            </li>
            <li>
              Usage Data, including mobile device type, unique device ID, IP address, operating
              system, browser type, and other diagnostic data.
            </li>
            <li>
              Location Data, if you give permission. You can enable or disable location services
              at any time through your device settings.
            </li>
          </ul>
          <p style={paragraphStyle}>
            We may use your Personal Data to send newsletters, marketing or promotional materials,
            and other information that may be of interest to you. We will never contact people in
            your contact list without your consent. You may opt out of communications using the
            unsubscribe option.
          </p>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            We collect personal data only with the customer&apos;s explicit consent, or where such
            collection is necessary for performance of a contract or compliance with legal
            obligations under the Data Protection Act, 2019.
          </p>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>2. Purpose of Data Collection</h2>
          <p style={paragraphStyle}>We collect personal data for the following purposes:</p>
          <ul style={{ ...listStyle, marginBottom: 0 }}>
            <li>
              Advertising Insurance Packages: to send relevant marketing and promotional
              information about our products and services, unless you opt out.
            </li>
            <li>
              Sales: to facilitate communication regarding policy sales, quotes, policy
              information, and terms and conditions.
            </li>
            <li>
              Customer Support: to respond to queries, provide support, send account/subscription
              notices, expiry/renewal notices, service instructions, and service updates.
            </li>
            <li>
              Analysis: to monitor service usage and improve functionality and quality.
            </li>
            <li>
              Compliance: to meet regulatory obligations, including AML/KYC, fraud prevention,
              security, billing, collections, and contract enforcement.
            </li>
          </ul>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>3. Consent</h2>
          <p style={paragraphStyle}>
            Before collecting any personal data, we obtain explicit consent from the individual.
            By engaging with us through our channels, customers acknowledge and consent to the
            collection, use, and processing of personal data in line with this policy.
          </p>
          <ul style={{ ...listStyle, marginBottom: 0 }}>
            <li>
              Opt-In for Marketing Communications: customers may opt in by replying through our
              channels or explicitly providing written consent.
            </li>
            <li>
              Opt-Out: customers can opt out of receiving further marketing communication at any
              time by unsubscribing or disabling correspondence.
            </li>
          </ul>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>4. Data Storage and Security</h2>
          <p style={paragraphStyle}>
            We are committed to securing personal data collected through our channels and storing
            it in line with industry best practices and data protection regulations.
          </p>
          <ul style={{ ...listStyle, marginBottom: 0 }}>
            <li>
              Data Retention: we retain data only as long as necessary for the purposes in this
              policy and as required by law. Certain records may be retained for up to five (5)
              years under applicable insurance and AML requirements.
            </li>
            <li>
              Encryption and Secure Storage: personal data is protected during transmission and
              storage to reduce unauthorized access risk.
            </li>
            <li>
              Access Control: only authorized personnel and approved service providers with a
              legitimate need are granted access.
            </li>
            <li>
              Transfer of Data: data may be transferred and maintained on systems outside your
              jurisdiction where legal protections may differ. Monarch Insurance takes reasonable
              steps to ensure appropriate controls are in place.
            </li>
            <li>
              Disclosure of Data: we may disclose data for law enforcement, business
              transactions, subsidiaries/affiliates, contractors, service providers, and other
              lawful purposes disclosed to you or consented to by you.
            </li>
            <li>We do not sell personal data to unauthorized third parties for marketing.</li>
            <li>
              Analytics: we may use third-party service providers to monitor and analyze usage of
              our services.
            </li>
          </ul>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>5. Data Subject Rights</h2>
          <p style={paragraphStyle}>
            Customers have the following rights regarding their personal data:
          </p>
          <ul style={{ ...listStyle, marginBottom: '0.75rem' }}>
            <li>Right to Access</li>
            <li>Right to Rectification</li>
            <li>Right to Erasure</li>
            <li>Right to Restrict Processing</li>
            <li>Right to Data Portability</li>
            <li>Right to Object (including direct marketing objections)</li>
          </ul>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            To exercise these rights, contact us at{' '}
            <a href="mailto:info@monarchinsurance.co.ke">info@monarchinsurance.co.ke</a>.
          </p>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>6. Data Protection Impact Assessments</h2>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            We conduct regular Data Protection Impact Assessments (DPIAs) to identify and
            mitigate privacy risks associated with personal data processing for marketing and
            sales.
          </p>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>7. Data Breach Notification</h2>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            In the event of a data breach, The Monarch Insurance Company Limited follows internal
            response procedures, notifies relevant authorities within 72 hours where required, and
            informs affected individuals when their data may be at risk.
          </p>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>8. Training and Awareness</h2>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            Employees involved in handling personal data receive regular data protection and
            privacy training to ensure full compliance with legal and internal obligations.
          </p>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>9. Insurance Legislation Compliance</h2>
          <ul style={{ ...listStyle, marginBottom: 0 }}>
            <li>
              AML/KYC: we collect and verify personal data to comply with AML and KYC obligations
              before issuing policies.
            </li>
            <li>
              Record-Keeping: we maintain policyholder records as required by the Insurance Act,
              Cap 487 (Kenya), and related regulations.
            </li>
          </ul>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>10. Policy Updates</h2>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            This policy is reviewed and updated as necessary to reflect changes in law or business
            operations. Updates are communicated through appropriate customer channels.
          </p>
        </div>

        <div style={sectionCardStyle}>
          <h2 style={{ marginTop: 0, color: '#11422e' }}>11. Contact Information</h2>
          <p style={paragraphStyle}>
            For any questions or concerns about this policy or data handling, contact our Data
            Protection Officer (DPO):
          </p>
          <ul style={{ ...listStyle, marginBottom: '0.7rem' }}>
            <li>
              Email: <a href="mailto:srobia@monarchinsurance.co.ke">srobia@monarchinsurance.co.ke</a>
            </li>
            <li>
              Phone: <a href="tel:0737138760">0737138760</a>
            </li>
          </ul>
          <h3 style={{ color: '#11422e', marginBottom: '0.4rem' }}>Conclusion</h3>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            At Monarch Insurance Company Limited, we are committed to protecting the privacy and
            security of your personal data while providing excellent service in advertising and
            selling insurance products through our channels.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DataPrivacy
