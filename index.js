const express = require("express");
const db = require("./dataOrganizer");
const expressHandlebars = require("express-handlebars");
const robots = require("./routes/robots");
const users = require("./routes/users");

let app = express();

let url = "mongodb://localhost:27017/robots";

app.engine("handlebars", expressHandlebars());
app.set("veiws", "./views");
app.set("view engine", "handlebars");

app.use(express.static("styles"));

app.use("/", robots);

app.use("/users", users);

db.connect(url, (err, connection) => {
  if (!err) console.log("connected to mongo");

  app.listen(3000, () => console.log("up and running"));
});
