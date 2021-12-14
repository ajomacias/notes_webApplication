const tableUsers = require('../models/users');
const tableNotes = require('../models/notas');
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");
const verifyToken = require('../jwt/verify');
const createToken = require('../jwt/createToken');

const controller = {};

/*_________________________________________________________________________*/

controller.loguearse = async (req, res, next) => {    //LOGUEARSE
  const usuario = req.body.usuario;
  const clave = req.body.password;

  const data = await tableUsers.findOne({
    attributes: ['id_user', 'name_user', 'clave_user'],
    where: {
      name_user: `${usuario}`
    }
  });

  if (!data) {
    return res.status(401).json({error:'datos incorrectos'});
  }

  const validPass = await bcrypt.compare(
    clave, data.clave_user
  );
  if (!validPass) {
    return res.status(401).json({error:'datos incorrectos'});
  }
  const userForToken = {
    id: data.id_user,
    name: data.name_user
  }
  const token = createToken(userForToken);
  res.status(401).json({ token, msj:'User is correct' });
}

/*_________________________________________________________________________*/

controller.registrarse = async (req, res) => {   //REGISTRARSE
  const usuario = req.body.usuario;
  const clave = req.body.password;
  console.log("---------Clave----------")
  console.log(clave)
  const data = await tableUsers.findOne({
    where: { name_user: `${usuario}` },
  });
  if (data) {
    return res.status(401).json({ error:'Este usuario ya existe'});
  }
  let claveHash = null;
  try{
  claveHash = await bcrypt.hash(clave, 7);
}
catch(err){
  if(err){
    return res.status(401).json({ error:'hubo un error al encriptar la contraseña :('});
  }
}
 await tableUsers.create({
    name_user: usuario,
    clave_user: claveHash,
  });
  res.status(200).json({msj:'Usuario registrado correctamente'});
}

/*_________________________________________________________________________*/

controller.setNote = async (req, res, next) => {    //INGRESAR NOTA

  const titulo = req.body.titulo;
  const cuerpo = req.body.cuerpo;
  const important = req.body.import;

  const authorization = req.get('authorization');
  const decodeToken = await verifyToken(authorization);

  if(!decodeToken) {
    return res.status(401).json({
      error: 'Token is invalid'
    })
  }
  const id = decodeToken.id;

  const validateUser = await tableUsers.findOne({
    where: { id_user: id },
  });

  if (!validateUser) {
    return res.status(401).json({ error: 'Token is invalid' })
  }

  const exist = await tableNotes.findOne({
    where: { text_nota: `${cuerpo}` }
  })
  if (exist) {
    return res.status(500).json({ error: 'Esta nota ya existe' })
  }
  const newNote = await tableNotes.create({
    title_nota: titulo,
    userId: id,
    text_nota: cuerpo,
    importance_nota: important,
  })
  res.status(201).json({newNote, msj:'Success in add note'});
}

/*_________________________________________________________________________*/

controller.deleteNote = async (req, res, next) => {  //ELIMINAR NOTA
  const id = req.params.id;
  const authorization = req.get('authorization');

  const decodeToken = await verifyToken(authorization);

  if(!decodeToken) {
    return res.status(401).json({
      error: 'Token is invalid'
    })
  }
  
  const id_user = decodeToken.id;
  const destroy = await tableNotes.destroy({
    where: {
      [Op.and]: [
        { id: id },
        { UserId: id_user },
      ]
    },
  })
  if (!destroy) {
    return res.status(500).json({ error: 'Error destroy note' });
  }

  res.status(200).json({ success: 'success to destroy note' });
}

/*_________________________________________________________________________*/

controller.editNote = async (req, res, next) => {  //EDITAR NOTA
  const idNote = req.params.id;
  const titleForm = req.body.titulo;
  const textForm = req.body.cuerpo;
  const important = req.body.import;

  const authorization = req.get('authorization');

  const decodeToken = await verifyToken(authorization);

  if(!decodeToken) {
    return res.status(401).json({
      error: 'Token is invalid'
    })
  }
  const id_user = decodeToken.id;

  let verify = await tableNotes.findOne({
    where: { id: `${idNote}` }
  })

  if (!verify) {
    return res.status(500).json({
      error: `err in edit note witch id: ${idNote}`
    })
  }
  const verifyText = await tableNotes.findOne({
    where: {text_nota:`${textForm}`}
  })
  if(verifyText) {
    return res.status(500).json({
      error: 'Ya existe una nota con la misma descripcion'
    })
  }

  await tableNotes.update({
    title_nota: titleForm,
    userId: id_user,
    text_nota: textForm,
    importance_nota: important
  }, {
    where: {
      [Op.and]: [
        { id: `${idNote}` },
        { userId: id_user }
      ]
    }
  })

  res.status(200).json({
    msj: `note witch id: ${idNote} editing`
  });
}

/*_________________________________________________________________________*/

controller.changePassword = async (req, res, next) => {      //CAMBIAR CONTRASEÑA
  const newPassword = req.body.password;
  const authorization = req.get('authorization');

  const decodeToken = await verifyToken(authorization);

  if(!decodeToken) {
    return res.status(401).json({
      error: 'Token is invalid'
    })
  }
  
  const id = decodeToken.id;
  const verifyUser = await tableUsers.findOne({
    where: {
      id_user:`${id}`
    }
  })
  if(!verifyUser){
    return res.status(401).json({error:'token is invalid'})
  }
  
  await tableUsers.update(
    { clave_user: newPassword }, {
    where: {
      id_user: `${id}`
    }
  })
  res.status(200).json({msj:'Se a cambiado la contraseña correctamentes'});

}

module.exports = controller;