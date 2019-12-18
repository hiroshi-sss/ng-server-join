const mongoose = require("mongoose");
var Schema= mongoose.Schema;
var itemSchema = new Schema({
  coverImg: String,
  name: { type: String, required: true, max: [20, '最大20文字です。'] },
  price: Number,
  description: String,
  heading: {
    title1: String,
    title2: String,
    title3: String,
    text1: String,
    text2: String,
    text3: String
  }
});

module.exports = mongoose.model("Item", itemSchema);
