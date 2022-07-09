import { StreamLanguage } from '@codemirror/language'
import { nginx } from '@codemirror/legacy-modes/mode/nginx'
import code from './nginx.conf?raw'

export default {
  language: () => StreamLanguage.define(nginx),
  code
}
