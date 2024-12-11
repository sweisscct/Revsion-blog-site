const express = require('express');
const ejs = require('ejs');

const PORT = 3000;
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(index.ejs);
});

app.post('/new-post', (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`${new Date()}: Listening on port: ${ PORT}`);
});