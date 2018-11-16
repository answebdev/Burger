var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// router.get("/", function(req, res) {
//     res.redirect("/burgers");
// });

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (burgerData) {
        console.log(burgerData);
        res.render("index", { burgerData });
        // console.log("Welcome to GET");
        // alert("WELCOME TO GET");
    })
    // console.log("Welcome to GET");
    // alert("WELCOME TO GET");
});

// POST ROUTE (ADD A BURGER)
// router.post("/burgers/create", function(req, res) {
//     burger.insertOne([
//       "burger_name", "devoured"
//     ], [
//       req.body.name, req.body.devoured
//     ], function(result) {
//       // Send back the ID of the new burger
//       res.json({ id: result.insertId });
//     });
//   });

//   router.post('/burgers/create', function (req, res) {
// 	console.log("CREATE ROUTE WORKING...");
// 	burger.insertOne('burger_name', [req.body.name], function () {
// 		res.redirect('/burgers');
// 	});
// });

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
// router.put("/:id", function (req, res) {
//     burger.updateOne(req.body.devoured, req.params.id, function () {
//         res.redirect("/");
//     });
// });

router.put("/api/:id", function (req, res) {
    console.log(req.params);
    burger.updateOne(req.params.id, function (result) {
        console.log(result);
        // res.redirect("/");
        res.json('burger updated');
    });
});

// router.put("/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     burger.updateOne({
//       devoured: req.body.devoured
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });



// router.post("/burgers", function(req, res) {
//     burger.insertOne(
//         ["burger_name"], [req.body.burger_name], function() {
//             res.redirect("/");
//         });
//     });

// POST ROUTE (ADD A BURGER)
// router.post("burgers/create", function(req, res) {
//     burger.insertOne(req.body.burger_id, function(result) {
//         console.log(result);
//         res.redirect("/");
//     })
// })


// UPDATE ROUTE
// router.put("/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.updateOne({
//       devoured: req.body.devoured
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });


// UPDATE ROUTE
// router.put("/burgers/update", function(req, res) {
//     burger.updateOne(req.body.burger_id, function(result) {
//         console.log(result);
//         res.redirect("/");
//     })
// });





// router.post("/api/cats", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
