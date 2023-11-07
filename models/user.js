const {  DataTypes }= require('sequelize');

const Role = require('./role');
const { sequelize } = require('../config/database');

const User = sequelize.define(
    "users",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        roleId:{
            type: DataTypes.NUMBER
        },
        isActive:{
          
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true
        }
    },
    {
        timestamps:true
    }
)
Role.hasOne(User,{
    foreignKey: 'roleId'
  });
User.belongsTo(Role, );

module.exports = User;