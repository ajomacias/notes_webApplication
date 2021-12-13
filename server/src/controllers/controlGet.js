const tablaUsers = require('../models/users');
const tablaNotes = require('../models/notas');

const controller = {};

controller.getUsers = async (req,res,next)=>{
    const data = await tablaUsers.findAll();
    res.json(data)
}

controller.getNotes = async (req,res,next)=>{
    const data = await tablaNotes.findAll();
    if(!data){
        res.status(500).sendz("No existen notas");
    }
     res.json(data);
}

controller.getNota = async(req, res, next)=>{
    const idNote = req.params.id;
    const nota = await tablaNotes.findOne({
        where:{
            id:`${idNote}`
        }
    })
    res.json(nota);
}


module.exports = controller;