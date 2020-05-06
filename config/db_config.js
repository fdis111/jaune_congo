const mysql = require("mysql");

const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "jaune_congo"
});

sql.connect( (error) => {
    if (error) 
    {
        throw error    
    }
    else
    {
        console.log("la connexion est etabli");
        
    }
});

module.exports = sql;
