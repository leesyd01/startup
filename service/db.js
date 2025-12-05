// database logic
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL || "mongodb://localhost:27017";
const client = new MongoClient(uri);

let db;

export async function connectToDatabase() {
    if (!db) {
        await client.connect();
        db = client.db("homequest");
        console.log("Connected to MongoDB");
    }
    return db;
}
