import { StreamLanguage } from '@codemirror/language'
import { scheme } from '@codemirror/legacy-modes/mode/scheme'
import code from './scheme.scm?raw'

export default {
  language: () => StreamLanguage.define(scheme),
  code
}
