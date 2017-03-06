var express = require("express");
var router = express.Router();

var dogs = [{
    id: 1,
    name: "Kyle",
    toys: [1, 2]
},{
    id: 2,
    name: "CJ",
    toys: [2]
},{
    id: 3,
    name: "Roberto",
    toys: []
},{
    id: 4,
    name: "Elana",
    toys: [1, 3, 4]
}];

router.get("/", function(req, res, next) {
    res.json({dogs});
});
router.get("/:id", function(req, res, next) {
    res.json({dog: dogs[req.params.id]});
});

module.exports = router;
