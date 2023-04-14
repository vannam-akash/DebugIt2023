const mongoose = require('mongoose');
const User = require('../models/user');

// Connect to MongoDB
main().catch(err => console.log('There was an error connecting to mongoose :(', err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/debugit23');
    console.log('Sucessfully connected to mongoose!')


    await User.deleteMany({});

    let u1 = new User({
        name: "Rohan Awasthi",
        rollNo: 1,
        phoneNumber: 0000,
        email: "rohan@gmail.com",
        password: 1
    });
    await u1.save();

    let u2 = new User({
        name: "Aditya Laddha",
        rollNo: 2,
        phoneNumber: 0001,
        email: "aditya@gmail.com",
        password: 2
    });
    await u2.save();

    let u3 = new User({
        name: "Raj Naik",
        rollNo: 3,
        phoneNumber: 0003,
        email: "raj@gmail.com",
        password: 3
    });
    await u3.save();

    let u4 = new User({
        name: "Mithun Ghorpade",
        rollNo: 4,
        phoneNumber: 0004,
        email: "mithun@gmail.com",
        password: 4
    });
    await u4.save();    
};