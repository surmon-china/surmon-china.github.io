import { StreamLanguage } from '@codemirror/language'
import { pascal } from '@codemirror/legacy-modes/mode/pascal'
import code from './pascal.pas?raw'

export default {
  language: () => StreamLanguage.define(pascal),
  code
}
