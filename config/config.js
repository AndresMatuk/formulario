const mysql = require('mysql');
const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '@ndresMatuk_123',
database: 'nodejs_base1'
});
db.connect(function(err) {
if (err) throw err;
console.log('Base de datos conectada');
});
module.exports = db;