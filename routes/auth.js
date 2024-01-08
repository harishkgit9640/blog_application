const router = require('express').Router();
const User = require('../modules/user');
const bcrypt = require('bcrypt');

//REGISTER
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hasPassword,
        });
        const user = await newUser.save();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})

//LOGIN USER
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        res.setHeader('Content-Type', 'text/plain');
        !user && res.status(400).json('Invalid username or password');
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json('Invalid username or password');
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);

    }
});

// FETCH ALL USER
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router