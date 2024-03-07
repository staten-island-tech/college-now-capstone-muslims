const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
mongoose
  .connect(
    `mongodb://atlas-sql-65cd8fe8e2f8bc1f9bcc2b2d-frfqx.a.query.mongodb.net/Collegenow?ssl=true&authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to DB"));

mongoose.connection.on("error", (err) => {
  console.error(`${err.message}`);
});
