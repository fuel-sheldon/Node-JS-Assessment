// Importing required modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const bodyParser = require("body-parser");

// Creating an Express application instance
const app = express();
dotenv.config();
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//routers
const authRouter = require("./routes/auth");

//Routing
app.use("/api", authRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Hi");
});
