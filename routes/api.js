var express = require('express');
var router = express.Router();

const Distributor = require('../models/distributors');
const Car = require('../models/car');


router.post('/add-car', (req, res) => {
    const data = req.body;
    const newCar = new Car({
        code: data.code,
        color: data.color,
        price: data.price
    });
    newCar.save()
        .then(() => {
            res.send('Car added to database');
        })
        .catch((error) => {
            res.send('Error adding car to database' + error);
        });
});


router.get('/get-list-car', (req, res) => {
    Car.find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.send('Error getting car from database' + error);
        });
});

module.exports = router;