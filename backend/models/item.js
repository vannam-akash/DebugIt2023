const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: {
    type: String,
    enum: [
      "Documents",
      "Currency",
      "Electronics",
      "Sports Item",
      "Stationery",
      "Vehicles",
      "Personal belongings",
      "Miscellaneous",
    ],
    // required: true,
  },
  desc: {
    type: String,
    // required: true,
  },
  foundDate: {
    type: String,
    // required: true,
  },
  foundLocation: {
    type: String,
    // required: true,
  },
  finder: {
    type: Schema.Types.ObjectId,
    ref: "User",
    // required: true
  },
  claims: [{
    type: Schema.Types.ObjectId,
    default: [],
    ref: 'User'
  }]
});

if (!mongoose.models.Item) {
  const Item = mongoose.model("Item", itemSchema);
  module.exports = Item;
} else {
  module.exports = mongoose.models.Item;
}
