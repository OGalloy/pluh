import 'dotenv/config';
import * as mysql from 'mysql';
const connection_data = {
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER_LOGIN,
	database: process.env.MYSQL_DATABASE_NAME,
	password: process.env.MYSQL_USER_PASS
}

class Database {
	constructor(username, hostname, password, database_name) {
		this.username = username;
		this.hostname = hostname;
		this.password = password;
		this.database_name = database_name;
		this.connection = mysql.createConnection(connection_data);
	}

	close_connection() {
		this.connection.end();
		console.log("Mysql connection closing.");
	}

	is_connecting()  {
		if (this.connection) {
			return true;
		}
	}	
}


export {connection_data, Database};
