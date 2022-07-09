import { javascript } from '@codemirror/lang-javascript'
import code from './jsx.jsx?raw'

export default {
  language: () => javascript({ jsx: true }),
  code
}
