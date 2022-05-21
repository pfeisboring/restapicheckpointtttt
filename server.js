const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectdb.js");
const router = require("./routes/user");
app.use(express.json());
connectDB();

app.use("/api/users", router);
const port = 5000;
app.listen(port, (err) =>
  err
    ? console.log("ERROOOOR!!!", err)
    : console.log(`this server is running on port : ${port}`)
);
