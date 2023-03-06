const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const databaseName = "e-com";

async function dbConnect() {
  let result = await client.connect();
  db = result.db(databaseName);
  return db.collection("products");
  // let response = await collection.find({}).toArray();
  // console.log(response);
}

module.exports = dbConnect;
