const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//This schema is for the one Row or document
const BlogPostSchema = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});


module.exports = mongoose.model("BlogPosts", BlogPostSchema)
