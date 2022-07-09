import { StreamLanguage } from '@codemirror/language'
import { swift } from '@codemirror/legacy-modes/mode/swift'
import code from './swift.swift?raw'

export default {
  language: () => StreamLanguage.define(swift),
  code
}
