const express = require("express");
const ejs = require("ejs-blocks");
//const sql = require("./config/db_config")
const port = 8000;
const app = express();





app.set("views", __dirname + "/views/");
app.engine("ejs", ejs);
app.set("view engine", "ejs");



app.use(express.static('public'))




app.get("/", (req, res) => {
    // sql.query(`select * from produits`,  (error , result) => {
    //     if (error)
    //     {
    //         throw error;
    //     }
    //     else
    //     {
            //res.render("index", {title: "Jaune congo", produits: result});
            res.render("index", {title: "Jaune congo"})
      //  }
    //})

    
})


app.get("/produit/:id", (req, res) => {

    res.render("articles/detail", {title: "un article"})
})



app.listen(port, () => {
    console.log(`le serveur tourne sur http://localhost:${port}`);
})