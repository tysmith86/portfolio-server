const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reqStr = {
  type: String,
  required: true
};

const schema = new Schema({
  title: reqStr,
  url: reqStr,
  description: reqStr

});

module.exports = mongoose.model('Project', schema);