import { StreamLanguage } from '@codemirror/language'
import { tcl } from '@codemirror/legacy-modes/mode/tcl'
import code from './tcl.tcl?raw'

export default {
  language: () => StreamLanguage.define(tcl),
  code
}
