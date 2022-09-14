const mysql = require('mysql');
const sqlite3 = require("sqlite3").verbose()

const dbProd = mysql.createPool({
  host: 'sql596.main-hosting.eu', // Replace with your host name
  user: 'u796089999_iot',      // Replace with your database username
  password: 'Azdcgbjml-123',      // Replace with your database password
  database: 'u796089999_iot' // // Replace with your database Name
}); 
 
dbProd.getConnection(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});


const dbDev = new sqlite3.Database('../api/config/dev.sqlite3', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection sqliteDB");
});

module.exports = {dbProd,dbDev};