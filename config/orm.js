// Import MySQL connection.
// var connection = require("./connection.js");
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

  // insertOne: function(tableInput, cols, vals, cb) {
  //   var queryString = "INSERT INTO " + tableInput;

  //   queryString += " (";
  //   queryString += cols.toString();
  //   queryString += ") ";
  //   queryString += "VALUES (";
  //   queryString += printQuestionMarks(vals.length);
  //   queryString += ") ";

  //   console.log(queryString);

  //   connection.query(queryString, vals, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },

  // insertOne: function (tableInput, val, cb) {
  //   connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES ('" + val + "');", function (err, result) {
  //     if (err) throw err;
  //     cb(result);
  //   });
  // },

  insertOne: function (tableInput, colName, val, cb) {
    var query = "INSERT INTO ?? ( ?? ) VALUES (?)";
    connection.query(query, [tableInput, colName, val], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // updateOne: function (tableInput, condition, cb) {
  //   connection.query("UPDATE " + tableInput + "SET devoured=true WHERE id=" + condition + ";", function (err, result) {
  //     if (err) throw err;
  //     cb(result);
  //   })
  // }

  updateOne: function(tableInput, colName, newInput, colId, pageId, cb) {
    var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(query, [tableInput, colName, newInput, colId, pageId], function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        console.log("Successfully updated!c");
    });
}

// updateOne: function(table, objColVals, condition, cb) {
//   var queryString = "UPDATE " + table;

//   queryString += " SET ";
//   queryString += objToSql(objColVals);
//   queryString += " WHERE ";
//   queryString += condition;

//   console.log(queryString);
//   connection.query(queryString, function(err, result) {
//     if (err) {
//       throw err;
//     }

//     cb(result);
//   });
// }


};




// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//   var arr = [];

//   // loop through the keys and push the key/value as a string int arr
//   for (var key in ob) {
//     var value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//       // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }

// // Object for all our SQL statement functions.
// var orm = {
//   all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   create: function(table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },
//   // An example of objColVals would be {name: panther, sleepy: true}
//   update: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },
//   delete: function(table, condition, cb) {
//     var queryString = "DELETE FROM " + table;
//     queryString += " WHERE ";
//     queryString += condition;

//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   }
// };

// Export the orm object for the model (cat.js).
module.exports = orm;
