import { StreamLanguage } from '@codemirror/language'
import { powerShell } from '@codemirror/legacy-modes/mode/powershell'
import code from './powershell.ps1?raw'

export default {
  language: () => StreamLanguage.define(powerShell),
  code
}
