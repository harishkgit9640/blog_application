const express = require('express')
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const users = require('./routes/Users');
const posts = require('./routes/Posts');
const category = require('./routes/Categories');
const multer = require('multer');
const app = express()

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/dbblog');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.use(express.json());
const port = 3000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, "new.png");
    }
});


const upload = multer({ storage });
app.post("/api/upload", upload.single('file'), (req, res) => {
    res.status(200).json("file uploaded successfully!");
});

app.use("/api/auth", auth);
app.use("/api/user", users);
app.use("/api/post", posts);
app.use("/api/categories", category);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server is listening on port ${port}!`))