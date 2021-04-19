const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

var users = []

app.get('/', (req, res) => {
	res.send('Holaa!!');
})

app.post('/register', (req, res) => {
	// Chequear si el usuario ya existe!
	let userExist = false;
	for (let i = 0; i < users.length; i++) {
		if (req.body.email === users[i].email) {
			userExist =true
		}
	}
	if (!userExist) {
		const newUser = {
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		}

		users.push(newUser);
		console.log('--Created new user--\nActive users:');
		console.log(users);
		res.send({ result: 'Success' });	
	} else {
		console.log('--User already exists--');
		res.status(400).send({ result: 'Failed' });
	}
	
})

app.put('/login', (req, res) => {
	let validUser = false;
	for (let i = 0; i < users.length; i++) {
		if (req.body.email === users[i].email) {
			if (req.body.password === users[i].password) {
				validUser = true;
			}
		}
	}
	if (validUser) {
		console.log('--New login--\nUser:')
		console.log('-email: ' + req.body.email);
		console.log('-password: ' + req.body.password);
		res.send({ result: 'Success' });	
	} else {
		console.log('--Invalid User--');
		res.status(401).send({ result: 'Failed' });
	}
	
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})