const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
    id: {type:String, required:true},
    urlImage: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    hashtagImage: {type: String, required:true},
    user: [{ type: Schema.Types.ObjectId, ref: 'ProfileUser', required: true }]
},{
    timestamps: true
});



  
  module.exports = mongoose.model("ListImages", ImagesSchema);