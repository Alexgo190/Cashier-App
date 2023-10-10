import Cart from "./cart"
import User from "./user"

const { DataTypes } = require("sequelize")
const sequelize = require("./../config/db")

const Order = sequelize.define("Order", {
    OrderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Recipient_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Total_price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Order_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    CartID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
})

Order.belongsTo(Cart, { foreignKey: "CartID" })

Order.belongsTo(User, { foreignKey: "UserID" })

export default Order