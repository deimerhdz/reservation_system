const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Role = require('../models/role');
const validateJWT= async(req=request,res=response,next)=>{
    
    try{
        if(!req.header('Authorization')){
            return res.status(401).json({
                msg:'There is not token in request'
            });
        }
        const token = req.header('Authorization').split(' ').pop();
      const{ id} = jwt.verify(token,process.env.SECRET_KEY);
      const user = await User.findOne({include:Role,where:{id}});
      //vefiry if uid have status true
      if(!user.isActive|| !user){
        return res.status(401).json({
            msg:'token invalid'
        })
      }
      
      req.user=user;
      next();
    }catch(err){
        
        console.log(err);
        res.status(401).json({
            msg:'token invalid'
        })
    }
   

}

module.exports = {
    validateJWT
}