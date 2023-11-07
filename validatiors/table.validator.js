const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateField");
const { countTableByRestaurant } = require("../middlewares/countTableByRestaurant");

const saveTableValidator = [
    countTableByRestaurant,
    check('restaurantId').not().isEmpty(),
    check('capacity').not().isEmpty(),
    validateFields
]

module.exports  = {
    saveTableValidator
}