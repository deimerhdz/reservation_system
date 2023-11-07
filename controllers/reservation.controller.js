
const Reservation = require("../models/reservation");
const Table = require("../models/tables");
const { handleHttpError } = require("../utils/handleError");
const moment = require("moment");
const getAllReservation = async(req,res)=>{
    try {
        const restaurantId = req.params.id;
        const reservations = await Reservation.findAll({where:{restaurantId}});
        res.json(reservations);
    } catch (e) {
        console.log(e);
        handleHttpError(res,'ERROR_GET_RESERVATION')
    }
}
const getAllReservationByClientId = async(req,res)=>{
    try {
        const clientId = req.params.id;
        const reservations = await Reservation.findAll({where:{userId:clientId}});
        res.json(reservations);
    } catch (e) {
        console.log(e);
        handleHttpError(res,'ERROR_GET_RESERVATION')
    }
}
const makeReservation = async(req,res)=>{
    try {
        const body = req.body;
        body.reservationDate = moment(body.reservationDate).format();
        const reservation = await Reservation.create(body);
        res.json(reservation);
    } catch (e) {
        console.log(e);
        handleHttpError(res,'ERROR_POST_RESERVATION')
    }
}
const changeStatusReservation = async(req,res)=>{
    try {
        const resevationId = req.params.id;
        const { status,tableId} = req.body;
        const [,reservation] = await Reservation.update({status,tableId},{where:{id:resevationId},returning:true});
        switch(status){
            case 'CONFIRMED':
                console.log(reservation[0].tableId);
            await Table.update({isAvailable:false},{where:{id:reservation[0].tableId}})
            break;
            case 'CANCELED':
                await Table.update({isAvailable:false},{where:{id:reservation[0].tableId}})
            break
        }
        res.json(reservation[0]);

    } catch (e) {
        console.log(e);
        handleHttpError(res,'ERROR_UPDATE_RESERVATION')
    }
}

module.exports = {
    getAllReservationByClientId,
    getAllReservation,
    changeStatusReservation,
    makeReservation
}