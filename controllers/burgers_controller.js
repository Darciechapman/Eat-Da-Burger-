const express = require('express');

const connection = require('../config/connection.js');
const burgerJs = require('../models/burger.js');

const router = express.Rounter();

router.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) throw err;
  
        res.render("index", { burgers: data });
    });
});
  
app.post("/", function(req, res) {  
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
        if (err) throw err;
  
        res.redirect("/");
    });
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});