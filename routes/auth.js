const express = require("express");
const router = express.Router();
const { login, register, logout } = require("../controllers/auth");
const { getProfile, updateProfile } = require("../controllers/profile");
const { getCarList, addCar } = require("../controllers/car");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getprofile", getProfile);
router.post("/updateprofile", authMiddleware, updateProfile);

//Car
router.get("/carlist", getCarList);
router.post("/addcar", addCar);

module.exports = router;
