const Restaurant = require("../models/restaurant");
const User = require("../models/user");
/**
 * you most pass email
 * @param {*} email 
 * @returns Email is already exists
 */
const existEmail = async (email='')=>{
    const existeEmail = await User.findOne({where:{email}});
    if(existeEmail){
        throw new Error(`Email is already exists`)
    }
}

/**
 * you most pass id
 * @param {*} id 
 * @returns id is not exists
 */
const existRestaurant = async (id='')=>{
    const existRestaurant = await Restaurant.findByPk(id);
    if(!existRestaurant){
        throw new Error(`id is not found`)
    }
}


module.exports = {
    existEmail,
    existRestaurant
}