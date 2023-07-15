const router = require('express').Router();
const Post = require('../modules/post');

//CREATE POST
router.post('/', async (req, res) => {
    const post = await new Post(req.body)
    try {
        const data = await post.save();
        res.status(200).json({ "data": data, "message": "post inserted successfully!" })
    } catch (error) {
        res.status(400).json({ "error": error.message, "message": "post not inserted!" })
    }
});

//UPDATE POST  
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(401).json("you can update only your post!")
        }
    } catch (error) {
        res.status(500).json(error);
    }

})
//DELETE DELETE  
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const post = await Post.findByIdAndDelete(req.params.id);
                res.status(200).json({ "message": "post Deleted Successfully!", "response": post });
            } catch (error) {
                res.status(500).json({ "error": error.message, "post": post });
            }
        } else {
            res.status(401).json("you can delete only your post!")
        }
    } catch (error) {
        res.status(500).json(error.message);
    }

})

// FETCH A POST
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
})

// FETCH ALL POST
router.get('/', async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username: username });
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
})

module.exports = router