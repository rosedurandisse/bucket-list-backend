//this is the dream of my kitchen
const express = require("express");
const cors = require("cors");

//this is using the tools to create my kitchen
const app = express();

//converts the ingredients to meals can eat/understnad
app.use(express.json());

//use cors to connect the front end to the back end
app.use(cors());

//import activity
const adventuresController = require("./controllers/adventuresController");

app.use("/adventures", adventuresController);

app.get("/", (request, response) => {
  response.json({ message: "Welcome to the Bucket List" });
});

module.exports = app;
