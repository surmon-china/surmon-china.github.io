import { sql, PostgreSQL } from '@codemirror/lang-sql'
import code from './pgsql.sql?raw'

export default {
  language: () => sql({ dialect: PostgreSQL }),
  code
}
