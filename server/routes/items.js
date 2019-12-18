const express = require("express");
const router = express.Router();
const Item = require("../model/item");

router.get("", (req, res) => {
  Item.find({}, (err, foundItems) => {
    return res.json(foundItems);
  });
});

router.get("/:itemId", (req, res) => {
  const itemId = req.params.itemId;
  Item.findById(itemId, (err, foundItem) => {
    if (err) {
      return res.status(422).send({
        Error: { Title: "Item Error.", Detail: "ItemID not found" }
      });
    }
    return res.json(foundItem);
  });
});

module.exports = router;
