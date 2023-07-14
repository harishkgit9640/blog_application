const express = require('express')
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const users = require('./routes/Users');
const app = express()

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/dbblog');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.use(express.json());
const port = 5000

app.use("/api/auth", auth);
app.use("/api/users", users);
app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Server is listening on port ${port}!`))