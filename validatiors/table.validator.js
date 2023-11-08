const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateField");
const { countTableByRestaurant } = require("../middlewares/countTableByRestaurant");
const { validateJWT } = require("../middlewares/validateJwt");

const saveTableValidator = [
    validateJWT,
    countTableByRestaurant,
    check('restaurantId').not().isEmpty(),
    check('capacity').not().isEmpty(),
    validateFields
]

module.exports  = {
    saveTableValidator
}