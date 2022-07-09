import { StreamLanguage } from '@codemirror/language'
import { r } from '@codemirror/legacy-modes/mode/r'
import code from './r.r?raw'

export default {
  language: () => StreamLanguage.define(r),
  code
}
