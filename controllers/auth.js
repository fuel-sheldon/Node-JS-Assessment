const User = require("../models/User");
const generateToken = require("../utils/jwtUtils");

const register = async (req, res) => {
  const { username, password, displayusername, timestamp } = req.body;

  if (!username || !password || !displayusername || !timestamp) {
    return res.status(400).json({
      status: "400",
      message: "Please add all fields",
    });
  }

  //check if user exits
  const userExits = await User.findOne({ username });
  if (userExits) {
    return res.status(400).json({
      status: "400",
      message: "User already exits",
    });
  }

  // check timestamp
  const timeExits = await User.findOne({ timestamp });
  if (timeExits) {
    return res.status(400).json({
      status: "400",
      message: "Timestamp already exits",
    });
  }

  try {
    //Create user
    const user = new User({ username, password, displayusername, timestamp });
    await user.save();
    const token = generateToken(user);
    return res.status(201).json({
      token,
      displayusername: user.displayusername,
      userid: user._id,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password, timestamp } = req.body;

  try {
    const user = await User.findOne({ username });
    const time = await User.findOne({ timestamp });
    if (!user || !time || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = generateToken(user);
    res
      .status(200)
      .json({ token, displayusername: user.displayusername, userid: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const logout = async (req, res) => {
  const { timestamp } = req.body;

  try {
    const time = await User.findOne({ timestamp: timestamp });
    if (!time) {
      return res.status(401).json({ error: "No user??" });
    }
    res.status(200).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { register, login, logout };
