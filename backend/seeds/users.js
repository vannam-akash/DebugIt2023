const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user");

// Connect to MongoDB
main().catch((err) =>
  console.log("There was an error connecting to mongoose :(", err)
);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/debugit23");
  console.log("Sucessfully connected to mongoose!");

  await User.deleteMany();

  let users = [
    {
      name: "Rohan Awasthi",
      rollNo: "1",
      phoneNumber: 0000,
      email: "rohan@gmail.com",
      password: "1",
    },
    {
      name: "Aditya Laddha",
      rollNo: "2",
      phoneNumber: 0001,
      email: "aditya@gmail.com",
      password: "2",
    },
    {
      name: "Raj Naik",
      rollNo: "3",
      phoneNumber: 0003,
      email: "raj@gmail.com",
      password: "3",
    },
    {
      name: "Mithun Ghorpade",
      rollNo: "4",
      phoneNumber: 0004,
      email: "mithun@gmail.com",
      password: "4",
    },
  ];

  // Hash passwords before saving
  for (const user of users) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password.toString(), salt);
    user.password = hash;
  }
  User.insertMany(users)
    .then(() => {
      console.log("Users saved to database");
    })
    .catch((err) => {
      console.error("Error saving users to database", err);
    });
}
