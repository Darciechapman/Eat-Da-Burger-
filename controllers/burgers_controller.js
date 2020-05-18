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
  
    router.post("/api/burgers", function(request, response) {  
        burger.insertOne(
            ["burger_name", "devoured"],
            [request.body.burger_name, request.body.devoured],
            function(result) {
                result.json({ id: result.insertId })
            }
        );
    });
});
