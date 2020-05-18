const connection = require('../config/connection.js');

let orm = {
  selectAll: function(table, cb) {

    var queryString = `SELECT * FROM ${table};`;

    connection.query(queryString, function(err, result) {
      
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  InsertOne: function(table, cols, vals, cb) {

    var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${createQmarks(vals.length)});`;
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {

      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {

    var queryString = `UPDATE ${table} SET ${translateSql(objColVals)} WHERE ${condition};`;
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {

      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;