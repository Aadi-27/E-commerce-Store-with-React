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

module.exports = {connectDB, getPrimaryKey};
