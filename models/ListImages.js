const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
    //name : { type: String, required: true, unique: true },
    //player1:{ type: Schema.Types.ObjectId, ref: 'ProfileUser',required:true},
    urlImage: {type: String, required: true},
    //username:{type: String, ref: 'ProfileUser', required:true},
    hashtagImage: {type: String, required:true},
    ProfileUser: [{ type: Schema.Types.ObjectId, ref: 'ProfileUser', required: true }]
},{
    timestamps: true
});



  
  module.exports = mongoose.model("ListImages", ImagesSchema);