const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const uri = process.env.MONGO_URL

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(uri)
// Connect to MongoDB
main().catch(err => console.log('There was an error connecting to mongoose :(', err));
async function main() {
  // await mongoose.connect(uri,{useNewUrlParser:true});
  await mongoose.connect('mongodb://0.0.0.0:27017/debugit23');
  console.log('Sucessfully connected to mongoose!')
}

// Requiring models
const User = require('./models/user');
const Item = require('./models/item');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Requiring routes
app.use('/items', require('./routes/item'));
app.use('/users', require('./routes/user'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
