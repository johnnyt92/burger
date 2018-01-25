var express = require("express");
var bodyParser = require("body-parser");
var method = require('method-override')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));


// Override with POST having ?_method=DELETE
app.use(method("_method"));

var exhandles = require("express-handlebars");

app.engine("handlebars", exhandles({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);



app.listen(PORT);

