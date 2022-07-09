import { javascript } from '@codemirror/lang-javascript'
import code from './typescript.ts?raw'

export default {
  language: () => javascript({ typescript: true }),
  code
}
