const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Ucheong:fORtIl08bOaGEl7J@cluster0.swvkl6f.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to DB"));

mongoose.connection.on("error", (err) => {
  console.log(`${err.message}`);
});
