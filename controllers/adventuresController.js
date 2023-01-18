//pull in the tools to create rooms of your kitchen
const express = require("express");

//the path needs these to build out certain parts
const adventures = express.Router();

const adventureArray = require("../bucketListShell.json");

//get all the activities
adventures.get("/", (request, response) => {
  response.json(adventureArray);
});

adventures.get("/:id", (request, response) => {
  const { id } = request.params;
  let foundAdventure = "";

  //get activity by letter
  if (id.match(/[a-zA-Z]/g)) {
    foundAdventure = adventureArray.adventures.filter((eachElement) => {
      return eachElement.title.toLowerCase().includes(id);
    });

    //get activity by number
  } else {
    foundAdventure = adventureArray.adventures.find(
      (eachElement) => eachElement.id == id
    );
  }
  response.json(foundAdventure);
});

module.exports = adventures;
