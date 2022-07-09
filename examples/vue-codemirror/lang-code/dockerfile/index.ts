import { StreamLanguage } from '@codemirror/language'
import { dockerFile } from '@codemirror/legacy-modes/mode/dockerfile'
import code from './dockerfile?raw'

export default {
  language: () => StreamLanguage.define(dockerFile),
  code
}
