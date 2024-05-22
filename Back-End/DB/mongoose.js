const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://atlas-sql-664d127f59f74e290248c4c1-frfqx.a.query.mongodb.net/CollegeNow?ssl=true&authSource=admin"
  )
  .then(() => console.log("connected to DB"));

mongoose.connection.on("error", (err) => {
  console.log(`${err.message}`);
});
// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });
// mongoose.connection.on("error", (err) => {
//   console.error(`${err.message}`);
// });
// `mongodb+srv://ucheong:b2ROe5Tji7raT2Ff@collegenow.oopvzbr.mongodb.net/data`
