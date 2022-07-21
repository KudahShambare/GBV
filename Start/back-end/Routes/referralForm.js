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

router.post("/api/gbv-referring-organisation-form", (req, res, next) => {
	console.log("Form route triggered");
	console.log(req.body);
	const dateCreated = new Date();
	const clientId = uuidV4();
	const caseNum = uuidV4();
	const referringOrgId = uuidV4();
	const caseStatus = "Unclaimed";
	const {
		caseType,
		fullName,
		doB,
		gender,
		language,
		race,
		educationLevel,
		maritalStatus,
		address,
		phoneNumber,
		secondaryNumber,
		dependants,
		employer,
		jobTitle,
		workNumber,
		other,
		typeOfAbuse,
		reasonForReferral,
		occurrenceDate,
		locationOfIncident,
		lengthOfAbuse,
		nameOfAbuser,
		genderOfAbuser,
		abuserContact,
		relationshipToAbuser,
		referredBy,
		referrerTitle,
		organisation,
		orgType,
		orgTel,
		orgCel,
		orgEmail,
		orgAddress,
		whatHasBeenDone,
		clientAware,
		clientWillingToTravel,
		ongoingInvolvement,
	} = req.body;
	const clientQuery =
		"INSERT INTO clients (name, gender_id, address, date_of_birth, phone_number, race_id, languages, education_level, marital_status_id, date_created, client_id, alternate_contact) VALUES($1,(SELECT id FROM gender WHERE name=$2),$3,$4,$5,(SELECT id FROM races WHERE name=$6),$7,$8,(SELECT id FROM marital_status WHERE name=$9),$10,$11,$12)";
	const abuserQuery =
		"INSERT INTO abusers (name, contact_number, gender_id, relationship_to_client, date_created) VALUES($1,$2,(SELECT id FROM gender WHERE name=$3),$4,$5)";
	const organisationQuery =
		"INSERT INTO referring_organizations (organization_name, location, contact_number, email, authorized_person_name, organization_type, touching_nations_id, date_created, authorized_person_contact) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)";
	const casesQuery =
		"INSERT INTO cases (case_number, client_id, abuser_id, abuse_id, date_created, details_of_incident, case_type_id, case_status_id) VALUES($1,(SELECT client_id FROM clients WHERE name=$2 LIMIT 1),(SELECT id FROM abusers WHERE name=$3 LIMIT 1),(SELECT id FROM abuses WHERE type_of=$4),$5,$6,(SELECT id from case_type WHERE name=$7),(SELECT id FROM case_status WHERE name=$8))";
	const referralQuery =
		"INSERT INTO referrals (referring_org_touching_nations_id, client_id, date_created, alternate_contact_number, employer, job_title, work_number, abuser_id, date_of_incident, location_of_incident,case_number, what_has_been_done, ongoing_involvement, client_aware_of_referral, client_willing_to_travel, other, dependants, duration_of_abuse, title_of_referrer) VALUES((SELECT touching_nations_id FROM referring_organizations WHERE organization_name=$1 LIMIT 1),(SELECT client_id FROM clients WHERE name=$2 LIMIT 1),$3,$4,$5,$6,$7,(SELECT id FROM abusers WHERE name=$8 LIMIT 1),$9,$10,(SELECT case_number FROM cases WHERE case_number=$11 LIMIT 1),$12,$13,$14,$15,$16,$17,$18, $19)";
	try {
		client.query(
			"SELECT client_id FROM clients WHERE name=$1 AND date_of_birth=$2",
			[fullName, doB],
			async (err, result) => {
				if (err) throw err;
				const response = await result;
				if (response.rows.length > 0) {
					console.log("Client already exists");
					res
						.status(200)
						.send("Data capture in progress,thank you for using our platform");
					next();
				} else {
					client.query(
						clientQuery,
						[
							fullName,
							gender,
							address,
							doB,
							phoneNumber,
							race,
							language,
							educationLevel,
							maritalStatus,
							dateCreated,
							clientId,
							secondaryNumber,
						],
						(err, response) => {
							if (err) throw err;
							console.log("Client query done");
							console.log("This is the UUID case number", caseNum);
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
							console.log("Abuser already exists");
							next();
						} else {
							client.query(
								abuserQuery,
								[
									nameOfAbuser,
									abuserContact,
									genderOfAbuser,
									relationshipToAbuser,
									dateCreated,
								],
								(err, response) => {
									if (err) throw err;
									console.log("Done with abuser query");
									console.log("This is the UUID case number", caseNum);
									next();
								}
							);
						}
						client.query(
							"SELECT id FROM referring_organizations WHERE organization_name=$1 and location=$2",
							[organisation, orgAddress],
							(err, response) => {
								if (err) throw err;
								if (response.rows.length > 0) {
									console.log("Referring Org already exists");
									next();
								} else {
									client.query(
										organisationQuery,
										[
											organisation,
											orgAddress,
											orgTel,
											orgEmail,
											referredBy,
											orgType,
											referringOrgId,
											dateCreated,
											orgCel,
										],
										(err, response) => {
											if (err) throw err;
											console.log("Org query done");
											console.log("This is the UUID case number", caseNum);
											next();
										}
									);
								}
								client.query(
									casesQuery,
									[
										caseNum,
										fullName,
										nameOfAbuser,
										typeOfAbuse,
										dateCreated,
										reasonForReferral,
										caseType,
										caseStatus,
									],
									(err, response) => {
										if (err) throw err;
										console.log("Cases query complete");
										console.log("This is the UUID case number", caseNum);
										// next();
										client.query(
											referralQuery,
											[
												organisation,
												fullName,
												dateCreated,
												secondaryNumber,
												employer,
												jobTitle,
												workNumber,
												nameOfAbuser,
												occurrenceDate,
												locationOfIncident,
												caseNum,
												whatHasBeenDone,
												ongoingInvolvement,
												clientAware,
												clientWillingToTravel,
												other,
												dependants,
												lengthOfAbuse,
												referrerTitle,
											],
											(err, response) => {
												if (err) throw err;
												console.log("Final query complete");
											}
										);
									}
								);
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
