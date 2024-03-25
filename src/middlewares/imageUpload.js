const multer = require("multer");
const { v4: uuid } = require("uuid");
const mime = require("mime-types");

// 01st
// const upload = multer({ dest: "uploads" });

// 02st
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, uuid() + "." + mime.extension(file.mimetype));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, fil, cb) {
    // if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    //   cb(null, true);
    // } else {
    //   cb(new Error("png만 업로드 가능합니다."), false);
    // }

    if (["image/png", "image/jpeg"].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("jpg/png만 업로드 가능합니다."), false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
});
module.exports = { upload };