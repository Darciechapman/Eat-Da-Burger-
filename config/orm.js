const connection = require('../config/connection.js');

let orm = {
  selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  InsertOne: function(whatToSelect, table, orderCol) {
    var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?);";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
    connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
    function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;