const { check } = require("express-validator");
const { existRestaurant } = require("../utils/handleValidatorDb");
const { validateFields } = require("../middlewares/validateField");

const saveRestaurantValidator= [
    check('name').not().isEmpty(),
    check('address').not().isEmpty(),
    check('userId').not().isEmpty(),
    validateFields
]

const getRestaurantByIdValidator =[
    check('id').custom(existRestaurant),
    validateFields
 
]

module.exports = {
    saveRestaurantValidator,
    getRestaurantByIdValidator
}