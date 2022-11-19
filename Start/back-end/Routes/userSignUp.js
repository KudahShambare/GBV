const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const { Client } = require("pg");

// Connection configuration

const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

router.post("/users", async (req, resp) => {
	try {
		console.log(req.body);
		let { fullname, employeeID, password, userName } = req.body;
		let dateCreated = new Date();
		const hashedPassword = await bcrypt.hash(password, 10);
		let socialWorkerQuery =
			"INSERT INTO users (name,employee_id,password, date_created, role_id) VALUES ($1,$2,$3,$4, (SELECT id FROM roles WHERE name=$5))";
		let funderQuery =
			"INSERT INTO users (employee_id, password, date_created, role_id) VALUES($1,$2,$3, (SELECT id FROM roles WHERE name=$4))";
		if (!employeeID) {
			client.query(
				funderQuery,
				[userName, hashedPassword, dateCreated, userType],
				(err, response) => {
					if (err) throw err;
					resp
						.status(200)
						.send(
							`Welcome ${userName}! Your details have been received and an admin will approve your request.`
						);
				}
			);
		} else {
			client.query(
				socialWorkerQuery,
				[fullname, employeeID, hashedPassword, dateCreated, userType],
				(err, response) => {
					if (err) throw err;
					resp
						.status(200)
						.send(
							`Welcome ${fullname}! Your details have been received and an admin will approve your request.`
						);
				}
			);
		}
	} catch (err) {
		console.error(err.message);
		resp.status(400).send(`${err.message}`);
	}
});

module.exports = router;
