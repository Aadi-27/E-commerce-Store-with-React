const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const db = require('../public/db');
const collection = "productData";

app.use(express.json());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    // db.collection(collection).find({})
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err))
    db.collection(collection).find({})
    .then(data => res.json(data))
    .catch(err => console.error(err));
})

const PORT = process.env.port || 8000;
db.connectDB((err) => {
    if(err) {
        console.log('unable to connect to the database');
        process.exit(1);
    }
    else{
        app.listen(PORT, () => {
            console.log(`app is running on port ${ PORT }`);
        })
    }
})
