const Item = require('../models/item');
const catchAsync = require('../utils/catchAsync');


module.exports = {
    reportItem: catchAsync(async (req, res) => {
        const it = req.body;
        const item = new Item(it);
        item.save();
        res.json(item);
    }),
    index: catchAsync(async(req,res)=>{
        const items = await Item.find();
        res.json(items);
    })
}