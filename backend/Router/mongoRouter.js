const express = require('express');
const { controller } = require('../Mongo/mongoController');
const BlogPosts = require('../Mongo/mongoSchema');

const MongoRouter = express.Router();

MongoRouter.get("/get",async (req,res) => {
    const posts =  await controller('Get');
    res.json(posts);
});

MongoRouter.post("/add",async (req,res) => {
    console.log(req.body)
    const post = new BlogPosts({
        title:req.body.title,
        body:req.body.body,
        date:new Date().toString()
    })
    const addedPost = await controller('Add',post);
    res.json(addedPost);
});

MongoRouter.patch("/patch/:id",async (req,res) => {
    const patchedPost = await controller('Patch', {id: req.params.id, title: req.body.title});
    res.json(patchedPost);
});

MongoRouter.get("/delete/:id",async (req,res) => {
    console.log("Reaching Router");
    const deletedPost = await controller('Delete', {id: req.params.id});
    res.json(deletedPost);
});

module.exports = MongoRouter;

