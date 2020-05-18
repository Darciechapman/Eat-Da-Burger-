const connection = require('../config/connection.js');

function createQmarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function translateSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

let orm = {
  selectAll: function(table, cb) {

    let queryString = `SELECT * FROM ${table};`;

    connection.query(queryString, function(err, result) {

      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  InsertOne: function(table, cols, vals, cb) {

    let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${createQmarks(vals.length)});`;
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {

      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {

    let queryString = `UPDATE ${table} SET ${translateSql(objColVals)} WHERE ${condition};`;
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {

      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  deleteOne: function(table, condition, cb) {

    let queryString = `DELETE FROM ${table} WHERE ${condition};`;
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;