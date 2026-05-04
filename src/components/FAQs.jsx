import React, { useState, useRef, useEffect } from 'react'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [visibleItems, setVisibleItems] = useState([])
  const faqRefs = useRef([])

  const faqs = [
    {
      id: 1,
      question: 'What is General Insurance?',
      answer: 'General Insurance is non-life insurance: it protects things like your vehicle, home, business stock, or liability—not your life. Motor, fire, marine, and theft cover are common examples; the policy wording sets what is insured and what is excluded.'
    },
    {
      id: 2,
      question: 'Can I buy General Insurance online? And is it safe to do so?',
      answer: 'Yes. Use our official Monarch portal only; applications go through the same underwriting principles as other channels. You can review wording, declare risks accurately, and complete your application online.',
      link: 'https://agent.monarchinsurance.co.ke/',
      linkLabel: 'Open the online portal'
    },
    {
      id: 3,
      question: 'What are the eligibility criteria for purchasing General Insurance?',
      answer: 'Eligibility depends on the product: you need a valid insurable interest (a real financial stake in what you insure), truthful answers on the proposal form, and any documents the product requires (e.g. ID, valuation, or registration). Some risks are declined or need special terms; the portal or our team will confirm what applies before you pay.'
    },
    {
      id: 4,
      question: 'Can I cancel my life insurance at any time?',
      answer: 'Yes—you can cancel your life policy at any time. If you cancel within 30 days of whichever is later—when we confirm your cover has started or when you receive your policy documents—that falls within the cooling-off period and we refund premiums you have already paid. If you cancel after that 30-day period, your cover can end as normal, but we do not refund premiums you have already paid.'
    },
    {
      id: 5,
      question: 'Can I cancel my policy if I am not satisfied with its terms and conditions?',
      answer: 'Life insurance: cancel within 30 days of receiving your policy document and you receive a full premium refund less withholding tax. General insurance: if you cancel, unused premium is usually refunded on a pro rata basis, as set out in your policy. Always read the schedule and policy wording before you accept cover.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = faqRefs.current.indexOf(entry.target)
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    faqRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      faqRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="faqs" className="faqs-section">
      <div className="container">
        <div className="faqs-header">
          <h1 className="faqs-title">Frequently Asked Questions</h1>
          <div className="faqs-title-underline"></div>
          <p className="faqs-subtitle">
            Find answers to common questions about our insurance services
          </p>
        </div>

        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              ref={(el) => (faqRefs.current[index] = el)}
              className={`faq-item ${openIndex === index ? 'open' : ''} ${visibleItems.includes(index) ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="faq-question-text">{faq.question}</h3>
                <div className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  <p>
                    {faq.answer}{' '}
                    {faq.link && (
                      <a href={faq.link} target="_blank" rel="noopener noreferrer">
                        {faq.linkLabel}
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faqs-footer">
          <p className="faqs-footer-text">
            Still have questions? <a href="/contact" className="faqs-contact-link">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQs
