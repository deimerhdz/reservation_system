const Table = require("../models/tables");
const { handleHttpError } = require("../utils/handleError");

const countTableByRestaurant = async(req,res,next)=>{
    const restaurantId = req.body.restaurantId;
    
    const tablesCount =await Table.count({
        where: {
            restaurantId
        }
      })
      console.log(tablesCount);
    if(tablesCount >= process.env.LIMIT_TABLES_PER_RESTAURANT ){
      handleHttpError(res,'ERROR_TABLES_LIMIT_OVERCOME',500)
      return ;
    }
    next();
}

module.exports = {
    countTableByRestaurant
}