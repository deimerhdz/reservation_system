const handleHttpError =(res, message='Something happened',code=403)=>{
    console.log("Error", message);
    return res.status(code).json({error:message});
    
}
module.exports = {
    handleHttpError
}