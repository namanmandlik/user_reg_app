var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = {
  state: String,
  age: Number,
  ethnicity: String,
  race: String,
  sex: String,
  height: Number,
  weight: Number,
  name:String,
  desc: String,
  imageFile: String
}
// Define collection and schema for Users
var Users = new Schema(userSchema,{
    collection: 'users'
});

module.exports = mongoose.model('Users',Users);