import { StreamLanguage } from '@codemirror/language'
import { erlang } from '@codemirror/legacy-modes/mode/erlang'
import code from './erlang.erl?raw'

export default {
  language: () => StreamLanguage.define(erlang),
  code
}
