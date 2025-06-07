const mongoose = require("mongoose");

const vanSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  type: String,
});

exports.Van = mongoose.model("Van", vanSchema);
