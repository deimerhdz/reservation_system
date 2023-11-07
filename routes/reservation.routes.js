const { Router } = require("express");
const { getAllReservation, getAllReservationByClientId, makeReservation, changeStatusReservation } = require("../controllers");
const { makeReservationValidator } = require("../validatiors/reservation.validator");

const router = Router();
router.get('/:id',getAllReservation);
router.get('/clientId/:id',getAllReservationByClientId);
router.post('/',makeReservationValidator,makeReservation);
router.put('/:id',changeStatusReservation);

module.exports = router;