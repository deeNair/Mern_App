const mongoose  = require('mongoose');

//const Schema = require('mongoose').Schema;
const Schema = mongoose.Schema;
const autoIncrement= require('mongoose-auto-increment');

const jSchema = new Schema({
  company: { type: String, required: true },position: { type: String, required: true},
  jobstatus:{type:String, required:true},
  recruiterEmail:{type:String}
}, {
  timestamps: true
  
  
});
autoIncrement.initialize(mongoose.connection);
jSchema.plugin(autoIncrement.plugin, 'Jobs');
//make a model,jobs a collection
const Jobs = mongoose.model('Jobs',jSchema);
module.exports = Jobs;
