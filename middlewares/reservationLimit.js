const moment = require("moment");
const Reservation = require("../models/reservation");
const { handleHttpError } = require("../utils/handleError");

const reservationLimitByRestaurant = async(req,res,next)=>{
    const restaurantId = req.body.restaurantId;
    const userId = req.body.userId;
    const currentDate =moment(new Date()).format('YYYY-MM-DD');
    const tablesCount =await Reservation.count({
        where: {
            restaurantId,
            userId,
            reservationDate:currentDate
        }
      })
    if(tablesCount >= process.env.LIMIT_RESERVATION_PER_RESTAURANT ){
      handleHttpError(res,'ERROR_TABLES_LIMIT_OVERCOME',500)
      return ;
    }
    next();
}


module.exports = {
    reservationLimitByRestaurant
}