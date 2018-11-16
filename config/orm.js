var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection

// Create the methods that will execute the necessary MySQL commands in the controllers
// These methods are used to retrieve and store data in the database
var orm = {
  selectAll: function (tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function (err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  insertOne: function (tableInput, colName, val, cb) {
    var query = "INSERT INTO ?? ( ?? ) VALUES (?)";
    connection.query(query, [tableInput, colName, val], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (tableInput, condition, cb) {
    connection.query("UPDATE " + tableInput + " SET devoured=1 WHERE id=" + condition + ";", function (err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;