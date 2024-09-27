var express = require('express');
var router = express.Router();
const Car = require('../model/car');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Them Du Lieu Vao DataBase
router().post('/addCar', (req, res, next) => {
  const data = req.body;
  const newCar = new Car({
    maXe: data.maXe,
    mauSac: data.mauSac,
    giaTien: data.giaTien
  });

  newCar.save()
      .then(() =>{
        res.send("Them thanh cong!")
      }).catch(err => {
        res.send("Them that bai" + err);
  });
});

module.exports = router;
