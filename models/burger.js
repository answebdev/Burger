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

    insertOne: function (val, cb) {
        //Inserting a burger into the burgers table
        orm.insertOne("burgers", "burger_name", val, function (result) {
            cb(result);
        });
    },

    // updateOne: function (id, cb) {
    //     orm.updateOne("burgers", id, cb);
    // }

    // updateOne: function (newInput, pageId, cb) {
    //     //Updating devoured column to true based on burger ID
    //     orm.updateOne("burgers", "devoured", newInput, "id", pageId, function (result) {
    //         cb(result);
    //     });
    // }

    updateOne: function (id, cb) {
        orm.updateOne("burgers", id, cb);
    }

    // updateOne: function(objColVals, condition, cb) {
    //     orm.updateOne("burgers", objColVals, condition, function(res) {
    //       cb(res);
    //     });
    //   }


};

module.exports = burger;