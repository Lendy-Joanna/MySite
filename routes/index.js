var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {page: 'Home', menuId: 'home' });
});
/* Ruta nueva al Ubicación*/

router.get('/ubicacion', function(req, res, next) {
  res.render('ubicacion', {page: 'Ubicacion', menuId: 'ubicacion' });
});

router.get('/extras', function(req, res, next) {
  res.render('extras', {page: 'Extras', menuId: 'extras' });
});

router.put('/greeting', function(req, res){
  res.send('Te doy un saludo con Greeting')
});
router.delete('/hello', function(req, res){
  res.send('Te doy un saludo con DELETE')
});

router.post('/checkout', async (req, res)=>{
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source:req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '472',
    currency: 'usd',
    customer: customer.id,
  });
  console.log(charge.id);
  res.send('éxito');
});

module.exports = router;
