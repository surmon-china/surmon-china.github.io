import { StreamLanguage } from '@codemirror/language'
import { brainfuck } from '@codemirror/legacy-modes/mode/brainfuck'
import code from './brainfuck.bf?raw'

export default {
  language: () => StreamLanguage.define(brainfuck),
  code
}
