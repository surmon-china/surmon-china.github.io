import { StreamLanguage } from '@codemirror/language'
import { julia } from '@codemirror/legacy-modes/mode/julia'
import code from './julia.jl?raw'

export default {
  language: () => StreamLanguage.define(julia),
  code
}
