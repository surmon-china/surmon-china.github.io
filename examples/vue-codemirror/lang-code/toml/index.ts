import { StreamLanguage } from '@codemirror/language'
import { toml } from '@codemirror/legacy-modes/mode/toml'
import code from './toml.toml?raw'

export default {
  language: () => StreamLanguage.define(toml),
  code
}
