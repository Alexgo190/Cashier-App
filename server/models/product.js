import Cart from "./cart"
import Category from "./category"
import Product_Cart from "./product_cart"

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
    CategoryID: {
        type: DataTypes.INTEGER,
        foreignKey: CategoryID,
        autoIncrement: true,
    }
})

Product.belongsTo(Category, { foreignKey: "CategoryID" }) //done

Product.belongsToMany(Cart, { through: "Product_Cart" })

export default Product