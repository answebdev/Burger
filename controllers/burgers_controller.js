var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// GET ROUTE
router.get("/", function (req, res) {
    burger.selectAll(function (burgerData) {
        console.log(burgerData);
        res.render("index", { burgerData });
    })
});

// POST ROUTE (ADD A BURGER)
router.post("/burgers", function (req, res) {
    console.log(req.body.burger);
    burger.insertOne([
        req.body.burger
    ], function () {
        res.redirect("/");
    });
});

// UPDATE ROUTE
router.put("/api/:id", function (req, res) {
    console.log(req.params);
    burger.updateOne(req.params.id, function (result) {
        res.json('Burger updated');
    });
});

// Export routes for server.js to use.
module.exports = router;