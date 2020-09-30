const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgerController.js");

const PORT = process.env.PORT || 8080;

const server = express();

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.engine("handlebars", exphbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

server.use(routes);

server.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});