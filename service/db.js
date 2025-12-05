// database logic
const { MongoClient } = require("mongodb");
const config = require("../dbConfig.json");

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);

let db;

async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("rental");
    console.log("Connected to MongoDB");
  }
  return db;
}

module.exports = { connectToDatabase };
