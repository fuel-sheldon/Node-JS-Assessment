// Assuming you have access to the User model and jwtConfig
const User = require("../models/User");

const getProfile = async (req, res) => {
  const { timestamp } = req.body;

  try {
    const user = await User.findOne({ timestamp: timestamp });

    if (!user) {
      return res.status(401).json({ error: "No user??" });
    }

    // Extract relevant user information
    const { username, displayusername, _id } = user;
    return res.status(200).json({ username, displayusername, userid: _id });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const updateProfile = async (req, res) => {
  const { displayusername, timestamp } = req.body;

  if (!displayusername || !timestamp) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    user.displayusername = displayusername;
    user.timestamp = timestamp;

    await user.save();

    return res.status(200).json({ msg: "User profile updated successfully" }); // Successfully updated
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { getProfile, updateProfile };
