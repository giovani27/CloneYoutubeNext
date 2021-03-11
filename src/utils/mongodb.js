import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedDb;
let cachedClient;

if (!URI) {
  throw new Error('POR FAVOR COLOQUE A URI');
}

if (!dbName) {
  throw new Error('POR FAVOR COLOQUE o NOME DA DATABASE');
}

export async function connectToDatabase() {
  if (cachedDb && cachedClient) {
    return { client: cachedClient, db: cachedDb };
  }
  const client = await MongoClient.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = await client.db(dbName);

  cachedDb = db;
  cachedClient = client;

  return { client, db };
}
export default connectToDatabase;
