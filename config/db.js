const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    maXe: String,
    mauSac: String,
    giaTien: Number
})

module.exports = mongoose.models("Car", carSchema);