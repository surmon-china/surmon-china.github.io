import { StreamLanguage } from '@codemirror/language'
import { yaml } from '@codemirror/legacy-modes/mode/yaml'
import code from './yaml.yaml?raw'

export default {
  language: () => StreamLanguage.define(yaml),
  code
}
