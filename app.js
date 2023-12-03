//
import {connection_data, Database} from './db.js';
import 'express';

const app = express();
const db = Database(connection_data);

app.use()
app.get('/users', (req, res) => {
	db.query("SELECT login FROM users;" function(err, results, fields) {
		if (err) throw err;
		res.send(resuts.affectedRows)		
	}
});



 