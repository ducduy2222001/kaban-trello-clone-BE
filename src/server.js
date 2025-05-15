/* eslint-disable no-console */
import express from "express";
import exitHook from "async-exit-hook";
import { CLOSE_DB, CONNECT_DB, GET_DB } from "~/config/mongodb";

const START_SERVER = async () => {
  const app = express();

  const hostname = "localhost";
  const port = 8017;

  app.get("/", async (req, res) => {
    console.log(await GET_DB().listCollections().toArray());
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello, I am running at ${hostname}:${port}/`);
  });

  // thư viện async-exit-hook sẽ tự động gọi hàm này khi server dừng lại or Crtl+C hiện tại chỉ hỗ trợ cho MacOS, Linux
  exitHook(() => {
    console.log("Closing MongoDB connection...");
    CLOSE_DB();
  });
};

(async () => {
  try {
    await CONNECT_DB();
    console.log("MongoDB connected successfully!");
    START_SERVER();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();
