import { sql, MySQL } from '@codemirror/lang-sql'
import code from './mysql.sql?raw'

export default {
  language: () => sql({ dialect: MySQL }),
  code
}
