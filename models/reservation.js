const {  DataTypes }= require('sequelize');
const moment = require('moment');
const { sequelize } = require('../config/database');
const Table = require('./tables');
const Restaurant = require('./restaurant');
const User = require('./user');

const Reservation = sequelize.define(
    "reservations",
    {
        userId:{
            field:'clientId',
            type:DataTypes.INTEGER,
            allowNull:false
        },
        restaurantId:{
            field:'restaurantCode',
            type:DataTypes.INTEGER,
            allowNull:false
        },
        tableId:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        numDinners:{
            field:'numDiners',
            type:DataTypes.INTEGER,
            allowNull:false
        },
        reservationDate:{
            type: DataTypes.DATE,
           get() {
                return moment(this.getDataValue('reservationDate')).format('YYYY-MM-DD');
              }
        },
        status:{
          
            type:DataTypes.ENUM('PENDING', 'CANCELED','CONFIRMED'),
            allowNull:false,
            defaultValue:'PENDING'
        }
    },
    {
        timestamps:false
    }
)

//client association
User.hasMany(Reservation,{
    foreignKey: 'userId'
  });
Reservation.belongsTo(User);

// table association
Table.hasMany(Reservation,{
    foreignKey: 'tableId'
  });
Reservation.belongsTo(Table);

//restaurant association
Restaurant.hasMany(Reservation,{
    foreignKey: 'restaurantId'
  });
Reservation.belongsTo(Restaurant);
module.exports = Reservation;