// routing system 
const express = require('express');
const router = express.Router();
const { Comments } = require('../models');

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId
    // find post by its primary key
    const comments = await Comments.findAll({where: { PostId:postId}})
    res.json(comments)
});

router.post("/", async (req, res) => {
    const comment = req.body; // grab post data in the body from request
    await Comments.create(comment);
    res.json(comment);
  });



// export to index.js (entry point of our server) 
module.exports = router 
