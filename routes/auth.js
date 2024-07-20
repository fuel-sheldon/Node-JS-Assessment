const express = require("express");
const router = express.Router();
const { login, register, logout } = require("../controllers/auth");
const { getProfile, updateProfile } = require("../controllers/profile");
const authMiddleware = require("../middlewares/authMiddleware");
const { getCarList, addCar } = require("../controllers/car");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getprofile", getProfile);
router.post("/updateprofile", authMiddleware, updateProfile);

//Car
router.get("/cardlist", getCarList);
router.post("/addcard", addCar);

module.exports = router;
