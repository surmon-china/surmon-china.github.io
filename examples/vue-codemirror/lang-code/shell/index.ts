import { StreamLanguage } from '@codemirror/language'
import { shell } from '@codemirror/legacy-modes/mode/shell'
import code from './shell.sh?raw'

export default {
  language: () => StreamLanguage.define(shell),
  code
}
