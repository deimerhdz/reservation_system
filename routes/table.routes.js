const { Router } = require("express");
const { saveTable, getAllTables, deleteTable } = require("../controllers");
const { saveTableValidator } = require("../validatiors");
const { getRestaurantByIdValidator } = require("../validatiors/restaurant.validator");
const { validateJWT } = require("../middlewares/validateJwt");

const router = Router();
router.get('/:id',getRestaurantByIdValidator,getAllTables);

router.post('/',saveTableValidator,saveTable);

router.delete('/:id',validateJWT,deleteTable);

module.exports = router;