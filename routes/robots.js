const express = require("express");
const routes = express.Router();
const db = require("../dataOrganizer");
const app = express();

app.use(express.static("styles"));

routes.get("/", (req, res) =>{
  let collection = db.get().collection("data");

  collection.find({}).toArray((err, data) =>{
    res.render("home",{robots: data});
  });
});

module.exports = routes
