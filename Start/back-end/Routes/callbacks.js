const express = require("express");
const { Client } = require("pg");

const router = express.Router();

// Connection configuration
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

router.post("/callback", (req, resp) => {
	//Post req.body to the database then give a user a feedback message
	console.log("In Ryan's callback endpoint");
	console.log(req.body);
	let name = req.body.callbackName;
	let email = req.body.callbackEmail;
	let phone = req.body.callbackContact;
	try {
		let query = "INSERT INTO callbacks (name,contact,email) VALUES ($1,$2,$3)";
		client.query(query, [name, phone, email], (err, response) => {
			if (err) throw err;
			resp
				.status(200)
				.send(
					"Hi " +
						name +
						" ,your request has been received, we will be contact you"
				);
		});
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
