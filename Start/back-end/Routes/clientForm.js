const express = require("express");
const { v4: uuidV4 } = require("uuid");

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

router.post("/api/gbv-victim-form", (req, res, next) => {
	console.log("Form route triggered");
	const dateCreated = new Date();
	const clientId = uuidV4();
	const caseNum = uuidV4();
	const caseStatus = "Unclaimed";
	const {
		caseType,
		fullName,
		gender,
		address,
		doB,
		govId,
		phoneNumber,
		email,
		ethnicity,
		language,
		educationLevel,
		maritalStatus,
		numOfDep,
		secondaryNumber,
		nameOfAbuser,
		abuserContact,
		genderOfAbuser,
		relationshipToAbuser,
		typeOfAbuse,
		history,
	} = req.body;
	const queryClient =
		"INSERT INTO clients (name, gender_id, address, date_of_birth, government_id, phone_number, email, race_id, languages, education_level, marital_status_id, number_of_dependants, date_created,client_id, alternate_contact) VALUES($1,(SELECT id FROM gender where name=$2),$3,$4,$5,$6,$7,(SELECT id FROM races WHERE name=$8),$9,$10,(SELECT id FROM marital_status WHERE name=$11),$12,$13,$14,$15)";
	const queryAbusers =
		"INSERT INTO abusers (name, contact_number, gender_id, relationship_to_client, date_created) VALUES($1,$2,(SELECT id FROM gender WHERE name=$3),$4, $5);";
	const queryCases =
		"INSERT INTO cases (case_number, details_of_incident, abuse_id,date_created, client_id, abuser_id, case_type_id, case_status_id) VALUES($1,$2,(SELECT id FROM abuses WHERE type_of=$3),$4, (SELECT client_id FROM clients WHERE client_id=$5),(SELECT id FROM abusers WHERE name=$6 LIMIT 1),(SELECT id from case_type WHERE name=$7),(SELECT id FROM case_status WHERE name=$8))";
	try {
		client.query(
			"SELECT client_id FROM clients WHERE name=$1 AND date_of_birth=$2",
			[fullName, doB],
			(err, response) => {
				if (err) throw err;
				if (response.rows.length > 0) {
					console.log("Client already exists");
					res
						.status(200)
						.send("Data capture in progress, thank you for using our platform");
					next();
				} else {
					client.query(
						queryClient,
						[
							fullName,
							gender,
							address,
							doB,
							govId,
							phoneNumber,
							email,
							ethnicity,
							language,
							educationLevel,
							maritalStatus,
							numOfDep,
							dateCreated,
							clientId,
							secondaryNumber,
						],
						(err, response) => {
							if (err) throw err;
							console.log("Done with client query");
							res
								.status(200)
								.send(
									"Data capture in progress,thank you for using our platform"
								);
							next();
						}
					);
				}
				client.query(
					"SELECT id FROM abusers WHERE name=$1 AND contact_number=$2",
					[nameOfAbuser, abuserContact],
					(err, response) => {
						if (err) throw err;
						if (response.rows.length > 0) {
							console.log("Abuser already exits");
							next();
						} else {
							client.query(
								queryAbusers,
								[
									nameOfAbuser,
									abuserContact,
									genderOfAbuser,
									relationshipToAbuser,
									dateCreated,
								],
								(err, response) => {
									if (err) throw err;
									console.log("Done with abuser's query");
									next();
								}
							);
						}
						client.query(
							queryCases,
							[
								caseNum,
								history,
								typeOfAbuse,
								dateCreated,
								clientId,
								nameOfAbuser,
								caseType,
								caseStatus,
							],
							(err, response) => {
								if (err) throw err;
								console.log("Cases query done!");
							}
						);
					}
				);
			}
		);
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
