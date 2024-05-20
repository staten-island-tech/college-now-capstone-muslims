const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
mongoose.connect(
  `${process.env.DATABASE}`
  // `mongodb+srv://ucheong:b2ROe5Tji7raT2Ff@collegenow.oopvzbr.mongodb.net/data`
);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.error(`${err.message}`);
});
