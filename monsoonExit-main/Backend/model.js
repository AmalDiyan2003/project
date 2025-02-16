const mongoose = require('mongoose');
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
var blogModel = mongoose.model("model", schema); 
module.exports = blogModel;