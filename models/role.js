const {  DataTypes }= require('sequelize');
const { sequelize } = require('../config/database');


const Role = sequelize.define(
    "roles",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        timestamps:false
    }
)

module.exports = Role;