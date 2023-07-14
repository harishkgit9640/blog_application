const router = require('express').Router();
const User = require('../modules/user');
const bcrypt = require('bcrypt');

//UPDATE USER  
router.put('/:id', async (req, res) => {
    if (req.params.id === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("you can update only your account!")
    }
})
//DELETE USER  
router.delete('/:id', async (req, res) => {
    if (req.body.id === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username })
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User Deleted Successfully!");
            } catch (error) {
                res.status(500).json({ "error": error.message, "user": user });
            }
        } catch (error) {
            res.status(404).json({ "Message": "User Not found !", "error": error.message })
        }
    } else {
        res.status(401).json("you can Delete only your account!")
    }
})

// FETCH ALL USER
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
})

module.exports = router