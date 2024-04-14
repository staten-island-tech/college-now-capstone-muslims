import signup from "../Back-End/Controller/authController";
const express = require("express");
const port = process.env.PORT || 5173;
const app = express();
const cors = require("cors");
let corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};
require("./DB/mongoose");
const routes = require("./Routes/index");
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());
app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
