const { check } = require("express-validator")
const { validateFields } = require("../middlewares/validateField")
const { reservationLimitByRestaurant } = require("../middlewares/reservationLimit")
const { validateJWT } = require("../middlewares/validateJwt")
const { limitReservationInAllRestaurants } = require("../middlewares/limitReservationInAllRestaurants")

const makeReservationValidator =[
    validateJWT,
    reservationLimitByRestaurant,
    limitReservationInAllRestaurants,
    check('restaurantId','restaurantId is required').not().isEmpty(),
    check('userId','userId is required').not().isEmpty(),
    check('numDinners','numDinners is required').not().isEmpty(),
    check('reservationDate','reservationDate is required').not().isEmpty(),
    validateFields

]

module.exports = {
    makeReservationValidator
}