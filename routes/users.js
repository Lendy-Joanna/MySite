var express = require('express');
var router = express.Router();
const User = require('../model/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


/*  LOGIN */
router.post("/", function(req, res, next) {
  
  var user = new User({
    nombre: req.body.nombre,  
    apellidos: req.body.apellidos,
    email:req.body.email,
    numero:req.body.numero,
    mensaje: req.body.mensaje
  });
 

  user.save((err, response) => {
     if (err) {
     res.redirect('/ubicacion')}else{
    
     res.redirect('/');}
     
    
  });
});
