// routing system 
const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll() // retrieve all elements from database
    res.json(listOfPosts);  
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id
    // find post by its primary key
    const post = await Posts.findByPk(id)
    res.json(post)
});

// post request
router.post("/", async (req,res) => {
    const post = req.body; // grab post data in the body from request
    await Posts.create(post); // call sequelize function which inserts data in mySQL
    res.json(post); // confirmation object is sent
});

module.exports = router 
