var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },

    // insertOne: function (name, cb) {
    //     orm.insertOne("burgers", name, cb);
    // },

    insertOne: function(val, callback) {
        //Inserting a burger into the burgers table
        orm.insertOne("burgers", "burger_name", val, function(result) {
            //console.log("Trying to callback function in models");
            callback(result);
        });
    },

    updateOne: function (id, cb) {
        orm.updateOne("burgers", id, cb);
    }
}

module.exports = burger;