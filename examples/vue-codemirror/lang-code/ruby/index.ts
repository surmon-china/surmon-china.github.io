import { StreamLanguage } from '@codemirror/language'
import { ruby } from '@codemirror/legacy-modes/mode/ruby'
import code from './ruby.rb?raw'

export default {
  language: () => StreamLanguage.define(ruby),
  code
}
