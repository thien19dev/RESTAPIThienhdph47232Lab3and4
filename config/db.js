const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const local = "mongodb://localhost:27017/test/cars";

const atlas = "mongodb+srv://thien19dev:Thienhdph47232@thienhdph47232lab3and4.9vydh.mongodb.net/";


const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Kết nối MongoDB thành công');
    } catch (error) {
        console.error('Kết nối MongoDB thất bại: ', error);
        process.exit(1);
    }
};
module.exports = { connect };
