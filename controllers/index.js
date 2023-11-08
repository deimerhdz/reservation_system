const authController = require('./auth.controller');
const restaurantController = require('./restaurant.controller');
const tableController = require('./tables.controller');
const reservationController = require('./reservation.controller');
const uploadController = require('./upload.controller');
module.exports = {
    ...authController,
    ...restaurantController,
    ...tableController,
    ...reservationController,
    ...uploadController
}