const { User } = require("../models/User");
const express = require("express");
const userRouter02 = express.Router();
const { hash, compare } = require("bcryptjs");

userRouter02.post("/reg", async function (req, res) {
  try {
    const password = await hash(req.body.password, 10);
    console.log(password);

    const user = await new User({
      username,
      useremail,
      password,
      image,
    }).save();
    return res.send({ user });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

userRouter.post("/login", async function (req, res) {
  try {
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = { userRouter02 };
