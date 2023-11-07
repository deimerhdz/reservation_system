const Restaurant = require("../models/restaurant")
const User = require("../models/user")
const { handleHttpError } = require("../utils/handleError")

const getAllRestaurant = async(req,res)=>{
    try {
        const restaurants = await Restaurant.findAll({include:User})
        res.json(restaurants);
    } catch (e) {
        console.log(e);
        handleHttpError(res,'ERROR_GET_RESTAURANTS')
    }
}
const getRestaurantById = async(req,res)=>{
    try {
        const id = req.params.id
        const restaurant = await Restaurant.findOne({include:User,where:{id}})
        res.json(restaurant);
    } catch (e) {
        console.log(e);
        handleHttpError(res,'ERROR_GET_RESTAURANTS')
    }
}
const saveRestaurant = async(req,res)=>{
    try {
        const body = req.body;
        const restaurant = await Restaurant.create(body);
        res.json(restaurant);
    } catch (e) {
        console.log(e);
        handleHttpError(res,'ERROR_SAVE_RESTAURANT')
    }
}

const updateRestaurant = async(req,res)=>{
    try {
        const restaurantId = req.params.id;
        const {id, ...body} = req.body;
        const [,restaurant] = await Restaurant.update(body,{where:{id:restaurantId},returning:true});
        res.json(restaurant[0]);
    } catch (e) {
        handleHttpError(res,'ERROR_UPDATE_RESTAURANT')
    }

}

const deleteRestaurant = async(req,res)=>{
    try {
        const id = req.params.id;
        const restaurant = await Restaurant.destroy({where:{id}});
        res.json(restaurant);
    } catch (e) {
        handleHttpError(res,'ERROR_DELETE_RESTAURANT')
    }

}

module.exports ={
    getAllRestaurant,
    getRestaurantById,
    saveRestaurant,
    updateRestaurant,
    deleteRestaurant
}