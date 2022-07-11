var mysql = require('mysql');
var conn = mysql.createPool({
  host: 'sql596.main-hosting.eu', // Replace with your host name
  user: 'u796089999_iot',      // Replace with your database username
  password: 'Azdcgbjml-123',      // Replace with your database password
  database: 'u796089999_iot' // // Replace with your database Name
}); 
 
conn.getConnection(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;