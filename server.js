const express = require("express");

const PORT = process.env.PORT || 8080;

const server = express();

// Serve static content for the app from the "public" directory in the application directory.
server.use(express.static("public"));

// Parse application body as JSON
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

server.engine("handlebars", exphbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

server.use(routes);

server.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});