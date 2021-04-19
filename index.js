const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

users = []

app.get('/', (req, res) => {
	res.send('Holaa!!');
})

app.post('/register', (req, res) => {
	// Chequear si el usuario ya existe!
	const newUser = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	}

	users.push(newUser);
	console.log(users);
	res.send({ result: 'Success' });
})

app.put('/login', (req, res) => {
	console.log('New login:')
	console.log('-email: ' + req.body.email);
	console.log('-password: ' + req.body.password);
	res.send({ result: 'Success' });
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})