
const moment = require("moment");
const { handleHttpError } = require("../utils/handleError");
const { sequelize } = require("../config/database");

const limitReservationInAllRestaurants = async(req,res,next)=>{

    const userId = req.body.userId;
    const currentDate =moment(new Date()).format('YYYY-MM-DD');
    const { QueryTypes } = require('sequelize');
    const query = `
    select sum(total) from (
      select count(*) as total from reservations r where "clientId" =${userId} and "reservationDate"  between '${currentDate} 00:00:00'
      and '${currentDate} 23:59:59' group by "restaurantCode" 
      ) as max_reservation
    `
    const [sum] = await sequelize.query(query, { type: QueryTypes.SELECT });
      const limit = Number(sum.sum);
      console.log('limite de reservaciones en todos los restaurantes',limit);
    if(limit >= process.env.LIMIT_RESERVATION_ALL_RESTAURANT ){
      handleHttpError(res,'ERROR_RESERVATION_LIMIT_OVERCOME',500)
      return ;
    }
    next();
}


module.exports = {
  limitReservationInAllRestaurants
}