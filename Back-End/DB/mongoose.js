const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
console.log(process.env.DATABASE);
mongoose
  .connect(`${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
