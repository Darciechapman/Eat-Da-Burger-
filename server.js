const express = require("express");
//const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});