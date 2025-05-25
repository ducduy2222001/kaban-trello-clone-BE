/* eslint-disable no-console */
import express from "express";
import exitHook from "async-exit-hook";
import { CLOSE_DB, CONNECT_DB } from "~/config/mongodb";
import { env } from "~/config/environment";
import { APIs } from "~/routes/index.js";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware";

const START_SERVER = async () => {
  const app = express();

  // Allow use req.body json data
  app.use(express.json());

  app.use("/", APIs);

  // Middleware xử lý lỗi tập trung
  app.use(errorHandlingMiddleware);

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Hello,${env.AUTHOR} I am running at ${env.APP_HOST}:${env.APP_PORT}/`
    );
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
