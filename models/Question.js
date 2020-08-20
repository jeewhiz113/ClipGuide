//we define the Schema here:

const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const QuestionSchema = new mongoose.Schema({
  //make an objectId property of this schema.
  name:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);