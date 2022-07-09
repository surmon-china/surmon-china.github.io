import { StreamLanguage } from '@codemirror/language'
import { vb } from '@codemirror/legacy-modes/mode/vb'
import code from './vb.vb?raw'

export default {
  language: () => StreamLanguage.define(vb),
  code
}
