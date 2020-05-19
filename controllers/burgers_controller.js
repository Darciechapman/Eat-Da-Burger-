const express = require('express');
const burger = require('../models/burgers.js');

const { selectAll, insertOne, updateOne, deleteOne } = require('../config/orm');

const router = express.Router();

router.get("/", function(request, response) {
    burger.selectAll(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
      });
    });
    
  
router.post("/api/burgers", function(request, response) {  
    burger.insertOne(
        ["burger_name", "devoured"],
        [request.body.burger_name, request.body.devoured],
        function(result) {
            response.json({ id: result.insertId })
        }
    );
});

router.put("/api/burgers/:id", function(request, response) {
    let condition = "id = " + request.params.id;

    console.log("condition", condition);

    burger.updateOne({ devoured: request.body.devoured }, 
        condition, function(result) {
        if (result.chagedRows === 0) {
            response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(request, response) {
    let condition = "id = " + request.params.id;

    burger.deleteOne(condition, function(result) {
        if (result.affectedRows === 0) {
            response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});


module.exports = router;
