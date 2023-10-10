const { DataTypes } = require("sequelize")
const sequelize = require("./../config/db")

const Order = sequelize.define("Order", {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Recipient_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Total_price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Total_payment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Order_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Order_items: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Order
