const mySql = require('mysql');

// Connect with MySql
const DB = mySql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'monster shop'
})

// Checking Connection (kiểm tra kết nối)
DB.connect(function(err) {
	if (err) {
		console.log('Connect Database Failure !!');
		console.log('error message :', err);
	}else{
		console.log('Connect Database Successfully !!');
		
	}
	});
module.exports = DB;