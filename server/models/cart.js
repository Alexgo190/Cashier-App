import Order from "./order"
import Product from "./product"

const { DataTypes } = require("sequelize")
const sequelize = require("./../config/db")

const Cart = sequelize.define("Cart", {
    CartID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Qty: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Total_price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

Cart.hasOne(Order)

Cart.belongsToMany(Product, { through: "Product_Cart" })

export default Cart