const MongoDbConfig = require('../config/MongoDBConfig');
const MongoClient = require('mongodb').MongoClient;

exports.readActivity = () => {
    MongoClient.connect(MongoDbConfig.uri, (err,db) => {
        if (err) 
            throw err;

        db.collection('activity').find().toArray((err, result) => {
            if (err)
                throw err;

            return result;
        })
    })
}