const { Router } = require("express");
const { getAllRestaurant, getRestaurantById, saveRestaurant, updateRestaurant, deleteRestaurant } = require("../controllers");
const { saveRestaurantValidator, getRestaurantByIdValidator } = require("../validatiors/restaurant.validator");

const router = Router();
router.get('/',getAllRestaurant);
router.get('/:id',getRestaurantByIdValidator,getRestaurantById);
router.post('/',saveRestaurantValidator,saveRestaurant);
router.put('/:id',getRestaurantByIdValidator,updateRestaurant);
router.delete('/:id',getRestaurantByIdValidator,deleteRestaurant);

module.exports = router;