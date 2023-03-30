const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const errorHandler = (res, message) => {
  return res.status(400).json({
    message,
  });
};

const createUser = async (req, res) => {
  try {
    const { fullname, phoneNumber, email } = req.body;
    if (!fullname) {
      return errorHandler(res, "Fullname is required");
    }

    const user = await User.findOne({
      $and: [{ email }, { phoneNumber }],
    });
    if (user) {
      res.status(403).send({
        message: "User already exist !!!",
      });
      return;
    }
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      if (err) {
        res.send(err);
      }
      const user = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        password: hash,
        phoneNumber: req.body.phoneNumber,
      });
      user
        .save()
        .then((response) => {
          res.send(response);
        })
        .catch((error) => res.send(error));
    });
  } catch (error) {
    res.status(500).send({});
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    const { fullname, email, userType, _id } = user;

    const token = jwt.sign({ fullname, email, userType, _id }, "vrit");

    bcrypt.compare(req.body.password, user.password, function (err, result) {
      res.status(200).send({ accessToken: token });
    });
  } catch (error) {
    return res.status(500).send({
      message: "User not find",
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

const getUser = async (req, res) => {
  try {
    console.log(res.user);
    const userId = req.params.userId;

    if (res.user._id === userId) {
      const users = await User.findOne({ _id: userId });
      return res.send(users);
    } else {
      return res
        .status(401)
        .send({ status: false, message: "Unauthorized user" });
    }
  } catch (error) {
    return res.send(error);
  }
};

module.exports = {
  createUser,
  login,
  getUsers,
  getUser,
};
