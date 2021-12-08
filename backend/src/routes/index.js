const express = require('express');
var router = express.Router();
const controlPost = require('../controllers/controlCRUD');
const controlGet = require('../controllers/controlGet');


router.get('/ver_nota/:id', controlGet.getNota);
router.get('/users', controlGet.getUsers);
router.get('/getnotes', controlGet.getNotes);


router.post('/agregar_nota', controlPost.setNote);
router.delete('/deleteNote/:id', controlPost.deleteNote);
router.put('/deleteNote/:id', controlPost.changePassword);
router.put('/editNote/:id', controlPost.editNote);
router.post('/login', controlPost.loguearse);
router.post('/register', controlPost.registrarse);

module.exports = router;