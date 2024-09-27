const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const local = "mongodb://localhost:27017/cars";

const atlas = "mongodb+srv://thien19dev:thien19dev@thienhdph47232lab3and4.9vydh.mongodb.net/"


const connect = async () => {
    try {
        await mongoose.connect(atlas, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Kết nối MongoDB thành công');
    } catch (error) {
        console.error('Kết nối MongoDB thất bại:', error);
        process.exit(1);
    }
};
module.exports = { connect };
