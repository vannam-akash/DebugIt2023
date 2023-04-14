const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');


module.exports = {
    login: catchAsync(async (req, res) => {
        const {rollNo=1, password=1} = req.body;
        const user = await User.findOne({rollNo,password});
        if(!user) {
            res.json({});
        }
        else {
            res.json(user);
        }
    }),
}