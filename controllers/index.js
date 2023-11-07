const authController = require('./auth.controller');
const restaurantController = require('./restaurant.controller')
module.exports = {
    ...authController,
    ...restaurantController
}