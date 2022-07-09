import { javascript } from '@codemirror/lang-javascript'
import code from './tsx.tsx?raw'

export default {
  language: () => javascript({ typescript: true, jsx: true }),
  code
}
