const Item = require("../models/item");
const catchAsync = require("../utils/catchAsync");

module.exports = {
  reportItem: catchAsync(async (req, res) => {
    const it = req.body;
    const item = new Item(it);
    item.save();
    res.json(item);
  }),
  index: catchAsync(async (req, res) => {
    const items = await Item.find().populate("finder").populate("claims");
    res.json(items);
  }),
  showItem: catchAsync(async (req, res) => {
    const { id } = req.params;
    const item = await Item.findById(id).populate("finder").populate("claims");
    res.json(item);
  }),
  setClaim: catchAsync(async (req, res) => {
    const { id, cId } = req.params;
    const item = await Item.findById(id);
    if (!item.claims.includes(cId)) {
      item.claims.push(cId);
      await item.save();
    }
    res.json(item);
  }),
  newItem: catchAsync(async (req, res) => {
    const { category, desc, foundDate, foundLocation, finder } = req.body;
    console.log(category, desc, foundDate, foundLocation, finder);
    const item = new Item({ category, desc, foundDate, foundLocation, finder });
    await item.save();
    console.log(item);

    res.json(item);
  }),
  deleteItem: catchAsync(async (req, res) => {
    const { id } = req.params;
    const item = await Item.findByIdAndDelete(id).populate("finder");
    console.log(item);
    res.send(item);
  }),
  updateItem: catchAsync(async (req, res) => {
    const { id } = req.params;
    const { category, desc, foundDate, foundLocation } = req.body;
    console.log({ category, desc, foundDate, foundLocation });
    const item = await Item.findByIdAndUpdate(id, {
      category,
      desc,
      foundDate,
      foundLocation
    });
    await item.save();
    res.json(item);
  }),
};
