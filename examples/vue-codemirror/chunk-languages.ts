import { javascript } from '@codemirror/lang-javascript'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { json } from '@codemirror/lang-json'
import { python } from '@codemirror/lang-python'
import { markdown } from '@codemirror/lang-markdown'
import { xml } from '@codemirror/lang-xml'
import { sql, MySQL, PostgreSQL } from '@codemirror/lang-sql'
import { java } from '@codemirror/lang-java'
import { rust } from '@codemirror/lang-rust'
import { cpp } from '@codemirror/lang-cpp'
import { lezer } from '@codemirror/lang-lezer'
import { php } from '@codemirror/lang-php'

export default {
  javascript,
  jsx: () => javascript({ jsx: true }),
  typescript: () => javascript({ typescript: true }),
  tsx: () => javascript({ jsx: true, typescript: true }),
  json,
  html,
  css,
  python,
  markdown,
  xml,
  sql,
  mysql: () => sql({ dialect: MySQL }),
  pgsql: () => sql({ dialect: PostgreSQL }),
  java,
  rust,
  cpp,
  lezer,
  php
} as Record<string, any>
