const { DataTypes } = require("sequelize")
const sequelize = require("./../config/db")

const Product = sequelize.define("Product", {
  ProductID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Product_Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Product
