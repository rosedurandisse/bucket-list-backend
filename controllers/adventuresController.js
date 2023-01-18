//pull in the tools to create rooms of your kitchen
const express = require("express");

//the path needs these to build out certain parts
const adventures = express.Router();

const adventureArray = require("../bucketListShell.json");

//get all the activities
adventures.get("/", (request, response) => {
  response.json(adventureArray);
});

//get 1 activity
adventures.get("/:id", (request, response) => {
  const { id } = request.params;
  let foundAdventure = adventureArray.adventure.find(
    (eachElement) => eachElement.id == id
  );

  response.json(foundAdventure);
});

module.exports = adventures;
