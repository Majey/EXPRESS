const express = require("express");

// express app
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, welcome!");
});

app.get("/contacts", (req, res) => {
    res.send("Here is our contacts");
});

app.get("/about", (req, res) => {
    res.send("About US")
})

app.listen(3000);