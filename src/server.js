const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const { upload } = require("./middlewares/imageUpload");

dotenv.config();

// app.use(express.static("uploads"));
// http
app.use("/uploads", express.static("uploads"));

const server = async function () {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("DB 연결됨");
    app.use(express.json());

    app.post("/upload", upload.single("image"), async function (req, res) {
      try {
        console.log(req.file);
        return res.send(req.file);
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    });

    app.listen(3000);
  } catch (error) {
    console.log("연결안됨");
  }
};
server();
