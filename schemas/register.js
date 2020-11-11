const mongoose = require("mongoose");

RegistrationSchema = mongoose.Schema({
  name: {
    type: String,

  },
  email: {
    type: String,
    unique:true,
   
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  educationLevel: {
    type: String,
  },
  availableLearningTime:{
    type: String,
  },
  whyJoinUs:{
    type:String,
  },
  stack:{
    type:String
  },
  previousTeckKnowledge:{
    type:String
  },
  otherNeccessaryInfo:{
    type:String
  },
  date: {
    type: Date,
    default: Date.now(),
  },
 
   
   
 
});

const PostModel = mongoose.model("register", RegistrationSchema);

module.exports = PostModel;
