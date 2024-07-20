const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    { uid: user._id, displayusername: user.displayusername },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

module.exports = generateToken;
