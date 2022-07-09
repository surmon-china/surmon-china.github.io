import { StreamLanguage } from '@codemirror/language'
import { coffeeScript } from '@codemirror/legacy-modes/mode/coffeescript'
import code from './coffeescript.coffee?raw'

export default {
  language: () => StreamLanguage.define(coffeeScript),
  code
}
