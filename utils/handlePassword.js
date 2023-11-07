const bcrypt = require('bcryptjs');
/**
 * you most pass passwordPlain
 * @param {*} passwordPlain 
 * @returns 
 */
const encrypt = async (passwordPlain) =>{
    const hash = await bcrypt.hash(passwordPlain,10)
    return hash;
}
/**
 * yout most pass passwordPlain and hashPassword
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 * @returns 
 */
const compare = async (passwordPlain,hashPassword) =>{
    return bcrypt.compare(passwordPlain,hashPassword)
}

module.exports = {encrypt,compare}