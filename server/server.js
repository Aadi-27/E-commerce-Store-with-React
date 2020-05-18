const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/Product');

const PORT = process.env.port || 4000;
app.use(express.json());
app.use(cors());

// Fetches all the data from DB and sends to the client
app.get('/', async (req, res) => {
    // res.send('Server is up');

    try {
        const data = await Product.find({});
        res.json(data);
    } catch (error) {
        console.error(error);
    }
});

// This route adds data to the DB
app.post('/new', async (req, res) => {
    const newData = new Product({
        img: req.body.img,
        name: req.body.name,
        description: req.body.description,
        gender: req.body.gender,
        price: req.body.price,
        type: req.body.type,
        brand: req.body.brand,
        weight: req.body.weight,
        contents: req.body.contents,
        speciality1: req.body.speciality1,
        speciality2: req.body.speciality2,
        speciality3: req.body.speciality3,
        isFreeShipping: req.body.isFreeShipping,
        review: req.body.review,
        tick: req.body.tick,
    });

    try {
        const savedData = await newData.save();
        return savedData;
    } catch (error) {
        throw error;
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

mongoose
    .connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
        console.log('MongoDB connection established')
    )
    .catch((err) => console.log(err));
