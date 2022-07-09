import { StreamLanguage } from '@codemirror/language'
import { lua } from '@codemirror/legacy-modes/mode/lua'
import code from './lua.lua?raw'

export default {
  language: () => StreamLanguage.define(lua),
  code
}
