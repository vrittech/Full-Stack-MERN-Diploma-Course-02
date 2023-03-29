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
    const { fullname, email, password } = req.body;
    if (!fullname) {
      return errorHandler(res, "Fullname is required");
    }

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.send({
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
        userType: req.body.userType,
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

module.exports = {
  createUser,
  login,
  getUsers,
};
