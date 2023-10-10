import Cart from "./cart"
import Order from "./order"

const { DataTypes } = require("sequelize")
const sequelize = require("./../config/db")

const User = sequelize.define("User", {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Fullname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Role: {
        type: DataTypes.ENUM("Cashier", "Admin"),
        allowNull: false,
    },
})

User.hasMany(Order, { foreignKey: "UserID" })

User.hasOne(Cart)


export default User