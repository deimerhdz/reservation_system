const { validationResult } = require("express-validator");
const { encrypt } = require("../utils/handlePassword");

const modifyEmailAndPassword = async(req,res,next) =>{
    const body = req.body;
    const passwordHash = await encrypt(body.password);
    body.password = passwordHash;
    body.email = body.email.toLowerCase();
    req.body = body;
    next();
}

module.exports ={
    modifyEmailAndPassword
}