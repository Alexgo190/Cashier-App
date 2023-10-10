import Product from "./product"

const { DataTypes } = require("sequelize")
const sequelize = require("./../config/db")

const Category = sequelize.define("Category", {
    CategoryID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Category_Name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

Category.hasMany(Product)

export default Category