var express = require("express");
var router = express.Router();

var toys = [{
    id: 1,
    category: "Chew Toy",
    isSqueaky: true
},{
    id: 2,
    category: "Bone",
    isSqueaky: false
},{
    id: 3,
    category: "Rope",
    isSqueaky: false
},{
    id: 4,
    category: "Stuff Animal",
    isSqueaky: true
}];

router.get("/", function(req, res, next) {
    res.json({toys});
});
router.get("/:id", function(req, res, next) {
    res.json({toy: toys[req.params.id - 1]});
});

module.exports = router;
