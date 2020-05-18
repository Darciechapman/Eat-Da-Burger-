const express = require('express');

const connection = require('../config/connection.js');
const burger = require('../models/burger.js');

const router = express.Rounter();

router.get("/", function(request, response) {
    burger.selectAll(function(data) {
        let handlebarsObj = {
            burgers: data
        };
        console.log(handlebarsObj);
        response.render("index", handlebarsObj);
    })
});
  
app.post("/", function(req, res) {  
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
        if (err) throw err;
  
        res.redirect("/");
    });
});