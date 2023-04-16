const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require("bcrypt");

module.exports = {
    login: catchAsync(async (req, res) => {
        let {rollNo=1, password=1} = req.body;
        // const salt = bcrypt.genSaltSync(10);
        // password = bcrypt.hashSync(password.toString(), salt);
        const user = await User.findOne({rollNo});
        const passMatch = await bcrypt.compare(password,user.password); 
        if(!passMatch) {
            res.json({});
        }
        else {
            res.json(user);
        }
    }),
    showUser: catchAsync(async(req,res)=>{
        const {id} = req.params;
        const user = await User.findById(id);
        res.json(user);
    })
}