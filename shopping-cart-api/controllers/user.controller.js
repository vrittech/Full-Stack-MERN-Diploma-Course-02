const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const createUser = async (req, res) => {
  try {
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
    res.send({});
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);

    bcrypt.compare(req.body.password, user.password, function (err, result) {
      // result == true
      console.log("RESULT", req.body, true);

      res.send({ result });
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "User not find",
    });
  }
};

module.exports = {
  createUser,
  login,
};
