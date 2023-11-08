const {Router}= require('express');

const { updatedImageCloudinary } = require('../controllers');
const { validatorUpdateUpload } = require('../validatiors');


const router = Router();
router.put('/:collection/:id',validatorUpdateUpload,updatedImageCloudinary);
module.exports = router;