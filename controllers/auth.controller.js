const Restaurant = require("../models/restaurant");
const Role = require("../models/role");
const User = require("../models/user");
const { handleHttpError } = require("../utils/handleError");
const {  compare } = require("../utils/handlePassword");
const { generateJwt } = require("../utils/handlejwt");

const singIn = async(req, res)=>{
    try{
        const {email,password}= req.body;
        //verificar si el email existe
        const user = await User.findOne({
            include:[Role],
            where:{email}
        });
        if(!user){
            handleHttpError(res,"User or password incorrect.",400)
            return;
        }

        //verificar si el usuario esta activo
        if(!user.isActive){
            handleHttpError(res,"User or password incorrect.",401)
            return;
        }
        //verificar la contraseña
        const validPassword = compare(password,user.password);
        if(!validPassword){
            handleHttpError(res,"User or password incorrect.",401)
            return;
        }
        //generar jwt
        const jwt = await generateJwt(user.id);
        const restaurant = await Restaurant.findOne({
            where:{userId:user.id}
        });
        delete user.dataValues.password;
        res.json({
            user,
            restaurant,
            jwt
        })
    }catch(e){
        handleHttpError(res,e)
    }
}

const singUp = async(req, res)=>{
try {
    const body = req.body;
    
    const userDB = await User.create(body);
    res.status(201).json(userDB);
} catch (e) {
    handleHttpError(res,e)
}
    
}
const renewToken= async(req,res)=>{
    const user = req.user;
    const restaurant = await Restaurant.findOne({
        where:{userId:user.id}
    });
  //generar jwt
  const jwt = await generateJwt(user.id);
    
delete user.dataValues.password;
    res.json({
        user,
        restaurant,
        jwt
    })
}

module.exports ={
    singIn,
    singUp,
    renewToken
}