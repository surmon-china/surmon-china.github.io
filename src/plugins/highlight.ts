import type { LanguageFn } from 'highlight.js'
import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import go from 'highlight.js/lib/languages/go'
import css from 'highlight.js/lib/languages/css'
import sql from 'highlight.js/lib/languages/sql'
import php from 'highlight.js/lib/languages/php'
import xml from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import less from 'highlight.js/lib/languages/less'
import scss from 'highlight.js/lib/languages/scss'
import shell from 'highlight.js/lib/languages/shell'
import stylus from 'highlight.js/lib/languages/stylus'
import python from 'highlight.js/lib/languages/python'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'

const languages: Record<string, LanguageFn> = {
  go,
  css,
  sql,
  php,
  xml,
  json,
  bash,
  less,
  scss,
  shell,
  stylus,
  python,
  javascript,
  typescript
}

Object.keys(languages).forEach((name) => hljs.registerLanguage(name, languages[name]))

export default hljsVuePlugin
