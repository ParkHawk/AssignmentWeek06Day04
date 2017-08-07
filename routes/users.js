const express = require("express");
const routes = express.Router();
const db = require("../dataOrganizer");
const app = express();

app.use(express.static("styles"));

routes.get("/:username", (req, res) => {
  let collection = db.get().collection("data")

  collection.find({username: req.params.username }).toArray((err, data) => {
    res.render("profile", {robots: data});
  });

});

module.exports = routes;
