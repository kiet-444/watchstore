const mongoose = require("mongoose");
const Schema = mongoose.Schema;

commentSchema = new Schema({
    date: { type: Date, default: Date.now },
    content: {type: String, require: true},
    author:{  type: mongoose.Schema.Types.ObjectId, ref: "Members", require: true }},
    {timestamps: true})
const Comments = mongoose.model("Comments", commentSchema);
module.exports = Comments;