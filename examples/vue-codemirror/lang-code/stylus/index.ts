import { StreamLanguage } from '@codemirror/language'
import { stylus } from '@codemirror/legacy-modes/mode/stylus'
import code from './stylus.styl?raw'

export default {
  language: () => StreamLanguage.define(stylus),
  code
}
