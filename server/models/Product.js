const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    img: { type: String },
    name: { type: String },
    description: { type: String },
    gender: [{ type: String }],
    price: { type: Number },
    type: { type: String },
    brand: { type: String },
    weight: { type: Number },
    contents: { type: String },
    speciality1: { type: String },
    speciality2: { type: String },
    speciality3: { type: String },
    isFreeShipping: { type: Boolean },
    review: { type: String },
    tick: { type: String },
});

module.exports = mongoose.model('Product', productSchema);
