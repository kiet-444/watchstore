const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const memberSchema = new Schema({ 
    memberName:{ type: String, require: true}, 
    password:{ type: String, require: true}, 
    isAdmin:{type: Boolean, default: false}},
    { timestamps: true });
    
const Members = mongoose.model("Members", memberSchema);
module.exports = Members;
