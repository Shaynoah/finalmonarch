import React from 'react'
import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Monarch Insurance Kenya'
const SITE_URL = 'https://www.monarchinsurance.co.ke'
const TWITTER_HANDLE = '@MonarchIns'
const DEFAULT_TITLE = 'Monarch Insurance Kenya | Trusted Cover'
const DEFAULT_DESCRIPTION =
  'Protect your life, health, business, and assets with trusted insurance solutions in Kenya backed by expert support and responsive claims service.'
const DEFAULT_KEYWORDS =
  'insurance Kenya, motor insurance Kenya, business insurance Kenya, life insurance Kenya, Monarch Insurance'
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`
const CANONICAL_HOSTS = new Set(['www.monarchinsurance.co.ke', 'monarchinsurance.co.ke'])

const shouldNoindexForEnvironment = () => {
  const forceNoindex = import.meta.env.VITE_FORCE_NOINDEX === 'true'
  const allowIndexing = import.meta.env.VITE_ALLOW_INDEXING === 'true'
  const siteEnv = (import.meta.env.VITE_SITE_ENV || '').toLowerCase()
  const isProductionBuild = import.meta.env.PROD

  if (forceNoindex) return true
  if (allowIndexing) return false
  if (!isProductionBuild) return true
  if (siteEnv && siteEnv !== 'production') return true

  // In production builds, only index the canonical production domain by default.
  if (typeof window !== 'undefined') {
    return !CANONICAL_HOSTS.has(window.location.hostname)
  }

  return false
}

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  noindex = false,
}) => {
  const environmentNoindex = shouldNoindexForEnvironment()
  const shouldNoindex = noindex || environmentNoindex
  const canonicalUrl =
    typeof window !== 'undefined'
      ? `${SITE_URL}${window.location.pathname}`
      : SITE_URL
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'InsuranceAgency'],
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    telephone: '+254738669931',
    email: 'info@monarchinsurance.co.ke',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chester House 1st Floor, Koinange Street',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    sameAs: [
      'https://www.facebook.com/share/1C4rt2eRH6/',
      'https://x.com/MonarchIns',
      'https://www.linkedin.com/company/the-monarch-insuranc/',
      'https://www.instagram.com/themonarchinsurancecompany',
    ],
  }
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {shouldNoindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || DEFAULT_OG_IMAGE} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || DEFAULT_OG_IMAGE} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
    </Helmet>
  )
}

export default SEO
