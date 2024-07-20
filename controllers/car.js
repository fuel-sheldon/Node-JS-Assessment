const Car = require("../models/Car");

const getCarList = async (req, res) => {
  try {
    const { carname = "", pageindex = 1, pagesize = 10, timestamp } = req.query;

    const query = carname ? { carname: new RegExp(carname, "i") } : {};
    const skip = (pageindex - 1) * pagesize;
    const limit = parseInt(pagesize);

    const totalcount = await Car.countDocuments(query);
    const list = await Car.find(query).skip(skip).limit(limit);

    res.json({ list, totalcount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCar = async (req, res) => {
  const { list } = req.body;
  try {
    const cars = await Car.insertMany(list);
    res.json({ msg: "Cars added successfully", cars });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

module.exports = { getCarList, addCar };
