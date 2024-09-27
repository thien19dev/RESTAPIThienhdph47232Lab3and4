var express = require('express');
var router = express.Router();
const Car = require('../models/car');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Thêm Dữ Liệu Vào Database
router.post('/addCar', (req, res, next) => {
  const data = req.body;

  const newCar = new Car({
    maXe: data.maXe,
    mauSac: data.mauSac,
    giaTien: data.giaTien
  });

  newCar.save()
      .then(() => {
        res.send("Thêm thành công!");
      })
      .catch(err => {
        res.status(500).send("Thêm thất bại: " + err);
      });
});

module.exports = router;
