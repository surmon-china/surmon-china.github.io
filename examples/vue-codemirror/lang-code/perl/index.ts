import { StreamLanguage } from '@codemirror/language'
import { perl } from '@codemirror/legacy-modes/mode/perl'
import code from './perl.pl?raw'

export default {
  language: () => StreamLanguage.define(perl),
  code
}
