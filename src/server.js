const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const server = async function () {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("DB 연결됨");
    app.use(express.json());

    app.listen(3000);
  } catch (error) {
    console.log("연결안됨");
  }
};
server();
