const { Router } = require("express");
const { User } = require("../models/User");
const userRouter = Router();

userRouter.put("/", async function (req, res) {
  try {
    const users = await User.find({});
    console.log({ users });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = { userRouter };
