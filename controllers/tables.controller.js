const Table = require("../models/tables");
const { handleHttpError } = require("../utils/handleError");

const getAllTables = async(req,res)=>{
    try {
        const restaurantId = req.params.id;
        const tables = await Table.findAll({where:{restaurantId}});
        res.json(tables);
    } catch (e) {
        console.log(e);
        handleHttpError(res,'ERROR_GET_TABLE')
    }
    
}

const saveTable = async (req,res)=>{
    try {
        const body = req.body;
        const table = await Table.create(body);
        res.json(table);
    } catch (e) {
        console.log(e);
        handleHttpError(res,'ERROR_POST_TABLE')
    }
}

const deleteTable = async (req,res)=>{
    try {
        const id = req.params.id;
        const tables = await Table.destroy({where:{id}});
        res.json(tables);
    } catch (e) {
        console.log(e);
        handleHttpError(res,'ERROR_DELETE_TABLE')
    }
}

module.exports = {
    getAllTables,
    deleteTable,
    saveTable
}