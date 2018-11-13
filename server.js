// NPM packages that to give our server useful functionality
var express = require("express");
// var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
// var path = require("path");

// Tell Node that we are creating an "Express" server
var app = express();
// app.use(express.static(__dirname + "/public"));

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set initial port, which we will use later in our listener
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// ==========================================================================
// BODY PARSER
// Create application/x-www-form-urlencoded parser
// app.use(bodyParser.urlencoded({ extended: true }));

// // Parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }))

// // Parse some custom thing into a Buffer
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// // Parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html' }))

// ==========================================================================

// Access CSS and images directory
// app.use(express.static(path.join(__dirname, './app/public')));
// app.use(express.static(path.join(__dirname, './app/public/img')));

// Include route files
// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);

// Code to start the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
