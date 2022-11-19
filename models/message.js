//Dependencies
const mongoose = require("./connection");

//Shorthand Variables
const Schema = mongoose.Schema;
const model = mongoose.model;

//Define Message Schema
const messageSchema = new Schema({
    Content: String,
    Order: Number
});

const Message = model("Message", messageSchema);

//Export post Model
module.exports = Message;