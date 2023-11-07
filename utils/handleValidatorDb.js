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


module.exports = {
    existEmail
}