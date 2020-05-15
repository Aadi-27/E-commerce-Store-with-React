const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const db = require('../public/db');

app.use(express.json());
app.use(bodyParser.json());
app.get('/', async () => {
    try {
		await listData(client);

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	} 
    // .then(data => res.json(data))
    // .catch(err => console.error(err));
});
async function listData(client) {
    const response = await client.db("secondDB").collection("productData").findOne({});
    const data = await response.json(data);
    console.log(data);
};

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
