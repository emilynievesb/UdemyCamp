import { MongoClient } from "mongodb";
import { credentials } from "./config.js";
let dbConnection = null;

async function connectionDB() {
  if (dbConnection) {
    return dbConnection;
  }
  try {
    const url = `mongodb+srv://${credentials.user}:${credentials.pass}@cluster0.wibpscy.mongodb.net/${credentials.db}`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(url, options);
    dbConnection = client.db();
    return dbConnection;
  } catch (error) {
    return { status: 500, message: error };
  }
}
const connection = async (coleccion) => {
  const db = await connectionDB();
  const newCollection = db.collection(coleccion);
  return newCollection;
};

const startTransaction = async () => {
  const db = await connectionDB();
  const session = db.client.startSession();
  session.startTransaction();
  return session;
};

export { connection, startTransaction };
