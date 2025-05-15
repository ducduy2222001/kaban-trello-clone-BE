import { MongoClient, ServerApiVersion } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://ducduy:nS4ueoPMQMB1UCBu@cluster0.u5c01sd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = "kanban-trello-clone-BE";

// khởi tạo kết nối đến MongoDB, ban dầu là null(chưa kết nối)
let trelloDBInstance = null;

// khoi tạo đối tượng để kết nối đến MongoDB
const mongoClientInstance = new MongoClient(MONGODB_URI, {
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
  trelloDBInstance = mongoClientInstance.db(DATABASE_NAME);
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
