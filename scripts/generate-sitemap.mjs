import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')
const appPath = path.join(repoRoot, 'src', 'App.jsx')
const sitemapPath = path.join(repoRoot, 'public', 'sitemap.xml')

const SITE_URL = 'https://www.monarchinsurance.co.ke'
const DEFAULT_CHANGEFREQ = 'monthly'
const DEFAULT_PRIORITY = '0.7'
const HIGH_PRIORITY_PATHS = new Set(['/', '/contact', '/about', '/branches', '/faqs', '/get-a-quote', '/forms', '/report-claim'])

const appSource = fs.readFileSync(appPath, 'utf8')

const indexableRouteRegex = /<Route\s+path="([^"]+)"\s+element=\{withSEO\('([^']+)'/g
const routes = []
let routeMatch

while ((routeMatch = indexableRouteRegex.exec(appSource)) !== null) {
  const declaredPath = routeMatch[1].trim()
  const seoPath = routeMatch[2].trim()
  if (declaredPath !== seoPath) {
    continue
  }
  if (declaredPath === '*' || !declaredPath.startsWith('/')) {
    continue
  }
  routes.push(declaredPath)
}

const uniqueRoutes = [...new Set(routes)]

const existingMeta = new Map()
if (fs.existsSync(sitemapPath)) {
  const existing = fs.readFileSync(sitemapPath, 'utf8')
  const blockRegex = /<url>\s*<loc>https:\/\/www\.monarchinsurance\.co\.ke([^<]*)<\/loc>[\s\S]*?<changefreq>([^<]+)<\/changefreq>[\s\S]*?<priority>([^<]+)<\/priority>[\s\S]*?<\/url>/g
  let blockMatch
  while ((blockMatch = blockRegex.exec(existing)) !== null) {
    const routePath = blockMatch[1] || '/'
    existingMeta.set(routePath, {
      changefreq: blockMatch[2],
      priority: blockMatch[3],
    })
  }
}

const lastmod = new Date().toISOString().split('T')[0]

const xmlUrls = uniqueRoutes
  .map((routePath) => {
    const previous = existingMeta.get(routePath)
    const changefreq = previous?.changefreq || DEFAULT_CHANGEFREQ
    const priority = previous?.priority || (HIGH_PRIORITY_PATHS.has(routePath) ? '0.8' : DEFAULT_PRIORITY)
    const loc = `${SITE_URL}${routePath === '/' ? '/' : routePath}`

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>
`

fs.writeFileSync(sitemapPath, sitemap)
console.log(`Generated sitemap with ${uniqueRoutes.length} indexable routes.`)
