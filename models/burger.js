var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },

    insertOne: function (val, cb) {
        //Inserting a burger into the burgers table
        orm.insertOne("burgers", "burger_name", val, function (result) {
            cb(result);
        });
    },

    updateOne: function (id, cb) {
        orm.updateOne("burgers", id, cb);
    }
};

module.exports = burger;