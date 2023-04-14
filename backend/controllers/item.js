const Item = require('../models/item');
const catchAsync = require('../utils/catchAsync');


module.exports = {
    reportItem: catchAsync(async (req, res) => {
        res.send("Item Reported!!!!");
    }),
}