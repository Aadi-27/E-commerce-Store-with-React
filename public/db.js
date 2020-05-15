const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const options = {useUnifiedTopology: true, useNewUrlParser : true};
const uri = "mongodb+srv://aadi005:aadi005@cluster2-i5ttg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, options);

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}
const connectDB = async () => {
	try {
		await client.connect();

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	} 
};

// const { MongoClient } = require('mongodb');

// async function main() {
   
// 	const uri = "mongodb+srv://aadi005:aadi005@cluster2-i5ttg.mongodb.net/test?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser : true});

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
// 			await listData(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }

// main().catch(console.error);

// async function listData(client) {
//     const data = await client.db("secondDB").collection("productData").findOne({});

//     console.log(data);
// };

module.exports = {connectDB, getPrimaryKey};
