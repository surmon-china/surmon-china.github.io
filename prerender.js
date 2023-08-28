import fs from 'fs'
import path from 'path'
import { build } from 'vite'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (_path) => path.resolve(__dirname, _path)
const projectsJSON = JSON.parse(fs.readFileSync(toAbsolute('projects.json'), 'utf-8'))

const INDEX_ROUTE = '/'
const PAGE_ROUTES = Object.values(projectsJSON).map((project) => `/${project.route}`)
const ROUTES = [INDEX_ROUTE, ...PAGE_ROUTES]

const renderRedirectionHTML = (url) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="refresh" content="0; url='${url}'" />
    </head>
  </html>
`

try {
  // empty dist dir
  fs.rmSync(toAbsolute('dist'), { recursive: true, force: true })

  console.log('1. Client render bundling...\n')
  await build({ build: { emptyOutDir: true } })
  console.info('\nClient bundle done.\n')

  console.log('2. Server render bundling...\n')
  await build({
    build: {
      ssr: true,
      minify: false,
      manifest: false,
      emptyOutDir: false,
      ssrEmitAssets: false,
      copyPublicDir: false,
      outDir: toAbsolute('dist/ssr'),
      rollupOptions: {
        input: toAbsolute('src/ssr.ts')
      }
    }
  })
  console.info('\nServer render bundle done.\n')

  // MARK: after CSR bundled & before pre-render routes
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
  const { render } = await import('./dist/ssr/ssr.js')
  let appStoreCache = null

  // pre-render each route...
  for (const url of ROUTES) {
    const { appHTML, heads, storeCache } = await render(url, appStoreCache)
    // cache the first render store data
    appStoreCache = storeCache
    const html = template
      .replace(/<title>[\s\S]*<\/title>/, '')
      .replace(`<html`, () => `<html ${heads.htmlAttrs} `)
      .replace(`<head>`, () => `<head>\n${heads.headTags}`)
      .replace(`<body>`, () => `<body ${heads.bodyAttrs}>`)
      .replace(`<!--app-html-->`, () => appHTML)
      .replace(`</body>`, () => `\n${heads.bodyTags}\n</body>`)

    // ✅ https://github.surmon.me/xxx
    // ❌ https://github.surmon.me/xxx/
    // 🔗 https://ahrefs.com/blog/trailing-slash/
    const fileName = `dist${url === INDEX_ROUTE ? '/index' : url}`
    fs.writeFileSync(toAbsolute(`${fileName}.html`), html)
    if (url !== INDEX_ROUTE) {
      // redirect `x/` to 'x'
      fs.mkdirSync(toAbsolute(`${fileName}/`), { recursive: true })
      fs.writeFileSync(toAbsolute(`${fileName}/index.html`), renderRedirectionHTML(url))
    }
    console.log('pre-rendered:', url)
  }

  fs.rmSync(toAbsolute('dist/ssr'), { recursive: true, force: true })
  console.info(`\n${ROUTES.length} pages generate done.`)
  process.exit(0)
} catch (error) {
  console.error('Generate ERROR!', error)
  process.exit(1)
}
