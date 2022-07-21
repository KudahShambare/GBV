require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const { Client } = require("pg");

const router = express.Router();

//Middleware
authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	if (!token) return res.sendStatus(401);

	jwt.verify(token, process.env.ACCESS_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
};

// Connection configuration

const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

// ? send case_status_id through and have that determine the status displayed
router.get("/social-worker-dashboard", authenticateToken, (req, res) => {
	try {
		client.query(
			"SELECT case_number, case_type.name AS case_type, gender.name AS gender, languages, races.name AS ethnicity, education_level,type_of AS abuse, relationship_to_client, details_of_incident, case_status.name AS case_status FROM clients INNER JOIN gender ON gender_id=gender.id INNER JOIN races ON race_id=races.id INNER JOIN cases ON clients.client_id=cases.client_id INNER JOIN case_type ON case_type_id=case_type.id INNER JOIN abusers ON abuser_id=abusers.id INNER JOIN abuses ON abuse_id=abuses.id INNER JOIN case_status ON case_status_id=case_status.id;",
			(err, response) => {
				if (err) throw err;
				res.json(response.rows);
			}
		);
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
