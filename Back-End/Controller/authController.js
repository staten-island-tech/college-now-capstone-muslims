const userAuth = require("../Models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = async function (user) {
  const token = jwt.sign({ _id: user._id }, `${process.env.SECRET}`, {
    expiresIn: 60 * 60,
  });
  return token;
};

exports.signup = async function (req, res) {
  let username = req.body.username;
  let email = req.body.email;
  const user = await userAuth.findOne({ username });
  const userEmail = await userAuth.findOne({ email });
  if (userEmail) {
    return res.status(409).json({
      error: "Email has already been taken. Please choose another one.",
    });
  } else if (user) {
    return res.status(409).json({
      error: "Username has already been taken. Please choose another one.",
    });
  } else {
    let newUser = new userAuth(req.body);
    const token = await generateToken(newUser);
    await newUser.save();
    return res.json({
      success: true,
      msg: "Successfully created new user.",
      newUser,
      token,
    });
  }
};

exports.login = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    const user = await userAuth.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const pwMatch = await bcrypt.compare(password, user.password);
    if (!pwMatch) {
      return res.status(401).json({ error: "Password is incorrect" });
    }
    const token = await generateToken(user);
    return res.send({
      success: true,
      token: token,
      user: { username: user.username },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An unexpected error occurred. Please try again." });
  }
};

exports.authCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, `${process.env.SECRET}`);
    const user = await userAuth.findOne({
      _id: decoded._id,
    });
    if (!user) {
      throw new Error("User not found.");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
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
