const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.sendFile(`${__dirname}/views/index.html`);
})

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.sendFile(`${__dirname}/views/about.html`);
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page (must alway be at the bottom of the file)
app.use((req, res) => {
    res.status(404).sendFile(`${__dirname}/views/404.html`);
})