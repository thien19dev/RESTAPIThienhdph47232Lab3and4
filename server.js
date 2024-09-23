const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


// Kết nối đến MongoDB
mongoose.connect('mongodb+srv://thien19dev:thien19dev@thienhdph47232lab3and4.9vydh.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Kết nối MongoDB thành công!"))
    .catch(err => console.log(err));

// Định nghĩa Schema và Model cho Ô tô
const carSchema = new mongoose.Schema({
    carId: String,
    carColor: String,
    carPrice: Number
});

const Car = mongoose.model('Car', carSchema);

const app = express();

// Cấu hình EJS làm template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sử dụng body-parser để parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình thư mục tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Trang nhập thông tin ô tô (GET)
app.get('/', (req, res) => {
    res.render('index');
});

// API thêm mới thông tin ô tô (POST)
app.post('/api/cars', async (req, res) => {
    try {
        const car = new Car({
            carId: req.body.carId,
            carColor: req.body.carColor,
            carPrice: req.body.carPrice
        });

        await car.save();
        res.status(201).json({ message: "Ô tô đã được thêm!", car });
    } catch (err) {
        res.status(500).json({ message: "Có lỗi xảy ra!", error: err });
    }
});

// API trả về danh sách ô tô dưới dạng JSON
app.get('/api/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: "Có lỗi xảy ra!", error: err });
    }
});

// Lắng nghe tại cổng 3000
app.listen(3000, () => {
    console.log('Server đang chạy trên cổng 3000');
});