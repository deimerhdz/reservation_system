const { Router } = require("express");
const { getAllReservation, getAllReservationByClientId, makeReservation, changeStatusReservation } = require("../controllers");
const { makeReservationValidator } = require("../validatiors/reservation.validator");
const { validateJWT } = require("../middlewares/validateJwt");

const router = Router();
router.get('/:id',validateJWT,getAllReservation);
router.get('/clientId/:id',validateJWT,getAllReservationByClientId);
router.post('/',makeReservationValidator,makeReservation);
router.put('/:id',validateJWT,changeStatusReservation);

module.exports = router;