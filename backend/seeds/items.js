const mongoose = require("mongoose");
const Item = require("../models/item");

// Connect to MongoDB
main().catch((err) =>
  console.log("There was an error connecting to mongoose :(", err)
);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/debugit23");
  console.log("Sucessfully connected to mongoose!");

  await Item.deleteMany({});

  let now = new Date();
  now = now.toLocaleDateString();

  let items = [
    {
      category: "Electronics",
      desc: "Black wired headphones",
      foundDate: now,
      foundLocation: "G4 hall",
      finder: "643957c0bca925a1e58df2c7",
      claims: []
    },
    {
      category: "Personal belongings",
      desc: "Milton water bottle",
      foundDate: now,
      foundLocation: "Limbdi Corner",
      finder: "643957c0bca925a1e58df2c7",
      claims: []
    },
    {
      category: "Documents",
      desc: "Health Diary",
      foundDate: now,
      foundLocation: "Student Health-Care Centre",
      finder: "643957c0bca925a1e58df2c7",
      claims: []
    },
    {
      category: "Sports Item",
      desc: "Badmitton Racket",
      foundDate: now,
      foundLocation: "SAC",
      finder: "643957c0bca925a1e58df2c7",
      claims: []
    },
    {
      category: "Currency",
      desc: "5000 INR",
      foundDate: now,
      foundLocation: "LT-1",
      finder: "643957c0bca925a1e58df2c7",
      claims: []
    },
  ];

  Item.insertMany(items)
    .then(() => {
      console.log("Items saved to database");
    })
    .catch((err) => {
      console.error("Error saving users to database", err);
    });
}
