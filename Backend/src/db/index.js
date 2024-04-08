const { Pool } = require('pg')
const { DB_USER, DB_HOST, DB_DB, DB_PASSWORD,DB_PORT} = require('../constants')

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DB,
  password: DB_PASSWORD,
  port: DB_PORT,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
