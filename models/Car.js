const mongoose = require("mongoose");

const varianceSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
});

const carSchema = new mongoose.Schema({
  id: String,
  carname: String,
  brand: String,
  description: String,
  variance: [varianceSchema],
});

module.exports = mongoose.model("Car", carSchema);
