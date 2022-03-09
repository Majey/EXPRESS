const express = require("express");
// const path = require("path");

// const publicPath = path.join(__dirname, `public`);
// console.log(publicPath);

// express app
const app = express();

// middleware
const MW = (req, res, next) => {
    if (!req.query.age) {
        res.send("Kindly provide age");
    } else if (!req.query.age < 18) {
        res.send("Come back when you are an adult");
    } else {
        next();
    };   
};

app.use(MW);

// register view engine
app.set("view engine", `ejs`);

app.get("/student", (req, res) => {
    
    const student = {
        name: "Kevin Erick",
        email: "kevinerick@yahoo.com",
        age: 19,
        subjects: [ "Math", "Science", "GHC"],
        subjects2: [ "Math", "Physics", "Geograpgy"],
    }
    res.render("pages/student", {student});
});

app.get("/", (req, res) => {
    res.render("pages/home");
});

app.get("/contacts", (req, res) => {
    res.render("pages/contacts");
});



/*

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

*/

app.listen(3000);

