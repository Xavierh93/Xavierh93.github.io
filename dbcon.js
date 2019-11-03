
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs340_hollingx',
    password: '',
    database: 'cs340_hollingx'
});
module.exports.pool = pool;