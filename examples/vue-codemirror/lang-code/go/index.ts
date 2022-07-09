import { StreamLanguage } from '@codemirror/language'
import { go } from '@codemirror/legacy-modes/mode/go'
import code from './go.go?raw'

export default {
  language: () => StreamLanguage.define(go),
  code
}
