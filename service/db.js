// db.js
import { MongoClient } from "mongodb";
import fs from "fs";

let db;

// load credentials
const config = JSON.parse(fs.readFileSync("./dbConfig.json"));

const uri = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

export async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("homequest");
    console.log("Connected to MongoDB");
  }
  return db;
}
