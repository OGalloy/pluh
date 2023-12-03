//
import {connection_data, Database} from './db.js';
import express from 'express';

const app = express();
const port = 3000;
const db = new Database(connection_data);

db.connection.connect();

app.get('/users', function(req, res){
	db.connection.query("SELECT login FROM users;", function(err, results, fields) {
		if (err) throw err;
		res.send(results);
	});
});



app.listen(port, () => console.log(`Listening on ${port}`));
