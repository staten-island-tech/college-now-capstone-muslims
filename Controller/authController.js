const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const generateToken = async function (user) {
  const token = jwt.sign({ _id: user._id }, `${process.env.SECRET}`, {
    expiresIn: 60 * 60,
  });
  return token;
};

exports.register = async function (req, res) {
    if (!req.body.email) {
        res.json({ success: false, msg: "Please enter an email." });
    } else if (!req.body.username) {
        res.json({ success: false, msg: "Please enter username." });
    } else if (!req.body.password) {
        res.json({ success: false, msg: "Please enter password."});
    } else if (!req.body.confpassword) {
        res.json({ success: false, msg: "Please confirm your password."});
    } else if (req.bodyconfpassword != req.body.password) {
        res.json({ success: false, msg: "Password does not match."});
    } else if (!req.body.age) {
        res.json({ success: false, msg: "Please enter your age." });
    } else if (req.body.age < 18) {
        res.json({ success: false, msg: "You must be over 18 to use this website." });
    } else if (!req.body.location) {
        res.json({ success: false, msg: "Please enter a location." });
    } else {
        let newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            age: req.body.age,
            location: req.body.location
          });
    const token = await generateToken(newUser);
    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, msg: "Username already exists." });
      }
      res.json({
        success: true,
        msg: "Successful created new user.",
        newUser,
        token,
      });
    });
    await newUser.save();
    res.json({
      success: true,
      msg: "Successfully created new user.",
      newUser,
      token,
    });
  }};

exports.login = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("User is not found");
    }
    const pwMatch = await bcrypt.compare(password, user.password);
    const token = await generateToken(user);
    if (!pwMatch) {
      throw new Error("Wrong password. Try again or click Forgot password to reset it.");
    }
    //DO NOT SEND BACK Password
    let dataSent = ({ user.username, user.password });
    res.send({ dataSent, token });
  } catch (error) {
    res.status(404).send("user not found");
  }
};

exports.authCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, `${process.env.SECRET}`);
    const user = await User.findOne({
      _id: decoded._id,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user; //route hanlder now will not have to fetch the user account
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};
exports.protected = async (req, res) => {
  let user = req.user;
  try {
    res.json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};
