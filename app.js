const express = require('express');
const ejs = require('ejs');

// Config values
const PORT = 3000;
const POSTS_PER_PAGE = 5;

// snake_case
// camelCase

const app = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded( {extended: true }));

const posts = [];

// Counting the pages from 1
let currentPage = 1;

app.get('/', (req, res) => {
    // res.render("index.ejs", { posts });
    // res.render("index.ejs", { posts: posts });
    res.render("index.ejs", { posts: posts.reverse() });
});
/*
    Process and display new post data

*/


app.post('/new-post', (req, res) => {
    console.log(req.body);
    console.log(req.body["post-title"]);
    const post = {
        title: req.body["post-title"],
        date: new Date(),
        text: req.body["post-text"]
    }
    posts.push(post);
    res.redirect("/");
    // req.body.post-title
});

app.listen(PORT, () => {
    console.log(`${new Date()}: Listening on port: ${ PORT}`);
});