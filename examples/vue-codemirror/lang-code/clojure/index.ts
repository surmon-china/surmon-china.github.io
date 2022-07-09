import { StreamLanguage } from '@codemirror/language'
import { clojure } from '@codemirror/legacy-modes/mode/clojure'
import code from './clojure.clj?raw'

export default {
  language: () => StreamLanguage.define(clojure),
  code
}
