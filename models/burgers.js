const orm = require("./config/orm.js");

orm.selectAll("burger_name");

orm.insertOne("burger_name");

orm.updateOne("burger_name, devoured");