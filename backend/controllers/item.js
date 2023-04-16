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
        const items = await Item.find().populate('finder').populate('claims');
        res.json(items);
    }),
    showItem: catchAsync(async(req,res)=>{
        const {id} = req.params;
        const item = await Item.findById(id).populate('finder').populate('claims');
        res.json(item);
    }),
    setClaim: catchAsync(async(req,res)=>{
        const {id,cId} = req.params;
        const item = await Item.findById(id);
        if(!item.claims.includes(cId))
        {
            item.claims.push(cId);
            await item.save();
        }
        res.json(item);
    })
}