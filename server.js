// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = [
  {
    name: "idk",
    photo: "something.jpg",
    scores: ["1", "2", "3", "4", "5", "4", "3", "2", "1", "2"]
  },
  {
    name: "Passive McNeutralGuy",
    photo:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    scores: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
  },
  {
    name: "Kylo Ren",
    photo:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    score: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "5"]
  }
];

// Routes
// =============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
