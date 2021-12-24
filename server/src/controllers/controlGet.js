const tablaUsers = require("../models/users");
const tablaNotes = require("../models/notas");
const { Op } = require("sequelize");
const { verifyToken } = require("../jwt/jwt");

const controller = {};

controller.getUsers = async (req, res, next) => {
  const data = await tablaUsers.findAll();
  res.json(data);
};

controller.getNotes = async (req, res, next) => {
  const verify = await verifyToken(req.get("authorization"));
  if (!verify) {
    return res.status(401).json({
      error: "token invalido",
    });
  }
  res.json({
    data: await tablaNotes.findAll({ where: { userId: verify.id } }),
  });
};

controller.getNota = async (req, res, next) => {
  const idNote = req.params.id;
  const verify = await verifyToken(req.get("authorization"));
  if (!verify) {
    return res.status(401).json({
      error: "token invalido",
    });
  }

  const nota = await tablaNotes.findOne({
    where: {
      [Op.and]: [{ id: `${idNote}` }, { userId: `${verify.id}` }],
    },
  });
  res.status(200).json(nota);
};

module.exports = controller;
