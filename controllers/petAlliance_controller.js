var express = require("express");

var router = express.Router();

// Import the model (dog.js) to use its database functions.
var dog = require("../models/petAlliance.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  dog.all(function(data) {
    var hbsObject = {
      dogs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/dogs", function(req, res) {
  dog.create([
    "name", "spayed"
  ], [
    req.body.name, req.body.spayed
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/dogs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  dog.update({
    spayed: req.body.spayed
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/dogs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  dog.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
