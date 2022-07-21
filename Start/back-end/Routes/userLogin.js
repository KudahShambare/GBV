require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

router.post("/user-login", (req, res) => {
	const { employeeID, password, userName } = req.body;
	const query = "SELECT * FROM users WHERE employee_id=$1";
	try {
		client.query(
			query,
			[employeeID ? employeeID : userName],
			async (err, response) => {
				if (err) throw err;
				if (response.rows < 1) {
					res.status(400).json({ Msg: "User not found" });
				} else {
					console.log("This is the hash", response.rows[0].password);
					console.log("This is the auth column", response.rows[0].authorized);

					/*
					Ryan this is from Omar:
					I want to be able to get the full name of the person who has signed in, how would I do this?
					Response: I have included the username in the response message, you can access it there Omar
					*/
					console.log("This is the username column", response.rows[0].name);

					const accessToken = jwt.sign(
						employeeID ? employeeID : userName,
						process.env.ACCESS_SECRET
					);

					const authenticated = await bcrypt.compare(
						password,
						response.rows[0].password
					);
					const authorized = response.rows[0].authorized;
					authenticated && authorized
						? res.status(200).json({
								msg: "Success",
								name: response.rows[0].name,
								accessToken: accessToken,
						  })
						: authenticated
						? res.status(400).json({ msg: "User not yet authorized" })
						: res.status(400).json({ msg: "Incorrect password" });
				}
			}
		);
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
