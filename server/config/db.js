import config from "./config.js"
import { sequelize } from "sequelize"

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    port: config.DB_PORT,
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    pool: {
      max: config.DB_POOL_MAX,
      min: config.DB_POOL_MIN,
      acquire: config.DB_POOL_ACQUIRE,
      idle: config.DB_POOL_IDLE,
    },
  }
)

export const connect = async () => {
  try {
    await sequelize.authenticate()
    sequelize.sync({ force: true })
    // sequelize.sync({ alter: true })
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}

export default sequelize
