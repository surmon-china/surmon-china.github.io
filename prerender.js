const fs = require('fs')
const path = require('path')
const vite = require('vite')
const projects = require('./projects.json')
const toAbsolute = (_path) => path.resolve(__dirname, _path)

const INDEX_ROUTE = '/'
const PAGE_ROUTES = Object.values(projects).map((project) => `/${project.route}`)
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

;(async () => {
  try {
    // empty dist dir
    fs.rmSync(toAbsolute('dist'), { recursive: true, force: true })

    console.log('Bundle CSR...\n')
    await vite.build({ build: { emptyOutDir: true } })

    console.log('Bundle SSR...\n')
    await vite.build({
      ssr: { noExternal: ['swiper'], format: 'cjs' },
      build: {
        ssr: true,
        minify: true,
        manifest: false,
        emptyOutDir: false,
        outDir: toAbsolute('dist/ssr'),
        rollupOptions: {
          input: toAbsolute('src/ssr.ts')
        }
      }
    })

    // MARK: after CSR bundled & before pre-render routes
    const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
    const { render } = require('./dist/ssr/ssr.js')

    // pre-render each route...
    for (const url of ROUTES) {
      const { appHTML, metas } = await render(url)
      const html = template
        .replace(/<title>[\s\S]*<\/title>/, '')
        .replace(`<html`, () => `<html ${metas.htmlAttrs} `)
        .replace(`<head>`, () => `<head>\n${metas.headTags}`)
        .replace(`<body>`, () => `<body ${metas.bodyAttrs}>`)
        .replace(`<!--app-html-->`, () => appHTML)

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
    console.info(`${ROUTES.length} pages generate done.`)
    process.exit(0)
  } catch (error) {
    console.error('Generate ERROR!', error)
    process.exit(1)
  }
})()
