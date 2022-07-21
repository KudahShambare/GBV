const express = require("express");
const { Client } = require("pg");
const { v4: uuidV4 } = require("uuid");
const router = express.Router();

// Connection configuration
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

router.post("/referring-org-form", (req, res) => {
	console.log("Referring Org Reg Route hit");
	const touchingNationsID = uuidV4();
	const dateCreated = new Date();
	const {
		orgName,
		location,
		contactNum,
		email,
		authPerson,
		orgType,
		authPersonContact,
	} = req.body;
	try {
		client.query(
			"SELECT * FROM referring_organizations WHERE organization_name=$1 AND location=$2 AND email=$3",
			[orgName, location, email],
			(err, response) => {
				if (err) throw err;
				if (response.rows.length > 0) {
					console.log("Organization already exists");
					res
						.status(200)
						.send(
							"An organization with this name, location and email has already been submitted."
						);
				} else {
					client.query(
						"INSERT INTO referring_organizations (organization_name, location, contact_number, email, authorized_person_name, organization_type,touching_nations_id, date_created, authorized_person_contact) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)",
						[
							orgName,
							location,
							contactNum,
							email,
							authPerson,
							orgType,
							touchingNationsID,
							dateCreated,
							authPersonContact,
						],
						(err, response) => {
							if (err) throw err;
							res
								.status(200)
								.send("Referring organization details captured. Thank you.");
						}
					);
				}
			}
		);
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
