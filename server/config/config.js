import "dotenv/config"

const { DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST, DB_DIALECT } =
  process.env

export default {
  DB_NAME: DB_NAME,
  DB_USER: DB_USER,
  DB_PASSWORD: DB_PASSWORD,
  DB_PORT: DB_PORT,
  DB_HOST: DB_HOST,
  DB_DIALECT: DB_DIALECT,
}
