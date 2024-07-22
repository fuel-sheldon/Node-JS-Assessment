const express = require("express");
const router = express.Router();
const { login, register, logout } = require("../controllers/auth");
const { getProfile, updateProfile } = require("../controllers/profile");
const { getCarList, addCar } = require("../controllers/car");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/session/login", login);
router.post("/session/logout", logout);
router.get("/getprofile", authMiddleware, getProfile);
router.post("/updateprofile", authMiddleware, updateProfile);

//Car
router.get("/carlist", getCarList);
router.post("/addcar", addCar);

module.exports = router;
