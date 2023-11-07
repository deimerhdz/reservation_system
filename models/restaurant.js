const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./user');

const Restaurant = sequelize.define(
    "restaurants",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        photo:{
            type:DataTypes.STRING,
            allowNull:true
        },
        userId:{
            field:'owner',
            type: DataTypes.NUMBER
        }
    },
    {
        timestamps:false
    }
)
User.hasOne(Restaurant,{
    foreignKey: 'userId'
    
  });
Restaurant.belongsTo(User, );


module.exports = Restaurant;