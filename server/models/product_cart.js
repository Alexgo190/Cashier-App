const { DataTypes } = require("sequelize")
const sequelize = require("./../config/db")

const Product_Cart = sequelize.define("Product_Cart", {
    // productID: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    // CartID: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
})


export default Product_Cart