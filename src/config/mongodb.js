import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "./environment";

// khởi tạo kết nối đến MongoDB, ban dầu là null(chưa kết nối)
let trelloDBInstance = null;

// khoi tạo đối tượng để kết nối đến MongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  //goi kết nối đến MongoDB Altas với URI đã khai báo trong mongoClientInstance
  await mongoClientInstance.connect();
  // kêt nối thành công thì gán giá trị cho trelloDBInstance
  trelloDBInstance = mongoClientInstance.db(env.DATABASE_NAME);
};

export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};

export const GET_DB = () => {
  if (trelloDBInstance) {
    return trelloDBInstance;
  }
  throw new Error("MongoDB is not connected!");
};
