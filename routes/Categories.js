const router = require('express').Router();
const Category = require('../modules/category');


// CREATE CATEGORY
router.post("/", async (req, res) => {
    const newCat = new Category(req.body)
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (error) {
        res.send(500).json(error.message);
    }
});

// GET CATEGORY
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.send(500).json(error.message);
    }
});

module.exports = router