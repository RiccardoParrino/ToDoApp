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

exports.createActivity = async (name, date, description, city) => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("activity");

        await collection.insertOne(
            {
                "name":name,
                "date":date,
                "description":description,
                "city":city
            });
        return;
    } finally {
        await client.close();
    }
}

exports.updateActivity = async (name, newName) => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("activity");

        await collection.updateOne( {"name":name}, { $set: {"name":newName} } );
        return;
    } finally {
        await client.close();
    }
}

exports.deleteActivity = async (name) => {
    try {
        await client.connect();
        const db = client.db("temp");
        const collection = db.collection("activity");

        await collection.deleteOne({"name":name});
        return;
    } finally {
        await client.close();
    }
}