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

router.post("/user-authorization", (req, res) => {
	const { employeeID } = req.body;
	try {
		client.query(
			"UPDATE users SET authorized=1 WHERE employee_id=$1",
			[employeeID],
			(err, response) => {
				if (err) throw err;
				res.status(200).json({ msg: " User Successfully Authorized" });
			}
		);
	} catch (err) {
		console.error(err.message);
	}
});

router.get("/authorization-requests", (req, res) => {
	try {
		client.query(
			"SELECT employee_id FROM users WHERE authorized IS NULL",
			(err,
			(response) => {
				if (err) throw err;
				res.status(200).json(response.rows);
			})
		);
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
