const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
mongoose.connect(`${process.env.DATABASE}`);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.error(`${err.message}`);
});
