const {  DataTypes }= require('sequelize');
const { sequelize } = require('../config/database');


const Table = sequelize.define(
    "tables",
    {
        restaurantId:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        capacity:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        isAvailable:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true
        }
    },
    {
        timestamps:false
    }
)

module.exports = Table;