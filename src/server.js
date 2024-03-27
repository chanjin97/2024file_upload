const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const { imageRouter } = require("./routers/imageRouter");
const { userRouter } = require("./routers/userRouter");

dotenv.config();

// app.use(express.static("uploads"));
// http
app.use("/uploads", express.static("uploads"));

const server = async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB 연결됨");
    app.use(express.json());

    app.use("/upload", imageRouter);
    app.use("/user", userRouter);

    app.listen(3000);
  } catch (error) {
    console.log("연결안됨");
  }
};
server();
