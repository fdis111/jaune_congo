const express = require("express");
const ejs = require("ejs-blocks");

const port = 8000;
const app = express();





app.set("views", __dirname + "/views/");
app.engine("ejs", ejs);
app.set("view engine", "ejs");


app.get("/", (req, res) => {

    res.send("Tout va bien");
})



app.listen(port, () => {
    console.log(`le serveur tourne sur http://localhost:${port}`);
})