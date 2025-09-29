const MongoDbConfig = require('../config/MongoDBConfig');
const {MongoClient} = require('mongodb');
const uri = MongoDbConfig.uri;
const client = new MongoClient(uri);

exports.readActivity = async () => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("activity");
        
        const activities = await collection.find().project({_id:0}).toArray();
        console.log(activities);
        return activities;
    } finally {
        await client.close();
    }
}