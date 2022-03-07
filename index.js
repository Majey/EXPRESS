const express = require("express");
const path = require("path");

const publicPath = path.join(__dirname, `public`);
console.log(publicPath);

// express app
const app = express();

app.get("/", (req, res) => {
    // res.send(`Hello, welcome!. My name is ${req.query.name} and I am ${req.query.age} years old`);
    res.sendFile(`${publicPath}/index.html`);
});

app.get("/contacts", (req, res) => {
    // res.send("Here is our contacts");
    res.sendFile(`${publicPath}/contacts.html`);
});

app.get("/about", (req, res) => {
    // res.send("About US")
    res.sendFile(`${publicPath}/about.html`);
})

app.listen(3000);