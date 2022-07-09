import { StreamLanguage } from '@codemirror/language'
import { vbScript } from '@codemirror/legacy-modes/mode/vbscript'
import code from './vbscript.vbs?raw'

export default {
  language: () => StreamLanguage.define(vbScript),
  code
}
